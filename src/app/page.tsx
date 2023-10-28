import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen-md gap-4  flex-col items-center justify-between p-4">
      
      <ul className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
        <li className="flex  h-64 w-full items-center justify-center bg-slate-800 text-xl text-white ">
          <Link href="/movies">Movies</Link>
        </li>
        <li className="flex  h-64 w-full items-center justify-center bg-slate-800 text-xl text-white ">
          <Link href="/series">Series</Link>
        </li>
      </ul>
    </main>
  )
}
