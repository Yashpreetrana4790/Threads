import { Forward, Heart, Save } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface Comment {
  id: string;
  content: string;
}

interface hashtag {
  tag: string
}

interface Post {
  id: string;
  currentUserId: string;
  heading: string
  content: string;
  author: string;
  hashtags?: string[];
  createdAt: string;
  likes: number;
  shares: number;
  comments?: Comment[];

}

const PostCard: React.FC<Post> = ({
  id,
  content,
  author,
  hashtags,
  createdAt,
  comments,
  shares,
  heading,
  likes
}) => {
  return (
    <div className="max-w-sm mx-auto bg-slate-50 rounded-lg overflow-hidden drop-shadow-xl m-4">
      <div className="px-6 py-4">
        <div className="flex items-center mb-2">
          <Image className="w-10 h-10 rounded-full mr-2" src="https://source.unsplash.com/random" alt={`Profile of user}`} width={30} height={30} />
          <div className="font-bold text-lg capitalize">{author}</div>
        </div>
        <h2 className='text-lg font-bold '>{heading}</h2>
        <p className="text-gray-700 text-base line-clamp-2">{content}</p>
      </div>
      <div className="px-6 py-4">
        <span className="rounded-full   py-2 text-sm font-semibold  ">
          {hashtags?.map((hashtag) => (
            <span key={hashtag} className="mr-2 text-slate-500 px-5 bg-slate-200 py-2 rounded-full hover:bg-gray-200">
              {hashtag}
            </span>
          ))}
        </span>

      </div>
      <div className='flex justify-between items-center  px-6 py-4 '>

        <div className=' flex gap-2 space-x-3 items-center'>

          <div className='flex  items-center   gap-1'>
            <Heart width={25} height={25} className='hover:fill-rose-600 hover:stroke-none' />
            {likes}
          </div>
          <div className='flex  items-center   gap-1'>
            <Forward width={25} height={25} className='hover:fill-rose-600 hover:stroke-none' />
            {shares}
          </div>
        </div>
        <div>
          <Image width={20} height={20} src="/assets/saves.svg" alt='save' className='hover:stroke-red-900 ' />
        </div>
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
