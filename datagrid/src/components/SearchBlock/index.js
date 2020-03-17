import React from 'react'
import Select from 'react-select'
import '../../App.css';
import './SearchBlock.css';

const SELECT_OPTIONS = [
  { value: 'Action', label: 'Action' },
  { value: 'Horror', label: 'Horror' },
  { value: 'Comedy', label: 'Comedy' },
  { value: 'Drama', label: 'Drama' },
];

function SearchBlock({ getSerchValueAction, getEnumValueAction, getCheckboxValueAction }) {

  return (
    <div className="search-block">
      <div className="search-block-sections" onChange={(event) => { getCheckboxValueAction(event.target.checked) }}>
        <label htmlFor="active">Is active?</label>
        <input type="checkbox" name="active" id="active" className="checkbox"></input>
      </div>

      <div className="search-block-sections block-movie-genre">
        <Select
          placeholder="Choose movie genre"
          isMulti
          className="movie-genre"
          options={SELECT_OPTIONS}
          closeMenuOnSelect={true}
          onChange={(event) => { getEnumValueAction(event) }}
        />
      </div>

      <div className="search-block-sections">
        <input
          type='text'
          placeholder="Search"
          className="input-search"
          onChange={(event) => getSerchValueAction(event.target.value)}
        />
        <div className="name-email-filter-flag name-flag"><p>name</p></div>
        <div className="name-email-filter-flag"><p>email</p></div>
      </div>

    </div>
  )
}

export default SearchBlock
