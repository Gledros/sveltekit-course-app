import { randomUUID as uuid } from 'crypto';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const data = await request.json();

	if (!data.username) throw error(400, 'Username is required');
	if (!data.password) throw error(400, 'Password is required');

	const id = uuid();
	cookies.set('token', id, { path: '/' });

	return json({ name: data.username, token: id });
};
