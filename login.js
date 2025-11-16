import { serialize } from 'cookie'
export default function handler(req,res){
  if(req.method!=='POST') return res.status(405).end()
  const { password } = req.body
  if(password && password === process.env.ADMIN_PASSWORD){
    res.setHeader('Set-Cookie', serialize('admin_token','1',{path:'/',httpOnly:true}))
    return res.status(200).end()
  }
  res.status(401).end()
}
