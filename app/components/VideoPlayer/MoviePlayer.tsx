import { BigPlayButton, Player,ControlBar } from 'video-react';
import "node_modules/video-react/dist/video-react.css"; 


export const MoviePlayer = ({link,banner}:{link:string,banner:string}) => {


  return (
    <div className='w-full h-full '>
      <Player
        playsInline
        poster={banner}
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


