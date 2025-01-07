import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { email } = body;
  console.log(email);

  if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  try {
    // 1. Send Thank-You Email to the User
    const transporter = nodemailer.createTransport({
      host: "smtp.c1.liara.email",
      port: "587",
      secure: false,
      auth: {
        user: "elegant_hermann_vgm9in", // Your email address
        pass: "609a37df-55b3-4180-8137-4406e7223b24", // Your email password or app-specific password
      },
    }); //arash.esnaaashari@gmail.com
    console.log("auth");

    await transporter.sendMail({
      from: "<contract@funnibble.com>",
      to: email,
      subject: "Thank You for Joining the Waitlist!",
      html: `
        <h1>Thank You for Joining the Waitlist!</h1>
        <p>We're excited to have you on board. Stay tuned for updates!</p>
        <p><a href="funnibble.com">funnibble.com<a/></p>
      `,
    });
    console.log("sent TO");

    // 2. Notify You of the New Signup
    // await transporter.sendMail({
    //   from: "<contract@funnibble.com>",
    //   to: "arash.esnaaashari@gmail.com", // Your notification email
    //   subject: "New Waitlist Signup",
    //   html: `
    //     <h1>New Signup</h1>
    //     <p>Email: ${email}</p>
    //   `,
    // });
    // console.log("notify");

    // 3. Respond to the Frontend
    return NextResponse.json(
      { message: "Email submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to process your request." },
      { status: 500 }
    );
  }
}
