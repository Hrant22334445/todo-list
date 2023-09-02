import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Search from './components/Search';
import TodoList from './components/TodoList';
import Add from './components/Add';
import './index.css';

const App = () => {
  const items = [
    { text: "Learn JS", important: true, id: 1 },
    { text: "Drink Coffee", important: false, id: 2 },
    { text: "Learn React", important: false, id: 3 },
    { text: "Learn TypeScript", important: true, id: 4 },
    { text: "Learn Node.js", important: false, id: 5 },
  ];

  return (
  <div className='app'>
    <Header done={8} important={12} />
    <Search />
    <TodoList items={items} />
    <Add />
  </div>
);
 
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />);