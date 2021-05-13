import * as React from 'react';

// import components
import Header from '../components/Header/Header';
import Link from '../components/Link/Link';
import Navigation from '../components/Nav/Navigation';

const Home = () => {
  return (
    <main>
      <Header>
        <Link path={'#'} text={'Communist queen Aimée Theriot Ramos'} />
        <Navigation />
      </Header>
    </main>
  );
};

export default Home;
