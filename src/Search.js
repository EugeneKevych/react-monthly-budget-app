import './App.css';
import { useState } from 'react';

export default function SearchPanel(props) {
  const [enteredChar, setEnteredChar] = useState('');

  const onUpdateSearch = (event) => {
    const character = event.target.value;
    setEnteredChar(character);
    props.updateSearch(character);
  };
  return (
    <>
      <p>{console.log('props', props)}</p>
      <input
        type="text"
        placeholder="Find article"
        className="form-control search-input"
        value={enteredChar}
        onChange={onUpdateSearch}
      />
    </>
  );
}
