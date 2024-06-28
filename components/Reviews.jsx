'use client';

import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import friends from '../data/friends';

const reviewsData = [
  {
    avatar: '/reviews/avatar-3.png',
    name: 'José Gonçalves',
    job: 'CTO DLine-Code, Software Engineer | Programming Instructor - JavaScript ',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  },
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Lázaro Manuel',
    job: 'Software Developer | Open source enthusiast | Community Leader',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  },
  {
    avatar: '/reviews/avatar-1.png',
    name: 'Felisberto Alberto',
    job: 'Software Developer',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  },
  { 
    avatar: '/reviews/avatar-2.png',
    name: 'Paulino Passil',
    job: 'Software Developer',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  },
  {
    avatar: '/reviews/avatar-4.png',
    name: 'Mário Varela',
    job: 'Software Developer - Focusing on Frontend Development - ReactJS ',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  },
  {
    avatar: '/reviews/avatar-5.png',
    name: 'João Eduardo Panzo',
    job: 'Programador',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Osvaldo de Sousa',
    job: 'Senior Frontend',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Mario Varela',
    job: 'Senior Frontend',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Pedro Muteka',
    job: 'Senior Frontend',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Maurício Costa',
    job: 'Software developer',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  },
  {
    avatar: '/reviews/avatar-6.png',
    name: 'Matuta Jorge',
    job: 'FullStack Developer | JavaScript | TypeScript | Reactjs | Nodejs',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
  },
];

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>Recomendações</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className='h-[350px]'
        >
          {friends.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <Image
                        src={person.image}
                        width={70}
                        height={70}
                        alt={person.name}
                        priority
                        className="rounded-full border-4 border-white shadow-lg z-10" 
                      />
                      {/* name */}
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.headline}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
