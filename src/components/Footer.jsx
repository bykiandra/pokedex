import React from 'react';

const Footer = () => {
  return (
    <div className="container max-w-screen-sm mx-auto p-4 bg-white rounded-xl text-xs text-center my-4">
      Best viewed in Firefox.<br />
      View the code on&nbsp;
      <a href="https://github.com/crownedfoxes/pokedex" target="_blank"
        className="text-red-500 hover:text-red-600" rel="noreferrer" >
        GitHub
      </a>.
    </div>
  );
}

export default Footer;