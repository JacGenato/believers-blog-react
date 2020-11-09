import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SermonContext from '../../context/sermon/sermonContext';

const SermonItem = ({ sermon }) => {
  const sermonContext = useContext(SermonContext);
  const { deleteSermon, setCurrent, clearCurrent } = sermonContext;

  const { id, title, description, sermonDate, content } = sermon;

  const onDelete = () => {
    deleteSermon(id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{title}</h3>
      <ul className='list'>{description}</ul>
      <ul className='list'>
        {sermonDate && (
          <li>
            <i className='fas fa-calendar-alt'></i> {sermonDate}
          </li>
        )}
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(sermon)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

SermonItem.propTypes = {
  sermon: PropTypes.object.isRequired,
};
export default SermonItem;
