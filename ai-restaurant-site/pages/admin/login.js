import {useState} from 'react'
import Router from 'next/router'
export default function Login(){
  const [pass,setPass]=useState('')
  const submit=async(e)=>{
    e.preventDefault()
    const res=await fetch('/api/admin/login',{method:'POST',body:JSON.stringify({password:pass}),headers:{'Content-Type':'application/json'}})
    if(res.ok) Router.push('/admin')
    else alert('Bad password')
  }
  return <main className="p-6 max-w-md mx-auto">
    <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
    <form onSubmit={submit} className="space-y-3">
      <input value={pass} onChange={e=>setPass(e.target.value)} type="password" placeholder="ADMIN_PASSWORD" className="w-full p-2 border rounded"/>
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Login</button>
    </form>
  </main>
}
