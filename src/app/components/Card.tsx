import React from 'react'
import User from '../types/user'
import Image from 'next/image'
import Link from 'next/link'

const Card = (user: User) => {
    return (
        <div className=' w-[300px] h-[340px] border-gray-300 bg-white'>
            <div className='w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-gray-300 mx-12 my-5'>
                <Image
                    src={user.image}
                    alt="A description of the image"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-2xl font-bold'> {user.firstName} {user.lastName}</h1>
                <h2 className='text-lg'> {user.email} </h2>
            </div>
            <Link href={`/pages/postuser/${user.id}`}>
                <div className='flex justify-center h-[62px] items-center bg-black text-white'>
                    Click Me
                </div>
            </Link>


        </div>
    )
}

export default Card
