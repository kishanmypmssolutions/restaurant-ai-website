import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).end()
  const { id } = req.body
  await prisma.upload.delete({where:{id: Number(id)}})
  res.json({ok:true})
}
