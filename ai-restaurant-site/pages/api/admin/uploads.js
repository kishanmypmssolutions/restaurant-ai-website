import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(req,res){
  const uploads = await prisma.upload.findMany({where:{approved:false}, include:{guest:true}, orderBy:{createdAt:'desc'}})
  const out = uploads.map(u=>({ id:u.id, guestId:u.guestId, guestName: u.guest.name, filePath: u.filePath, instagramUrl: u.instagramUrl }))
  res.json(out)
}
