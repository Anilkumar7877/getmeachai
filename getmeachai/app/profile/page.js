"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import React from 'react'

const profile = () => {
    const { data: session } = useSession()
    // if(!session) {
    //     const router = useRouter()
    //     router.push("/login")
    //   }
    return (
        <>
          <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold pt-8">Your Profile</h1>
          <div className="flex flex-col gap-2">
            <input onChange={handlechange} className='w-[80vh] p-2 px-5 rounded-md bg-slate-700 text-white' type="text" placeholder='Your name..'/>
            <input onChange={handlechange} className='w-[80vh] p-2 px-5 rounded-md bg-slate-700 text-white' type="text" placeholder='Your email..'/>
            <input onChange={handlechange} className='w-[80vh] p-2 px-5 rounded-md bg-slate-700 text-white' type="text" placeholder='Razorpay id..'/>
            <input onChange={handlechange} className='w-[80vh] p-2 px-5 rounded-md bg-slate-700 text-white' type="text" placeholder='Razorpay secret..'/>
            <button className='bg-blue-600 rounded-full w-[80vh] p-2 text-white font-bold'>Save</button>
          </div>

          </div>
        </>
  )
}

export default profile
