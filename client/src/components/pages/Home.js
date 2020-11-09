import React from 'react';
import Sermons from '../sermons/Sermons';
import SermonForm from '../sermons/SermonForm';
import SermonFilter from '../sermons/SermonFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <SermonForm />
      </div>
      <div>
        <SermonFilter />
        <Sermons />
      </div>
    </div>
  );
};

export default Home;
