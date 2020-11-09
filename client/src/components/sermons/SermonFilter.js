import React, { useContext, useRef, useEffect } from 'react';
import SermonContext from '../../context/sermon/sermonContext';

const SermonFilter = () => {
  const sermonContext = useContext(SermonContext);
  const text = useRef('');

  const { filterSermons, clearFilter, filtered } = sermonContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterSermons(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='Filter Sermons...'
        onChange={onChange}
      />
    </form>
  );
};

export default SermonFilter;
