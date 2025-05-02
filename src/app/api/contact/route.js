import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message } = await req.json();
  try {
    const data = await resend.email.send({
      from: "Your Portfolio <you@emblaandersson.dev>",
      to: process.env.MY_EMAIL,
      subject: `New contact from ${name}`,
      text: `From ${name} <${email}>\n\n${message}`,
    });
    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Email failed to send" }, { status: 500 });
  }
}
