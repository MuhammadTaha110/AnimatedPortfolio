import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  const templateParams = {
    name,
    email,
    message,
    username: name,
    title: `Portfolio message from ${name}`,
    time: new Date().toLocaleString("en-PK", {
      dateStyle: "medium",
      timeStyle: "short",
    }),
  };

  if (
    !process.env.NEXT_PUBLIC_SERVICE_ID ||
    !process.env.NEXT_PUBLIC_TEMPLATE_ID ||
    !process.env.NEXT_PUBLIC_USER_ID
  ) {
    throw new Error(
      "EmailJS is not configured. Add keys to .env.local and restart the dev server."
    );
  }

  return emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID,
    process.env.NEXT_PUBLIC_TEMPLATE_ID,
    templateParams,
    {
      publicKey: process.env.NEXT_PUBLIC_USER_ID,
      limitRate: {
        throttle: 10000,
      },
    }
  );
};

export default mail;
