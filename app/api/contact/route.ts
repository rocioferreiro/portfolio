import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phoneNumber, budget, message } = await req.json();

  try {
    const resendResponse = await resend.emails.send({
      from: "Portfolio Contact <send@updates.rocioferreiro.com>",
      to: "rocio.m.ferreiro@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone Number:</b> ${phoneNumber}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });
    if(resendResponse.error) {
      console.error("Error sending email:", resendResponse.error);
      return NextResponse.json({ success: false, error: resendResponse.error }, { status: 500 });
    }
    console.log("Email sent successfully:", resendResponse);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}