"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'
const navbar = () => {
  const { data: session } = useSession()
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <div className='bg-black text-white flex items-center justify-around h-12'>
      <div className="logo font-bold text-2xl"><Link href={"/"}>Getmeachai</Link></div>
      <div>
        {/* <ul className='flex gap-10'>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Login</li>
          <li>Signin</li>
        </ul> */}
        <div className='flex gap-2 items-center'>
          {session && <Link href="/profile"><li className="flex items-center gap-2 list-none bg-gray-600 rounded-full p-1 px-2 hover:bg-gray-500">
                <img src={session.user.image} alt="" width={26} className="rounded-full"/>
                {session.user.name}
                </li></Link>}
          <Link href="/login">
            {!session && <li className='list-none'><button className="bg-blue-600 p-1 px-4 rounded-md font-bold">Log in</button></li>}
          </Link>
          {session && <li className='list-none'><button onClick={()=>{signOut()}} className="bg-blue-600 p-1 px-4 rounded-md font-bold">Log Out</button></li>}
        </div>
      </div>
    </div>
  )
}

export default navbar
