import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Your Portfolio <you@emblaandersson.com>",
      to: process.env.MY_EMAIL,
      subject: `New contact from ${name}`,
      text: `From ${name} <${email}>\n\n${message}`,
    });
    console.log("Resend response data", data);
    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Email failed to send" }, { status: 500 });
  }
}
