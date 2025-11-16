import Link from 'next/link'
export default function Home(){
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">AI-Generated Restaurant</h1>
      <p className="mb-4">Scan table QR codes (generated in /qrcodes) or visit /guest?table=1</p>
      <div className="flex gap-4">
        <Link href='/guest?table=1'><a className="px-4 py-2 bg-sky-500 text-white rounded">Guest (table=1)</a></Link>
        <Link href='/admin'><a className="px-4 py-2 bg-gray-700 text-white rounded">Admin Panel</a></Link>
      </div>
    </main>
  )
}
