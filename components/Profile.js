import Link from 'next/link'
import { commad } from '../utils/number'

import { format } from 'date-fns'

export default function Profile({ profile, large }) {
  return (
    <Link href={`/profile/${profile.id}`} key={profile.id} onClick={large ? (e) => e.preventDefault() : undefined } >
      <div className={`max-w-md cursor-pointer ${large ? 'bg-clubhouse-white pt-1 p-3 border-b' : 'py-2 px-3'}`}>
        <div className={large ? '' : 'p-4 rounded-3xl bg-clubhouse-white shadow'}>
          <div className="flex items-center">
            <div className="w-20 h-20 relative">
              <img className="w-full h-full border border-gray-300 rounded-3xl" src={profile.picture} alt={profile.username} />
              {profile.is_verified && <div className="absolute right-0 bottom-0 bg-clubhouse-white border-2 p-1 rounded-full transform translate-x-2 translate-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-clubhouse-orange"
                >
                  <circle cx="12" cy="8" r="7"></circle>
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                </svg>
              </div>
              }
            </div>
            <div className="pl-4">
              <h1 className="font-bold pb-1">{profile.username}</h1>
              <h2 className="text-xs text-gray-400 break-all">{profile.full_name}</h2>
            </div>
          </div>

          <div className="py-4">
            <p className="text-sm">
              {profile.biography}
            </p>
            {large && <div className="py-2">
              <a href={profile.external_url} target="_blank" className="block truncate text-blue-400">
                {profile.external_url}
              </a>
            </div>
            }
            <small className="pt-2 text-gray-400">取得日: {format(
              new Date(profile.last_fetched * 1000),
              'yyyy年MM月dd日'
            )}</small>
          </div>

          <div className="flex justify-between p-2">
            <div className="flex flex-col text-center px-2">
              <h1 className="text-sm text-gray-600">posts</h1>
              <p className="font-bold">{commad(profile.post)}</p>
            </div>
            <div className="flex flex-col text-center px-2">
              <h1 className="text-sm text-gray-600">followers</h1>
              <p className="font-bold">{commad(profile.followed_by)}</p>
            </div>
            <div className="flex flex-col text-center px-2">
              <h1 className="text-sm text-gray-600">following</h1>
              <p className="font-bold">{commad(profile.follow)}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}