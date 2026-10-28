import { env } from 'cloudflare:workers';
import { createPayment } from '../../../../server/payments.mjs';
import catalog from '../../../../public/products.json';
export const dynamic='force-dynamic';
export function POST(request:Request){return createPayment(request,env,catalog);}
