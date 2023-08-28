import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Search from './components/Search';
import TodoList from './components/TodoList';
import Add from './components/Add';

const App = () => {

  return (
  <div>
    <Header />
    <Search />
    <TodoList />
    <Add/>
  </div>
);
 
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />);