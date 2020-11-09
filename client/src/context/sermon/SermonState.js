import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import SermonContext from './sermonContext';
import sermonReducer from './sermonReducer';
import {
  ADD_SERMON,
  DELETE_SERMON,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_SERMON,
  FILTER_SERMONS,
  CLEAR_FILTER,
} from '../types';

const SermonState = (props) => {
  const initialState = {
    sermons: [
      {
        id: 1,
        title: 'Sukdulang biyaya',
        description: 'Test',
        content: 'Loren ipsurm test',
        sermonDate: '2020-10-10',
        datePublished: '2020-11-08',
      },
      {
        id: 2,
        title: 'Mabuting Diyos',
        description: 'Test',
        content: 'Loren ipsurm test',
        sermonDate: '2020-10-10',
        datePublished: '2020-11-07',
      },
      {
        id: 3,
        title: 'Doxologia',
        description: 'Test',
        content: 'Loren ipsurm test',
        sermonDate: '2020-10-10',
        datePublished: '2020-11-09',
      },
    ],
    current: null,
    filtered: null,
  };
  const [state, dispatch] = useReducer(sermonReducer, initialState);

  // Add Sermon
  const addSermon = (sermon) => {
    sermon.id = uuid();
    dispatch({ type: ADD_SERMON, payload: sermon });
  };

  // Delete Sermon
  const deleteSermon = (id) => {
    dispatch({ type: DELETE_SERMON, payload: id });
  };

  // Set Current Sermon
  const setCurrent = (sermon) => {
    dispatch({ type: SET_CURRENT, payload: sermon });
  };

  // Clear Current Sermon
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Sermon
  const updateSermon = (sermon) => {
    dispatch({ type: UPDATE_SERMON, payload: sermon });
  };

  // Filter Sermons
  const filterSermons = (text) => {
    dispatch({ type: FILTER_SERMONS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <SermonContext.Provider
      value={{
        sermons: state.sermons,
        current: state.current,
        filtered: state.filtered,
        addSermon,
        deleteSermon,
        setCurrent,
        clearCurrent,
        updateSermon,
        filterSermons,
        clearFilter,
      }}
    >
      {props.children}
    </SermonContext.Provider>
  );
};

export default SermonState;
