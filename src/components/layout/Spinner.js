import React, { Fragment } from 'react';
import spinner from './spinner.png';

export const Spinner = () => {
  return (
    <Fragment>
      <section className='spinner'>
        <section>
          <img src={spinner} alt='Loading...' />
        </section>
      </section>
    </Fragment>
  );
};

export default Spinner;
