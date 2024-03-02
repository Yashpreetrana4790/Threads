import React from 'react';

interface Comment {
  id: string;
  content: string;
}

interface Post {
  id: string;
  currentUserId: string;
  content: string;
  author: string;
  community: string;
  createdAt: string;
  likes: number;
  shares: number;
  comments?: Comment[];
}

const PostCard: React.FC<Post> = ({
  id,
  currentUserId,
  content,
  author,
  community,
  createdAt,
  likes,
  shares,
  comments,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-md m-4">
      <img className="w-full h-48 object-cover object-center" src="https://source.unsplash.com/random" alt="Post" />
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <img className="w-10 h-10 rounded-full mr-2" src="https://source.unsplash.com/random" alt={`Profile of user}`} />
          <div className="font-bold text-xl">{author}</div>
        </div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {community}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          ❤ {likes}
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          Shares: {shares}
        </span>
      </div>
      <div className="px-6 py-4">
        {comments && comments.map((comment) => (
          <div key={comment.id} className="mb-2">
            <p className="text-gray-700 text-sm">{comment.content}</p>
          </div>
        ))}
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-sm">
          {new Date(createdAt).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
