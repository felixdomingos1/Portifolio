'use client';

import React from 'react';
import FriendCard from '../../components/FriendsCard';
import friends from "/data/friends";


const FriendsList = () => {
  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-4xl font-bold mb-8'>Meus Amigos Desenvolvedores</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {friends.map((friend, index) => (
          <FriendCard key={index} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
