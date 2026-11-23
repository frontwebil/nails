import { BookingData } from "../types/types";

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
const URI_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export interface TelegramResponse {
  ok: boolean;
  description?: string;
}

export const sendBookingNotification = async (
  bookingData: BookingData,
): Promise<TelegramResponse> => {
  const inputContents = [
    "🎯 *New Booking Request!",
    "",
    `👤 *Client:* ${bookingData.name}`,
    `📱 *Phone:* ${bookingData.phone}`,
    `💅 *Service:* ${bookingData.category}`,
    `📅 *Date:* ${bookingData.date}`,
    `⏰ *Time:* ${bookingData.time}`,
    `🧵 *Notes:* ${bookingData.comment}`,
  ];

  const message = inputContents.join("\n");

  // 1. Lentra lead — помилка тут логується, але не блокує відправку в Telegram
  try {
    const res = await fetch("https://www.lentra.tech/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-site-id": "a7be7e5e",
      },
      body: JSON.stringify({
        booking_date: bookingData.date,
        Booking_time: bookingData.time,
        comment: bookingData.comment,
        name: bookingData.name,
        Service: bookingData.category,
        Telefone_number: bookingData.phone,
      }),
    });

    if (!res.ok) {
      const body = await readBodySafe(res);
      console.error("[Lentra] lead request failed:", {
        status: res.status,
        statusText: res.statusText,
        body,
      });
    }
  } catch (error) {
    console.error("[Lentra] network/request error:", error);
  }

  // 2. Telegram
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.error("[Telegram] missing env:", {
      VITE_TELEGRAM_BOT_TOKEN: Boolean(TELEGRAM_BOT_TOKEN),
      VITE_TELEGRAM_CHAT_ID: Boolean(TELEGRAM_CHAT_ID),
    });
    throw new Error("Failed to send booking notification");
  }

  let response: Response;
  try {
    response = await fetch(URI_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        parse_mode: "html",
        text: message,
      }),
    });
  } catch (error) {
    console.error("[Telegram] network/request error:", error);
    throw new Error("Failed to send booking notification");
  }

  let data: TelegramResponse;
  try {
    data = await response.json();
  } catch (error) {
    console.error("[Telegram] invalid JSON response:", {
      status: response.status,
      statusText: response.statusText,
      error,
    });
    throw new Error("Failed to send booking notification");
  }

  if (!response.ok || !data.ok) {
    console.error("[Telegram] sendMessage failed:", {
      status: response.status,
      statusText: response.statusText,
      description: data.description,
      data,
    });
  }

  return data;
};

const readBodySafe = async (res: Response): Promise<string> => {
  try {
    return await res.text();
  } catch (error) {
    return `<failed to read body: ${String(error)}>`;
  }
};
