import {useState, useEffect} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
export default function Guest(){
  const router = useRouter()
  const { table } = router.query
  const [name,setName]=useState('')
  const [mobile,setMobile]=useState('')
  const [guest, setGuest] = useState(null)
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const res = await fetch('/api/guest/create',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({name,mobile,table})})
    const data = await res.json()
    if(res.ok) { setGuest(data); alert('Guest created'); }
  }
  return (
    <main className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">Guest Login — Table {table || '—'}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input value={name} onChange={e=>setName(e.target.value)} required placeholder="Name" className="w-full p-2 border rounded"/>
        <input value={mobile} onChange={e=>setMobile(e.target.value)} required placeholder="Mobile" className="w-full p-2 border rounded"/>
        <button className="px-4 py-2 bg-green-600 text-white rounded">Enter</button>
      </form>
      {guest && <div className="mt-4 p-3 border rounded">
        <strong>Guest created:</strong> {guest.name} — points: {guest.points}
      </div>}
    </main>
  )
}
