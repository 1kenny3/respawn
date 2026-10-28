import { env } from 'cloudflare:workers';
import { paymentStatus } from '../../../../server/payments.mjs';
export const dynamic='force-dynamic';
export function GET(request:Request){return paymentStatus(request,env);}
