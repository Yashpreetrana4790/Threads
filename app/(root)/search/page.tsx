import { faker } from '@faker-js/faker';
import Image from 'next/image';
import React from 'react';

interface User {
  id: string;
  username: string;
  userImage: string;
  description: string;
  reputation: number;
  followers: number;
  totalPosts: number;
}

const generateRandomUser = (): User => {
  return {
    id: faker.datatype.uuid(),
    username: faker.internet.userName(),
    userImage: faker.image.avatar(),
    description: faker.lorem.sentence(),
    reputation: faker.datatype.number(100), // Random reputation (adjust range as needed)
    followers: faker.datatype.number(1000), // Random followers count (adjust range as needed)
    totalPosts: faker.datatype.number(500), // Random total posts count (adjust range as needed)
  };
};

const UserCard: React.FC = () => {
  const randomUser = generateRandomUser();

  return (
    <div className="bg-white p-10 rounded-md shadow-md">
      <Image
        src={randomUser.userImage}
        alt={randomUser.username}
        className="w-full h-62 object-cover object-center mb-4 rounded-md"
        width={1800}
        height={1800}
      />
      <h2 className="text-xl font-bold mb-2">{randomUser.username}</h2>
      <p className="text-gray-700 mb-4">{randomUser.description}</p>
      <div className="flex justify-between">
        <p>Reputation: {randomUser.reputation}</p>
        <p>Followers: {randomUser.followers}</p>
        <p>Total Posts: {randomUser.totalPosts}</p>
      </div>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4">Follow</button>
    </div>
  );
};

const UserGrid: React.FC = () => {
  const userCount = 9; // Adjust the number of users as needed
  const users = Array.from({ length: userCount }, () => <UserCard key={faker.datatype.uuid()} />);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      {users}
    </div>
  );
};

export default UserGrid;
