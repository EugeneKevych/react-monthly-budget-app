import './App.css';

// import { useState } from 'react';

export default function SpentArticle({ name, sum, increase, id, deleteItem }) {
  // const [edit, setEdit] = useState({ name });
  let classNames = 'list-group-item d-flex justify-content-between';

  if (increase) {
    classNames += ' increase';
  }

  return (
    <li className={classNames}>
      <span className="list-group-item-label">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={sum} />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-pencil btn-sm"
          onClick={(event) => {
            console.log('delete', event.target.value);
          }}
        >
          <i className="fas fa-pencil"></i>
        </button>
        <button
          type="button"
          className="btn-trash btn-sm"
          onClick={() => deleteItem(id)}
        >
          <i className="fas fa-trash"></i>
        </button>

        <i className="fas fa-star"></i>
      </div>
    </li>
  );
}
