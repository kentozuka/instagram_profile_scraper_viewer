import { signOut, getSession } from 'next-auth/client'
import Head from 'next/head'

import db from '../src/db'

import Profile from '../components/Profile'
import Navigation from '../components/Navigation'
import Bottombar from '../components/Bottombar'

export default function Home({ user, profiles }) {
  return (
    <>
      <Head>
        <title>Viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="lg:pt-4 lg:px-12">
        <Navigation user={user} />

        <div className="pb-28">
          {
            !profiles.length && <>
              <div className="w-full h-screen flex items-center justify-center">
                <h1 className="p-4 rounded-lg bg-clubhouse-deep text-clubhouse-white">Add a user!</h1>
              </div>
            </>
          }

          <div className="flex flex-wrap">
            {
              profiles && <>
                {profiles.map((profile) => {
                  return <Profile key={profile.id} profile={profile} />
                })}
              </>
            }
          </div>
        </div>

        <Bottombar />
      </div>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx)
  if (!session) {
    ctx.res.writeHead(302, { Location: '/unauthenticated' })
    ctx.res.end()
    return { props: { user: null } }
  }

  const slcts = [
    'id',
    'username',
    'full_name',
    'biography',
    'picture',
    'is_verified',
    'post',
    'follow',
    'followed_by',
    'last_fetched'
  ]
  const profiles = await db()
    .select(slcts)
    .from('Profile')
    .where('is_private', false)
    .limit(100)

  return {
    props: {
      user: session.user,
      profiles
    },
  }
}
