import './App.css';
import SpentArticle from './SpentArticle';

export default function SpentArticleList({ itemList, deleteItem }) {
  console.log('new', itemList);
  const elements = itemList.map((item) => {
    return <SpentArticle key={item.id} {...item} deleteItem={deleteItem} />;
  });

  return <ul className="list list-group">{elements}</ul>;
}
