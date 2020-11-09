import React, { useState, useContext, useEffect } from 'react';
import SermonContext from '../../context/sermon/sermonContext';

const SermonForm = () => {
  const sermonContext = useContext(SermonContext);

  const { addSermon, updateSermon, current, clearCurrent } = sermonContext;

  useEffect(() => {
    if (current !== null) {
      setSermon(current);
    } else {
      setSermon({
        title: '',
        description: '',
        content: '',
        sermonDate: '',
      });
    }
  }, [sermonContext, current]);

  const [sermon, setSermon] = useState({
    title: '',
    description: '',
    content: '',
    sermonDate: '',
  });

  const { title, description, content, sermonDate } = sermon;

  const onChange = (e) =>
    setSermon({ ...sermon, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addSermon(sermon);
    } else {
      updateSermon(sermon);
    }
    clearAll();
  };

  const clearAll = (e) => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{current ? 'Edit Sermon' : 'Add Sermon'}</h2>
      <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Description'
        name='description'
        value={description}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Content'
        name='content'
        value={content}
        onChange={onChange}
      />
      <input
        type='date'
        placeholder='Sermon Date'
        name='sermonDate'
        value={sermonDate}
        onChange={onChange}
      />
      <input
        type='submit'
        value={current ? 'Update Sermon' : 'Add Sermon'}
        className='btn btn-primary btn-block'
      />
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};
export default SermonForm;
