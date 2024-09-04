"use client"

import { useRouter } from 'next/router';
import Layout from '../../app/layout';
import FriendProfile from '../../components/FriendProfile';
// import friends from '/data/friends';
import friends from '../../data/friends'
import ErrorCard from '../../components/ErrorCard';

const FriendPage = () => {
  const router = useRouter();
  const { id } = router.query;

  let friendSearch
  let friend

  if (!id) {
    return 
  }

  friend = friends.find(friend => friend.id === id);
  
  // if (!friend) {
  //   return (
  //     <ErrorCard message='Amigo não Encontrado Infelizmente, Verifique o id'/>
  //   )
  // } else {
  //   friend = friend
  // }

  console.log(friend);

  return (
    
    <Layout>
      {
        !friend ? (
          <ErrorCard message='Amigo não Encontrado Infelizmente, Verifique o id'/>
        ):(
          <FriendProfile friend={friend} />
        )
      }
    </Layout>
  );
};

export default FriendPage;
