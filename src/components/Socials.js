import React from 'react';

// import icons
import { ImFacebook, ImTwitter, ImPinterest, ImInstagram, ImYoutube, ImSpotify} from 'react-icons/im'

const Socials = () => {
  return <div className='hidden xl:flex ml-24 text-orange'>
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
  </div>;
};

export default Socials;
