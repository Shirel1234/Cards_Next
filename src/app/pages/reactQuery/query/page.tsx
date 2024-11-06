'use client'
import LoadingSpinner from '@/app/components/LoadSpinner';
import { queryapi } from '@/app/services/userActive'
import PostApi from '@/app/types/postapi';
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Todo from '@/app/components/Todo';

const Page = () => {
    
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: queryapi
  });
  
  const posts: PostApi[] =data;
if(isLoading) return <LoadingSpinner/>;
if(error instanceof Error) return <div>Error: {error.message}</div>

  return (
    <div>
      <ul>
        {posts.map((post => (
          <Todo  key={post.id} post={post}/>
        )))}
      </ul>

    </div>
  )
}

export default Page
