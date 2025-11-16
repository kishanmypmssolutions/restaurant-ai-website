import formidable from 'formidable'
import fs from 'fs'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export const config = { api: { bodyParser: false } }

export default async function handler(req,res){
  if(req.method !== 'POST') return res.status(405).end()
  const form = formidable({ multiples:false, uploadDir: './uploads', keepExtensions:true })
  form.parse(req, async (err, fields, files) => {
    if(err) return res.status(500).json({error:err.message})
    const guestId = Number(fields.guestId)
    let filePath = null
    if(files.photo){
      const file = files.photo
      filePath = file.newFilename ? ('/uploads/' + file.newFilename) : ('/uploads/' + file.originalFilename)
      // move handled by formidable to uploadDir
    }
    const upload = await prisma.upload.create({data:{guestId, filePath, instagramUrl: fields.instagramUrl || null, approved:false}})
    res.json(upload)
  })
}
