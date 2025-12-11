// type DataEmail = {
//   from: string; //"you@example.com",
//   to: string; //"user@gmail.com",
//   subject: string; //"hello world",
//   text: string; //"Hello world?",
//   html: string; //"<b>Hello world?</b>",
// };

// export async function SendEmail(value: DataEmail): Promise<string> {
//   return new Promise(async (resolve, reject) => {
//     const transporter = nodemailer.createTransport({
//       host: "localhost",
//       port: 465,
//       secure: true,
//       auth: {
//         user: "myusername",
//         pass: "myuserpassword",
//       },
//     });
//     try {
//       const info = await transporter.sendMail({
//         from: value.from, //'"Maddison Foo Koch" <maddison53@ethereal.email>',
//         to: "test@yopmail.com", //"bar@example.com, baz@example.com",
//         subject: value.subject, //"Hello ✔",
//         text: value.text, //"Hello world?", // plain‑text body
//         html: value.html, //"<b>Hello world?</b>", // HTML body
//       });
//       transporter.close();
//       resolve(info.response);
//       return `Message sent:, ${info.messageId}`;
//     } catch (err) {
//       transporter.close();
//       // Rechazar la promesa con el error
//       reject(err);
//     }
//   });
// }
