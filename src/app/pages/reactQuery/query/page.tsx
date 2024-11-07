'use client'
// import LoadingSpinner from '@/app/components/LoadSpinner';
import { createUser } from '@/app/services/userActive'
import React, { useState } from 'react'
// import { useQuery } from '@tanstack/react-query'
import IUser from '@/app/types/userSchema';
// import User from '@/app/components/User';

const Page = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['users'],
  //   queryFn: getUsers
  // });

  const handleAddUser=()=>{
    
  const newUser: IUser={
    username: username,
    email: email,
    password: password,
  }
  console.log("ihbi hu h "+ newUser.username)
    createUser(newUser);
  }


  // const users: IUser[] = data;
  // if (isLoading) return <LoadingSpinner />;
  // if (error instanceof Error) return <div>Error: {error.message}</div>

  return (
    <div className='flex flex-col'>
       <div className='w-[300px] h-[300px] flex flex-col items-center gap-5 bg-gray-300'>
       <h1 className='text-2xl font-bold mb-4'>Add a new user</h1>
        <input 
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="flex-grow p-2 rounded border border-gray-300 focus:outline-none"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="flex-grow p-2 rounded border border-gray-300 focus:outline-none"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="flex-grow p-2 rounded border border-gray-300 focus:outline-none"
        />
        <button onClick={handleAddUser}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >Add User</button>
      </div>
      {/* <ul>
        {users.map(((user, index) => (
          <User key={index} user={user} />
        )))}
      </ul> */}
     

    </div>
  )
}

export default Page
