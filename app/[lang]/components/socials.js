import React from 'react';
import { ImInstagram, ImYoutube, ImSpotify} from 'react-icons/im'
// import { CursorContext } from '../context/CursorContext';

const Socials = () => {
//   const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <div
    //   onMouseEnter={ mouseEnterHandler }
    //   onMouseLeave={ mouseLeaveHandler }
      className='hidden xl:flex ml-24 text-orange'>
      <ul className='flex gap-x-4'>
        {/* <li><a href='' target='_blank'>
            <ImFacebook />
            </a>
        </li>
        <li><a href='' target='_blank'>
            <ImTwitter />
            </a>
        </li> */}
        <li><a href='https://open.spotify.com/intl-it/artist/4Zf9eZCUzvjZBNalmpL4tk?si=cI20vDoDRvOdcW_BVtyV_A' target='_blank' rel="noreferrer">
            <ImSpotify />
            </a>
        </li>
        {/* <li><a href='' target='_blank'>
            <ImPinterest />
            </a>
        </li> */}
        <li><a href='https://www.instagram.com/iniko_beats/' target='_blank' rel="noreferrer">
            <ImInstagram />
            </a>
        </li>
        <li><a href='https://www.youtube.com/channel/UCK5tzU3CZ8kASxLz7pSfX5w' target='_blank' rel="noreferrer">
            <ImYoutube />
            </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
