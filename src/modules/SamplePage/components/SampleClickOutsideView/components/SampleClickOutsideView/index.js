import React, { useRef, useEffect } from 'react';
import css from './index.module.scss';
import InputBase from '@material-ui/core/InputBase';

function SampleClickOutsideView() {

  const [, setSearchValue] = React.useState('');


  const useOutsideAlerter = (ref) => {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              const value = ref.current.value;
              console.log("You clicked outside of me!");
              console.log("Search input value:",value);
              // alert("Search input value: " + value)
            }
        }
  
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className={css.wrap}>
      <h2>Hello, I'm SampleClickOutsideView</h2>
      <InputBase
        className={css.input}
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        inputRef={wrapperRef}
      />
    </div>
  );
}
  
export default SampleClickOutsideView;
