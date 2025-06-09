import { beautifyLog } from "./utils";

const domain = process.env.NEXT_PUBLIC_APP_URL;

export async function sendVerificationEmail(email: string, token: string) {
	const confirmLink = `${domain}/auth/new-verification?token=${token}`;

	// await resend.emails.send({
	//   from: 'onboarding@resend.dev',
	//   to: email,
	//   subject: 'Confirm your email',
	//   html: `<p>Click <a href="${confirmLink}">here</a> to confirm email.</p>`
	// })

	beautifyLog("🔗 Confirmation Link:", confirmLink);
}

export async function sendPasswordResetEmail(email: string, token: string) {
	const resetPasswordLink = `${domain}/auth/new-password?token=${token}`;

	// await resend.emails.send({
	//   from: 'onboarding@resend.dev',
	//   to: email,
	//   subject: 'Reset your password',
	//   html: `<p>Click <a href="${resetPasswordLink}">here</a> to reset your password.</p>`
	// })

	beautifyLog("🔗 ResetPassword Link:", resetPasswordLink);
}

export async function sendTwoFactorTokenEmail(email: string, token: string) {
	// await resend.emails.send({
	//   from: 'onboarding@resend.dev',
	//   to: email,
	//   subject: '2FA Code',
	//   html: `<p>Your 2FA Code: ${token}</p>`
	// })
	beautifyLog("TwoFactorToken:", token);
}
