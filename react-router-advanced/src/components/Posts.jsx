import React from 'react';
import { Link } from 'react-router-dom';

const postsData = [
  { id: '1', title: 'First Post' },
  { id: '2', title: 'Second Post' },
  { id: '3', title: 'Third Post' },
];

function Posts() {
  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {postsData.map(post => (
          <li key={post.id}>
            {post.title}
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
