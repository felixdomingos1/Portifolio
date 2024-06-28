"use client"

import { useRouter } from 'next/router';
import Layout from '../../app/layout';
import FriendProfile from '../../components/FriendProfile';
import friends from '/data/friends';

const FriendPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const friend = friends.find(friend => friend.id === id);

  if (!friend) {
    return <p>Amigo não encontrado.</p>;
  }

  return (
    <Layout>
      <FriendProfile friend={friend} />
    </Layout>
  );
};

export default FriendPage;
