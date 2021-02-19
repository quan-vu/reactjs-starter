import React from 'react';
import clsx from 'clsx';
import css from './index.module.scss';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
  const [query, setQuery] = React.useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
  };

  return (
    <div className={clsx(css.search, query.length && css.searchHasValue)}>
      <IconButton className={css.searchBtn} size="small">
        <SearchIcon fontSize="inherit" />
      </IconButton>

      <input
        type="text"
        placeholder="Search Product"
        className={css.searchInput}
        onChange={handleChange}
        value={query}
      />
    </div>
  );
};

export default Search;
