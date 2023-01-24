import { createPortal } from 'react-dom';
import background from '../images/backgrounds-gamerwall.jpg';


const backgroundRoot = document.querySelector('#background-root');

export const Background = () => {

    return createPortal(
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          zIndex: -1,
        }}
      />,
      backgroundRoot
    );
};
