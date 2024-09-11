'use Client'
import { Github, Target } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function ShinIn() {
 
  return (
    <>
     <div className="grid gap-y-4 sm:grid-cols-1 lg:grid-cols-2 px-1">
            <Link href="http://localhost:3001/api/auth/google/login" className="w-full flex items-center justify-center py-2.5 border rounded-lg hover:bg-transparent duration-150 active:bg-transparent hover:border-[#38bdf8]">
              <Target className="text-2xl" />
            </Link>

            <button className="w-full flex items-center justify-center py-2.5 border rounded-lg hover:bg-transparent duration-150 active:bg-transparent hover:border-[#38bdf8]">
              <Github className="text-2xl" />
            </button>
          </div> 
    </>
  )
}

export default ShinIn
