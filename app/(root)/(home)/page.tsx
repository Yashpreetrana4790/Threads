import React from 'react';
import { postsData } from './data/fakeUserdata';
import PostCard from '@/components/PostCard';

const Home = () => {
  return (
    <>
      <div className='grid place-items-center grid-cols-1 2xl:grid-cols-2'>

        {postsData.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            currentUserId={post.user.id}
            content={post.content}
            author={post.user.username}
            hashtags={post.hashtags}
            createdAt={post.createdAt.toISOString()}
            comments={post.comments}
            likes={post.likes}
            shares={post.shares}
            heading={post.heading}
          />
        ))}


      </div>
    </>
  );
};

export default Home;
