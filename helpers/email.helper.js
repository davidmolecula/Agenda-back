import {MailerooClient, EmailAddress, Attachment} from "maileroo-sdk";

const client = new MailerooClient(process.env.SENDING_KEY);

export default async function sendMail(){
const referenceId = await client.sendBasicEmail({
    from: new EmailAddress("noreply@ec18bf2832f7a52e.maileroo.org", "Sender Name"),
    to: [new EmailAddress("davidmolecula@gmail.com", "Recipient Name")],
    subject: "Hello from Maileroo!",
    html: "<h1>Hello World!</h1><p>This is a test email.</p>",
    plain: "Hello World! This is a test email."
});

console.log("Email sent with reference ID:", referenceId);
return referenceId
}