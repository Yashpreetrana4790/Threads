import UserCard from '@/components/UserCard'
import React from 'react'

const Page = () => {

  const sampleUserData = [{
    id: 1,
    name: 'Rambler Rana',
    postdetail: 'Enthusiastic English learner.',
    likes: 15,
    Join: new Date(), // You can replace this with an actual date
    tags: ['React', 'JavaScript', 'Web Development'],
    authorImage: " https://source.unsplash.com/random"
  }, {
    id: 2,
    name: ' Rana',
    postdetail: 'Enthusiastic English learner.',
    likes: 15,
    Join: new Date(), // You can replace this with an actual date
    tags: ['React', 'JavaScript', 'Web Development'],
    authorImage: " https://source.unsplash.com/random"

  }, {
    id: 3,
    name: 'Rambler ',
    postdetail: 'Enthusiastic English learner.',
    likes: 15,
    Join: new Date(), // You can replace this with an actual date
    tags: ['React', 'JavaScript', 'Web Development'],
    authorImage: " https://source.unsplash.com/random"

  }];





  return (
    <div className=' mx-auto py-10  '>
      <h3 className='text-3xl font-bold mb-10'>Search Users</h3>
      <div className='grid sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3   gap-2 !place-content-center ' >
        {sampleUserData.map((x) => (
          <UserCard
            id={x.id}
            key={x.id}
            name={x.name}
            postdetail={x.postdetail}
            likes={x.likes}
            joindate={x.Join}
            tags={x.tags}
            authorImage={x.authorImage}
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
