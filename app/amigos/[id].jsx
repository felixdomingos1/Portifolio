// pages/amigos/[id].jsx
import { useRouter } from 'next/router';
import Image from 'next/image';

const AmigoProfile = () => {
  const router = useRouter();
  const { id } = router.query; 
  console.log(id);
  
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
  const friend = friends.find(friend => friend.id === id);

  if (!friend) {
    return <div>Carregando...</div>; // Adapte conforme necessário
  }

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-4xl font-bold mb-8'>{friend.name}</h1>
      <div className='flex items-center justify-center mb-4'>
        <Image
          src={friend.image}
          alt={friend.name}
          width={150}
          height={150}
          className='rounded-full'
        />
      </div>
      <div className='px-8 py-6'>
        <p className='text-lg text-muted-foreground mb-4'>{friend.description}</p>
        <p className='text-sm mb-4'>Especialidade: {friend.expertise}</p>
        <p className='text-sm mb-4'>GitHub: <a href={friend.github} target="_blank" rel="noopener noreferrer">{friend.github}</a></p>
        <p className='text-sm mb-4'>LinkedIn: <a href={friend.linkedin} target="_blank" rel="noopener noreferrer">{friend.linkedin}</a></p>
        {friend.link && (
          <p className='text-sm mb-4'>Link: <a href={friend.link} target="_blank" rel="noopener noreferrer">{friend.link}</a></p>
        )}
      </div>
    </div>
  );
};

export default AmigoProfile;
