import React from 'react';
import { useNavigate } from 'react-router-dom';
import suiiiImage from '../assets/pic/suiii.png';

const MainMenu = () => {
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-blue-50 overflow-hidden">
      <div className="p-2 md:p-4 rounded-lg shadow-sm max-w-4xl mx-auto my-auto bg-white">
        <h1 className="text-3xl font-bold text-center text-gray-700">Are You Okay?</h1>
        <h2 className="text-xl text-center mb-2 md:mb-4 text-gray-500">Hear From The Kids!</h2>
        <div className="grid grid-cols-2 gap-2 md:gap-4">
          <Card 
            onClick={() => handleNavigate('/bullying')}
            imagePath={suiiiImage}
            altText="Child looking sad"
            description="Are you experiencing BULLYING?"
          />
          <Card 
            onClick={() => handleNavigate('/anxiety')}
            imagePath={suiiiImage}
            altText="Child smiling"
            description="Are you ANXIOUS? Ben has something to say about that!"
          />
          <Card 
            onClick={() => handleNavigate('/sickness')}
            imagePath={suiiiImage}
            altText="Child looking unwell"
            description="Are you SICK? This is AUTISM speaking to you!"
          />
          <Card 
            onClick={() => handleNavigate('/bereavement')}
            imagePath={suiiiImage}
            altText="Child looking thoughtful"
            description="Are you suffering from BEREAVEMENT? Hear what Daisy has to say about it!"
          />
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  onClick: () => void;
  imagePath: string;
  altText: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ onClick, imagePath, altText, description }) => (
    <div className="cursor-pointer hover:bg-blue-100 transition duration-300 p-2 md:p-4 flex flex-col items-center justify-start" onClick={onClick}>
      <img src={imagePath} alt={altText} className="w-full mx-auto my-2"/>
      <p className="text-center mt-2 text-gray-600">{description}</p>
    </div>
  );

export default MainMenu;