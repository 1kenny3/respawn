import { redirect } from 'next/navigation';
export default async function Page({searchParams}:{searchParams:Promise<{payment?:string}>}){const p=await searchParams;const id=typeof p.payment==='string'&&/^[a-f0-9-]{36}$/.test(p.payment)?p.payment:null;redirect('/index.html'+(id?'?payment='+encodeURIComponent(id):''));}
