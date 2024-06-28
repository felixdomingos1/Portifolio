'use client';

import React from 'react';
import FriendCard from '@/components/FriendsCard';

const friends = [
  { 
    id:'jose-goncalves',
    name: 'José Gonçalves', 
    expertise: 'Software Engineer', 
    github: 'https://github.com/mariovarela', 
    linkedin:'https://www.linkedin.com/in/jgoncalves8080/',
    image: '/friends/JoseGonçalves.jpeg', 
    description: 'JavaScript (BackEnd: NodeJs, Web: ReactJs, Mobile: React Native).',
    link: 'https://joaosilva.dev'
  },
  { 
    id:'paulino-passil',
    name: 'Maria Oliveira', 
    expertise: 'Backend Developer', 
    image: '/friends/mario.png', 
    github: 'https://github.com/mariaoliveira', 
    description: 'Focada em Node.js e Python',
    link: 'https://mariaoliveira.dev'
  },
  { 
    id:'genilson-araujo',
    name: 'Genilson Araujo', 
    expertise: 'Full Stack Developer', 
    github: 'https://github.com/carlossouza', 
    image: '/images/carlos.jpg', 
    description: 'Trabalha com MERN stack',
    link: null
  },
];

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
