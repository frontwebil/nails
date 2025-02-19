import emailjs from "emailjs-com";

export const sendEmail = async (bookingData) => {
  const SERVICE_ID = import.meta.env.VITE_MAIL_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_MAIL_TEMPLATE_ID;

  const templateParams = {
    message: `
    🎯 *New Booking Request!

    👤 *Client: ${bookingData.name}
    📱 *Phone: ${bookingData.phone}
    💅 *Service: ${bookingData.category}
    📅 *Date: ${bookingData.date}
    ⏰ *Time: ${bookingData.time}
    🧵 *Notes:* ${bookingData.comment}
    `,
  };

  console.log(templateParams);

  try {
    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      "ddPRn4D8JOzZakiPX"
    );
    console.log("SUCCESS!", response.status, response.text);
  } catch (error) {
    console.error("FAILED...", error);
  }
};
