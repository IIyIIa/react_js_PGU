import React, { useState, useEffect } from 'react';


const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const renderUserPosts = () => {
    const renderedPosts = [];

    users.forEach(user => {
      const userPosts = posts.filter(post => post.userId === user.id).slice(0, 10);

      if (userPosts.length > 0) {
        renderedPosts.push(
          <div key={user.id}>
            <div className="user-card">
              <h2>{user.name}</h2>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Company: {user.company.name}</p>
            </div>
            <div className="posts-container">
              {userPosts.map(post => (
                <div className="post-card" key={post.id}>
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
              ))}
            </div>
          </div>
        );
      }
    });

    return renderedPosts;
  };

  return (
    <div>
      <h1>Посты</h1>
      {renderUserPosts()}
    </div>
  );
};

export default PostsPage;
