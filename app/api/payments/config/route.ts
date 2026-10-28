import { env } from 'cloudflare:workers';
import { config, json } from '../../../../server/payments.mjs';
export const dynamic='force-dynamic';
export function GET(){return json(config(env));}
