import { signOut } from 'next-auth/client'
import { useState } from 'react'

export default function Navigation({ user }) {
  const [show, setShow] = useState(false)

  return (
    <div className="px-3 flex items-center w-full h-20 relative">
      <div onClick={() => setShow(!show)} className="flex items-center bg-clubhouse-deep p-2 rounded-lg">
        <img className="w-10 rounded-lg border border-gray-300" src={user.image} alt={user.name} />
        <p className="px-4">{user.name}</p>
      </div>
      {
        show &&
        <div className="absolute z-10 transform translate-y-12 bg-clubhouse-white rounded-lg shadow-lg">
          <ul className="p-4">
            <li className="text-clubhouse-red">
              <button onClick={signOut}>Sign out</button>
            </li>
          </ul>
        </div>
      }
    </div >
    // <>
    //   Signed in as {user.email} <br />
    //   <button className="p-4 bg-gray-200" onClick={signOut}>Sign out</button>
    // </>
  )
}