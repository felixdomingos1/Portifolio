import Image from 'next/image';

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} fill priority alt='' style={{borderRadius:'10px'}}/>
    </div>
  );
};

export default DevImg;
