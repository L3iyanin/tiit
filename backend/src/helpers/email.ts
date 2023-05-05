export function sendEmail(input: { emails: string[]; subject: string; text: string; html: string }) {
	const mailgun = require("mailgun-js");

	const mg = mailgun({
		apiKey: process.env.MAILGUN_API_KEY,
		domain: process.env.MAILGUN_DOMAIN,
	});

	// send to multiple emails
	const data = {
		from: `ViteForm <noreply@${process.env.MAILGUN_DOMAIN}>`,
		to: input.emails,
		subject: input.subject,
		text: input.text,
		html: input.html,
	};

	console.log("data", data);

	mg.messages().send(data, function (error, body) {
		if (error) {
			console.log("Email error: ", error);
		}
		console.log("Email Body:", body);
	});
}
