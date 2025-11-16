import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end()
  const { guestId, items } = req.body
  if(!guestId || !items || !items.length) return res.status(400).json({error:'invalid'})
  const order = await prisma.order.create({data:{guestId, status:'PLACED', items:{create: items.map(i=>({menuItemId:i.id, quantity:i.quantity, price:i.price}))}}})
  res.json(order)
}
