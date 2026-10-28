import { env } from 'cloudflare:workers';
import { notification } from '../../../../server/payments.mjs';
export const dynamic='force-dynamic';
export function POST(request:Request){return notification(request,env);}
