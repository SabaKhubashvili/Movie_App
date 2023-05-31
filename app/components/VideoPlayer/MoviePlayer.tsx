import { BigPlayButton, Player,ControlBar } from 'video-react';
import "node_modules/video-react/dist/video-react.css"; 


export const MoviePlayer = () => {


  return (
    <div className='w-full h-full '>
    <Player
      playsInline
      poster="/Image/movies/topgun.webp"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      width={1000}
      height={1000}

    >
      <BigPlayButton position="center" className='' />
      <ControlBar autoHide={true} className="bg-red-200">
        
      </ControlBar>
    </Player>
    </div>
  );
};


