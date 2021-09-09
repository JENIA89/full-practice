import React from 'react';
import PostItem from './PostItem';

function PostList({ posts, remove }) {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Список постов</h1>
      {posts.map((post, i) => {
        return (
          <PostItem remove={remove} number={i + 1} post={post} key={post.id} />
        );
      })}
    </div>
  );
}

export default PostList;
