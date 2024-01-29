import React from 'react';
import { Helmet } from 'react-helmet-async';

const Head = () => {
  return (
    <Helmet>
      <title>XM member of traiding point group</title>
      <meta
        name='description'
        content='Discover the power of trading with XM, a proud member of the Trading Point Group. Unlock endless possibilities by registering your account and accessing our cutting-edge trading platform.'
      />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@300;400;500;700&display=swap'
        rel='stylesheet'
      />
    </Helmet>
  );
};

export default Head;
