import './App.css';

export default function Filter() {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        All articles
      </button>
      <button className="btn btn-outline-light" type="button">
        Price ascending
      </button>
      <button className="btn btn-outline-light" type="button">
        Price descending
      </button>
    </div>
  );
}
