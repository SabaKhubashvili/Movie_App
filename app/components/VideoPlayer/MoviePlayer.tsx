import React from 'react';
import ReactPlayer from 'react-player';


export const MoviePlayer = () => {


  return (
    <div className='w-full h-full'>
      <ReactPlayer  
        controls
        url={'https://f.vimeocdn.com/_videos/home/desktop-masthead-720p-2.mp4'}
        width={'100%'}
        height={'100%'}
      />
    </div>
  );
};


