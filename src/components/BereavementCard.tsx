import React from 'react';
import suiiiImage from '../assets/pic/suiii.png';
import titiAudio from '../assets/voice/titit.mp3';

const AnxietyCard = () => {
  const handleClick = () => {
    alert("Ben got your back!");
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4 m-4 cursor-pointer">
        <div className="font-handwriting text-3xl text-center mb-4">Anxiety?</div>
        <div className="text-center font-bold mb-2">BEN got your back!</div>
        <img className="w-full" src={suiiiImage} alt="Child smiling" />
        <div className="px-6 py-4">
          <div className="text-center text-gray-700 text-base">
            Click to hear more from Ben!
          </div>
          <audio controls className="w-full mt-4" style={{ fontSize: 'small' }}>
            <source src={titiAudio} type="audio/mp3" />
            Browser Anda tidak mendukung tag audio.
          </audio>
        </div>
      </div>
    </div>
  );
};

export default AnxietyCard;