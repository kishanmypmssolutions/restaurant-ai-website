// pages/index.js
import Link from 'next/link'

export default function Home() {
  return (
    <main style={{padding:20, maxWidth:700, margin:'0 auto', fontFamily:'sans-serif'}}>
      <h1 style={{fontSize:28}}>AI Restaurant — Quick Starter</h1>
      <p>This is a placeholder index so Next.js build can succeed.</p>
      <ul>
        <li><Link href="/guest?table=1"><a>Guest (table=1)</a></Link></li>
        <li><Link href="/admin/login"><a>Admin Login</a></Link></li>
      </ul>
      <p>After build succeeds, we will add full pages (guest, admin, api) or move your existing files into <code>pages/</code>.</p>
    </main>
  )
}
