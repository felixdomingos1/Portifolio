'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: '/',
    name: <RiYoutubeFill />,
  },
  {
    path: 'https://www.linkedin.com/in/f%C3%A9lixdomingos/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https:github.com/felixdomingos1',
    name: <RiGithubFill />,
  },
  {
    path: 'https://web.facebook.com/felizdomimgos.gamboa',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://www.instagram.com/felixsdomingos93/',
    name: <RiInstagramFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
