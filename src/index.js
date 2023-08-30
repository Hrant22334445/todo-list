import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import TodoList from './components/TodoList/TodoList';
import Add from './components/Add/Add';
import './index.css';

const App = () => {

  return (
  <div className='app'>
    <Header />
    <Search />
    <TodoList />
    <Add />
  </div>
);
 
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />);