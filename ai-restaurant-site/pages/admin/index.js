import {useEffect, useState} from 'react'
import Router from 'next/router'
export default function Admin(){
  useEffect(()=>{ fetch('/api/admin/check').then(r=>{ if(!r.ok) Router.push('/admin/login') }) },[])
  const [uploads,setUploads]=useState([])
  useEffect(()=>{ fetch('/api/admin/uploads').then(r=>r.json()).then(setUploads) },[])
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      <div>
        <h2 className="text-lg font-semibold">Pending Uploads</h2>
        <div className="space-y-3 mt-3">
          {uploads.map(u=>(
            <div key={u.id} className="p-3 border rounded flex justify-between items-center">
              <div>
                <div><strong>{u.guestName}</strong> (guest #{u.guestId})</div>
                <div>{u.filePath || u.instagramUrl}</div>
              </div>
              <div className="space-x-2">
                <button onClick={()=>fetch('/api/admin/upload/approve',{method:'POST',body:JSON.stringify({id:u.id}),headers:{'Content-Type':'application/json'}}).then(()=>location.reload())} className="px-3 py-1 bg-green-600 text-white rounded">Approve</button>
                <button onClick={()=>fetch('/api/admin/upload/reject',{method:'POST',body:JSON.stringify({id:u.id}),headers:{'Content-Type':'application/json'}}).then(()=>location.reload())} className="px-3 py-1 bg-red-600 text-white rounded">Reject</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
