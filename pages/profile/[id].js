import { useRouter } from 'next/router'
import db from '../../src/db'

import { useSession } from 'next-auth/client'

import Loading from '../../components/Loading'
import Profile from '../../components/Profile'
import Statistics from '../../components/Statistics'

export default function ProfileDetail({ profile, posts, stats }) {
  const router = useRouter()
  const [session, loading] = useSession()

  if (loading) return <Loading />

  if (!session) return <div className="text-red-300">you need to sign in</div>
  
  return (
    <div className="bg-clubhouse-white pt-3 lg:pt-8 lg:px-48">
      <button className="p-4" onClick={() => router.push('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <Profile profile={profile} large={true} />

      <Statistics statistics={stats} followers={profile.followed_by} />

      {/* <pre className="w-full">
        {JSON.stringify(stats, null, 2)}
      </pre> */}
    </div>
  )
}

export async function getStaticProps(ctx) {
  const id = ctx.params.id

  const profile = await getProfile(id)
  const posts = await getPosts(id)
  const stats = await getStatistics(id)

  return {
    props: {
      profile,
      posts,
      stats
    }
  }
}

async function getProfile(id) {
  const profile = db()
    .select('*')
    .from('Profile')
    .where('id', id)
    .first()

  return profile
}

async function getPosts(id) {
  const posts = await db()
    .select('*')
    .from('Post')
    .where('profile_id', id)
    .limit(1)

  return posts
}

async function getStatistics(id) {
  const stats = await db()
    .select('taken_at_timestamp', 'comment_on_fetch', 'like_on_fetch')
    .from('Post')
    .where('profile_id', id)

  return stats
}

export async function getStaticPaths() {
  const profiles = await db()
    .select('id')
    .from('Profile')

  const paths = profiles.map(x => `/profile/${x.id}`)
  return {
    paths,
    fallback: false
  }
}
