import React from 'react'
import PostApi from '../types/postapi';

interface CardProps {
    post: PostApi;
  }

const Todo: React.FC<CardProps> = ({post }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white">ID: {post.id}</h2>
      <p className="text-white">Title: {post.title}</p>
    </div>
  )
}

export default Todo
