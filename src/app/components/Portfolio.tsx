import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const Portfolio = () => {
    return (
        <div className=' w-[300px] h-[470px] border-gray-300 bg-white'>
            <div className='w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-gray-300 mx-12 my-5'>
                <Image
                    src="/images/img.png"
                    alt="A description of the image"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className='flex flex-col items-center gap-5'>
                <h1 className='text-2xl font-bold'> Shirel Zohar </h1>
                <h2 className='text-lg'> Full Stack Developer </h2>
                <p className='text-sm'> Israel Defense Forces</p>
            </div>
            <div className='flex justify-center gap-4 mt-5'>
                <Link href="https://facebook.com" passHref>
                    <button className='text-blue-600 hover:text-blue-800'>
                        <FaFacebookF size={24} />
                    </button>
                </Link>
                <Link href="https://twitter.com" passHref>
                    <button className='text-blue-400 hover:text-blue-600'>
                        <FaTwitter size={24} />
                    </button>
                </Link>
                <Link href="https://linkedin.com" passHref>
                    <button className='text-blue-700 hover:text-blue-900'>
                        <FaLinkedinIn size={24} />
                    </button>
                </Link>
                
            </div>
            <div className='flex justify-center h-[62px] items-center bg-black'>
                <p className='text-white'> Contact</p>
            </div>

        </div>
    )
}

export default Portfolio

// export const get= async()=>{
//     const response= fetch("");

// }


