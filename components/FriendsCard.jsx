import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader } from './ui/card';
import { Github, Link2Icon, Linkedin } from 'lucide-react';
import { Badge } from './ui/badge';

const FriendCard = ({ friend }) => {
  return (
    <Card className='group overflow-hidden relative'>
      <Link  href={`/amigos/${friend.id}`}>
      <CardHeader className='p-0'>
        {/* image */}
        <div className='relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden'>
          <Image
            className='absolute bottom-0 shadow-2xl rounded-full'
            src={friend.image}
            width={150}
            height={150}
            alt={friend.name}
            priority
          />
          {/* btn links */}
          <div className='flex gap-x-4'>
            {friend.linkedin && (
                <Link
                  href={friend.linkedin}
                  className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 hover:bg-[#0077b5]'
                >
                  <Linkedin className='text-white group-hover:text-[#f0f6fc]'/>
                </Link>

            )
            
            }
            {
              friend.github && (

            <Link
            href={friend.github}
            className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 hover:bg-[#24292e]'
          >
          <Github className='text-white group-hover:text-[#f0f6fc]' />
          </Link>
              )
            }
            {friend.link && (
              <Link
                href={friend.link}
                className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300'
              >
                <Link2Icon className='text-white' />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <div className='h-full px-8 py-6'>
        <Badge className='uppercase text-sm font-medium mb-2 absolute top-4 left-5'>
          {friend.expertise}
        </Badge>
        <h4 className='h4 mb-1'>{friend.name}</h4>
        <p className='text-muted-foreground text-lg'>{friend.description}</p>
      </div>
      </Link>
    </Card>
  );
};

export default FriendCard;
