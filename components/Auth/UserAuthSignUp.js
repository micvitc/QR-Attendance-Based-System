'use client'

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
    <div className={'flex flex-col justify-center'} {...props}>
      <button
        isLoading={isLoadingGoogle}
        type='button'
        size='sm'
        className='w-full'
        onClick={loginWithGoogle}
        disabled={isLoadingGoogle}>
        {/* {isLoadingGoogle ? null : <Icons.google className='h-4 w-4 mr-2' />} */}
        Google
      </button>
      
          
    </div>
  )
}

export default UserAuthSignUp