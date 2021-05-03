import React, { useState } from 'react';

function Search() {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search for Users...'
          value={text || ''}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
}
//this is for github
export default Search;
