'use client'

import { BellIcon } from '@chakra-ui/icons'
import { signIn } from 'next-auth/react'
import {useState} from 'react'
// import axios  from 'axios'


const UserAuthSignUp= ({ className, ...props }) => {
  const [isLoadingGoogle, setIsLoadingGoogle] =useState(false)
  const [isLoadingCredentials, setIsLoadingCredentials] = useState  (false)

  const loginWithGoogle = async () => {
    setIsLoadingGoogle(true)

    try {
      await signIn('google')
    } catch (error) {
        console.log(error)  
    } 
  }

  return (
    <div  class=" flex gap-4 items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
    {...props}>
      <BellIcon/>
      <button
        // isLoading={isLoadingGoogle}
        type='button'
        onClick={loginWithGoogle}
        disabled={isLoadingGoogle}>
       <p>
        Google
        </p> 
      </button>

          
    </div>
  )
}

export default UserAuthSignUp