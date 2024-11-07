import React from 'react'
import IUser from '../types/userSchema';

interface UserProps {
    user: IUser;
  }

const User: React.FC<UserProps> = ({user }) => {
  return (
    <div>
      <p className="text-white">Username: {user.username}</p>
      <p className="text-white">Email: {user.email}</p>
      <p className="text-white">Password: {user.password}</p>
    </div>
  )
}

export default User
