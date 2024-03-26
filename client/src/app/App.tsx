import React from 'react';
import TaskCart from '../entities/TaskCart/TaskCart';

function App() {
  return (
    <>
    <TaskCart priority='low' />
    <TaskCart priority='top' />
    <TaskCart priority='middle' />
    <TaskCart priority='low' />
    <TaskCart priority='asdas' />
    </>
  );
}

export default App;
