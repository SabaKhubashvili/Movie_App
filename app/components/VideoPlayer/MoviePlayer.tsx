import { BigPlayButton, Player,ControlBar } from 'video-react';
import "node_modules/video-react/dist/video-react.css"; 


export const MoviePlayer = ({link}:{link:string}) => {


  return (
    <div className='w-full h-full '>
      <Player
        playsInline
        poster="/Image/movies/topgun.webp"
        src={link}
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


