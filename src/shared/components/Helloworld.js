import React, { forwardRef } from 'react';

const Helloworld = React.forwardRef((props, ref) => {
  const { selectedValue } = props;
  return (
    <div  ref={ref}>
      Hello, World!
      {selectedValue}      
    </div>    
  );
});

export default Helloworld;