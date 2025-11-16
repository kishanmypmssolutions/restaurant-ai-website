export default function handler(req,res){
  const cookie = req.headers.cookie || ''
  if(cookie.includes('admin_token')) return res.status(200).end()
  res.status(401).end()
}
