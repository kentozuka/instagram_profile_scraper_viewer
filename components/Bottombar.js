import Link from 'next/link'

export default function Bottombar() {
  return (
    <Link href="/about">
      <div className="w-full h-20 fixed bottom-0">
        <div className="w-full h-full flex items-center justify-center">
          <button className="index-10 shadow px-5 py-2 rounded-full bg-clubhouse-green transform -translate-y-4">
            <span className="text-white text-xl font-bold">
              + Add a user
          </span>
          </button>
        </div>
      </div>
    </Link>
  )
}