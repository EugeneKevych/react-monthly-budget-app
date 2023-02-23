import './App.css';
import { useState } from 'react';
import Filter from './Filter';
import Info from './Info';
import SearchPanel from './Search';
import SpentArticleForm from './SpentArticleForm';
import SpentArticleList from './SpentArticleList';

function App() {
  const data = [
    { name: 'Fuel', sum: '80$', increase: true, id: 1 },
    { name: 'Food', sum: '150$', increase: false, id: 2 },
    { name: 'Clothes', sum: '200$', increase: false, id: 3 },
  ];
  const [itemList, setItemList] = useState(data);

  function deleteItem(id) {
    const newList = itemList.filter((list) => {
      return list.id !== id;
    });

    return setItemList(newList);
  }

  function newArticle(text, number) {
    const newArt = { name: text, sum: number, increase: true, id: 4 };
    console.log('newobject', newArt);
    const newList = [...itemList, newArt];
    console.log('newArray', newList);
    return setItemList(newList);
  }

  function countSpentMoney(data) {}

  return (
    <div className="App">
      <Info />
      <div className="search-panel">
        <SearchPanel />
        <Filter />
      </div>
      <div className="spent-article">
        <SpentArticleList itemList={itemList} deleteItem={deleteItem} />
        <SpentArticleForm newArticle={newArticle} />
      </div>
    </div>
  );
}

export default App;
