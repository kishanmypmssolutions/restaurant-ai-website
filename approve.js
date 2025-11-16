import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end()
  const { id } = req.body
  const upload = await prisma.upload.update({where:{id: Number(id)}, data:{approved:true}})
  // add loyalty transaction + points
  await prisma.loyaltyTransaction.create({data:{guestId:upload.guestId,points:10,reason:'photo approved'}})
  await prisma.guest.update({where:{id:upload.guestId}, data:{points:{increment:10}}})
  res.json({ok:true})
}
