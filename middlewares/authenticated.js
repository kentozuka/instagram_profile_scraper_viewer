import { getSession } from 'next-auth/client'

export default async function authenticated (ctx) {
  const session = await getSession(ctx)
  if (!session) {
    ctx.res.writeHead(302, { Location: '/unauthenticated' })
    ctx.res.end()
    return { props: { user: null } }
  }
}