import React, { forwardRef } from 'react';

const Shimmer = forwardRef((props, ref) => {
  return <div className='shimmer' ref={ref}></div>;
});

export default Shimmer;
