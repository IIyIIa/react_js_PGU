import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });

  }, []);

  const getUserPost = (userId) => {
    return posts.find(post => post.userId === userId);
  };


  return (
    <div className="App">
      <h1>Pupanov 0432-06 React</h1>
      {users.map(user => {
        const userPost = getUserPost(user.id);

        return (
          <div key={user.id} className="user-card">
            <h2>{user.name} ({user.username})</h2>
            <p>mail: {user.email}</p>
            <p>phone number: {user.phone}</p>
            <p>company name: "{user.company.name}"</p>
            {userPost && (
              <div className="user-post">
                <h3>User Post:</h3>
                <p className='post-title custom-color'>{userPost.title}</p>
                <p>{userPost.body}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default App;
