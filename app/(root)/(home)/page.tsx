import React from 'react';
import { postsData } from './data/fakeUserdata';
import PostCard from '@/components/PostCard';

const YourComponent = () => {
  return (
    <div>
      {postsData.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          currentUserId={post.user.id}
          content={post.content}
          author={post.user.username}
          community={post.heading}
          createdAt={post.createdAt.toISOString()} // Convert to string or format as needed
          comments={post.comments}
        />
      ))}
    </div>
  );
};

export default YourComponent;
