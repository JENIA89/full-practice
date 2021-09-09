import { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

import './styles/App.css';

function App() {
  const [posts, setsPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript 2', body: 'Description' },
    { id: 3, title: 'JavaScript 3', body: 'Description' },
  ]);

  return (
    <div className='App'>
      <form>
        <MyInput type='text' placeholder='Название поста' />
        <MyInput type='text' placeholder='Описание поста' />
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={posts} />
    </div>
  );
}

export default App;
