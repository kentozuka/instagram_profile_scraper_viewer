import { signIn } from 'next-auth/client'

import { useSession } from 'next-auth/client'

import Link from 'next/link'

export default function unauthenticated() {
  const [session, loading] = useSession()

  if (session) return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Link href="/">Go home</Link>
    </div>
  )

  return (
    <>
      <h2 className="text-3xl font-bold">You need to be authenticated to use this app</h2>
      <button className="p-4 bg-gray-200" onClick={signIn}>Sign in</button>
    </>
  )
}