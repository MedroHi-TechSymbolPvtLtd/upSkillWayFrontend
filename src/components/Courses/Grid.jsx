import React from 'react';
import anime from '../../assets/Images/anime.mp4';
import GRID from '../../assets/Images/GRID.png';

const UIWithGridBackground = () => {
  return (
    <>
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      
      <div className="relative flex h-[700px] w-[800px]  flex-col items-center justify-center overflow-hidden rounded-lg bg-white">
        {/* Grid image background behind the card */}
        <img
          src={GRID}
          alt="grid background"
      className="pointer-events-none select-none absolute opacity-80"
  style={{
    right: '',
    top: '-90px',
    width: '2248px', // Reasonable size
    height: '1457px',
    transform: '', // Shift it further
    zIndex: 0,
  }}
        />

        {/* Foreground Card UI */}
        <div className="relative flex justify-center items-center z-10">
          {/* Animated gradient background with blur */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #ff0080, #ff8c00)',
              backgroundSize: '300% 300%',
              animation: 'gradientShift 3s ease infinite',
              borderRadius: '45px',
              padding: '6px',
              filter: 'blur(8px)',
              opacity: 0.8
            }}
          />
          
          <div 
            style={{
              width: '370px',
              height: '443px',
              color: 'rgba(255, 255, 255, 1)',
              transform: 'rotate(0deg)',
              opacity: 1,
              position: 'relative',
              borderRadius: '39px',
              background: '#FFFFFF',
              boxShadow: '0px 4px 4px 0px #23286914',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10
              
            }}
          >
            {/* Placeholder for video - replace src with your actual video URL */}
            <video 
              src={anime}
              alt="Animation placeholder"
              style={{
                width: '280px',
                height: '329px',
                transform: 'rotate(0deg)',
                opacity: 1,
                borderRadius: '35px',
                objectFit: 'cover'
              }}
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UIWithGridBackground;