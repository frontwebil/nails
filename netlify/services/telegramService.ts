import { BookingData } from '../types/types';

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
const URI_API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

export interface TelegramResponse {
  ok: boolean;
  description?: string;
}

export const sendBookingNotification = async (bookingData: BookingData): Promise<TelegramResponse> => {
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

  try {
    const response = await fetch(URI_API, {
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

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Telegram notification error:', error);
    throw new Error('Failed to send booking notification');
  }
};