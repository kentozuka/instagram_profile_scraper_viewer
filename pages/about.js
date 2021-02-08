import { useSession } from 'next-auth/client'
import Link from 'next/link'

export default function About() {
  const [session, loading] = useSession()

  return (
    <div>
      <div className="">
        <p>
          this is the user:
        </p>
      </div>
      <Link href="/">
        <a>INDEX</a>
      </Link>
    </div>
  )
}