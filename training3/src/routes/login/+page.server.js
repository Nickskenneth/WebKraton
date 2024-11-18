// @ts-nocheck

import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
	login: async ({ request, cookies }) => {
		const formData = await request.formData();
		const entries = Object.fromEntries(formData);

		if (entries.username !== 'admin') {
			return fail(400, { message: 'username salah.' });
		}

		if (entries.password !== '1234') {
			return fail(400, { message: 'password salah.' });
		}

		const authValue = {
			name: 'Zelvin',
			age: 21,
			gender: 'non binary',
			role: 'admin'
		};

		cookies.set('auth', JSON.stringify(authValue), {
			maxAge: 60 * 60 * 24,
			sameSite: 'strict',
			path: '/',
			secure: false,
			httpOnly: false
		});

		return redirect(302, '/');
	}
};
