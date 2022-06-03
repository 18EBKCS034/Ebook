import React from 'react';
import loadimg from '../images/loader-img.gif';

export default function LoadingScreen() {
  return (
    <>
          <div class="loader-container">
                <img src={loadimg} alt="" />
            </div>

    </>
  )
}
