import React from 'react';
import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';

const FriendProfile = ({ friend }) => {
  return (
    <div className="friend-profile">
      <div className="profile-cover relative h-48 bg-gray-200">
        <Image 
          src={friend.coverImage} 
          layout="fill" 
          objectFit="cover" 
          alt={`${friend.name}'s cover`} 
          priority
        />
      </div>
      <div className="profile-info flex flex-col items-center -mt-20 relative z-10">
        {/* Imagem de perfil */}
        <div className="profile-image">
          <Image 
            src={friend.image} 
            width={150} 
            height={150} 
            alt={friend.name} 
            className="rounded-full border-4 border-white shadow-lg z-10" 
          />
        </div>
        {/* Informações do perfil */}
        <div className="profile-details text-center mt-4">
          <h1 className="text-3xl font-semibold">{friend.name}</h1>
          <p className="text-lg text-gray-500">{friend.headline}</p>
          <p className="text-base text-gray-500 mt-2">{friend.location}</p>
        </div>
        {/* Links para redes sociais */}
        <div className="social-links mt-4 flex">
          {friend.github && (
            <a href={friend.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mr-4">
              <Github />
            </a>
          )}
          {friend.linkedin && (
            <a href={friend.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              <Linkedin />
            </a>
          )}
        </div>
      </div>
      {/* Seções adicionais do perfil */}
      <div className="profile-sections container mx-auto mt-8 p-4">
        <section className="experience mb-8">
          <h2 className="text-2xl font-bold">Experiência</h2>
          <ul>
            {friend.experience.map((exp, index) => (
              <li key={index} className="mt-4">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-500">{exp.company}</p>
                <p className="text-gray-500">{exp.dates}</p>
                <p className="text-gray-700">{exp.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="education mb-8">
        {friend.education &&  (
          <>
            <h2 className="text-2xl font-bold">Educação</h2>
              {
                friend.education.map((edu,index)=> {
                  <ul>
                  <li key={index} className="mt-4">
                    <h3 className="text-xl font-semibold">{edu.institution}</h3>
                    <p className="text-gray-500">{edu.degree}</p>
                    <p className="text-gray-800">{edu.dates}</p>
                  </li> 
                </ul>
                })
              }
          </>
          )
        }
        </section>
        <section className="skills mb-8">
          <h2 className="text-2xl font-bold">Habilidades</h2>
          <ul className="flex flex-wrap">
            {friend.skills.map((skill, index) => (
              <li key={index} className="bg-gray-200 text-gray-700 px-4 py-2 m-2 rounded-full">
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <section className="recommendations mb-8">
          <h2 className="text-2xl font-bold">Recomendações</h2>
          <ul>
            {friend.recommendations.map((rec, index) => (
              <li key={index} className="mt-4">
                <p className="text-gray-500 italic">"{rec.text}"</p>
                <p className="text-gray-600 mt-2">- {rec.author}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default FriendProfile;
