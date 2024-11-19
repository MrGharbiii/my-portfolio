// 'use server';
// import emailjs from 'emailjs-com';
// export async function handleMail(formData) {
//   const email = formData.get('email');
//   const subject = formData.get('subject');
//   const message = formData.get('message');

//   try {
//     const response = await emailjs.send(
//       process.env.EMAILJS_SERVICE_ID, // Use environment variable
//       process.env.EMAILJS_TEMPLATE_ID, // Use environment variable
//       { user_email: email, subject, message },
//       process.env.EMAILJS_PUBLIC_KEY // Use environment variable
//     );

//     if (response.status === 200) {
//       return message;
//     }
//   } catch (error) {
//     console.error('Email send error:', error);
//     return 'error';
//   }
// }
