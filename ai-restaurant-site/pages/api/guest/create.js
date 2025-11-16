import { PrismaClient } from '@prisma/client'
import { serialize } from 'cookie'
const prisma = new PrismaClient()
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end()
  const { name, mobile, table } = req.body
  if(!name || !mobile) return res.status(400).json({error:'missing'})
  const guest = await prisma.guest.create({data:{name,mobile,tableId: table ? Number(table) : null, points:0}})
  // set session cookie
  res.setHeader('Set-Cookie', serialize('guest_token', String(guest.id), { path:'/', httpOnly:true }))
  res.json(guest)
}
