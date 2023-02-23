import './App.css';
import { useState } from 'react';

export default function SpentArticleForm(props) {
  const [name, setName] = useState('');
  const [sum, setSum] = useState('');

  return (
    <div className="add-form">
      <h3> Add new article</h3>
      <form
        className="form d-flex"
        onSubmit={(event) => {
          event.preventDefault();
          props.newArticle(name, sum);
        }}
      >
        <input
          type="text"
          value={name}
          className="form-control new-post-label"
          placeholder="Name"
          onChange={(event) => {
            setName(event.currentTarget.value);
          }}
        />

        <input
          value={sum}
          className="form=control new-post-label"
          placeholder="100$"
          onChange={(event) => {
            setSum(event.currentTarget.value);
          }}
        />

        <button type="submit" className="btn btn-outline-light">
          Add
        </button>
      </form>
    </div>
  );
}
