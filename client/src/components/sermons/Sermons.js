import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import SermonContext from '../../context/sermon/sermonContext';
import SermonItem from './SermonItem';

const Sermons = () => {
  const sermonContext = useContext(SermonContext);

  const { sermons, filtered } = sermonContext;

  if (sermons.length === 0) {
    return <h4>Please add a sermon</h4>;
  }
  return (
    <Fragment>
      <TransitionGroup>
        {filtered !== null
          ? filtered.map((sermon) => (
              <CSSTransition key={sermon.id} timeout={500} classNames='item'>
                <SermonItem sermon={sermon} />
              </CSSTransition>
            ))
          : sermons.map((sermon) => (
              <CSSTransition key={sermon.id} timeout={500} classNames='item'>
                <SermonItem sermon={sermon} />
              </CSSTransition>
            ))}
      </TransitionGroup>
    </Fragment>
  );
};

export default Sermons;
