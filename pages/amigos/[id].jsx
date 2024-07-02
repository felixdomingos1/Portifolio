"use client"

import { useRouter } from 'next/router';
import Layout from '../../app/layout';
import FriendProfile from '../../components/FriendProfile';
import friends from '/data/friends';
import ErrorCard from '../../components/ErrorCard';

const FriendPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const friend = friends.find(friend => friend.id === id);

  return (
    <Layout>
      {
        friend ? (

          <FriendProfile friend={friend} />
        ): (
          <ErrorCard message='Amigo Não encontrado'/>
        )
      }
    </Layout>
  );
};

export default FriendPage;
