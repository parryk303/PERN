import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const App = () => {
  const [posts, setPosts] = useState()

  const getData = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => setPosts(res.data))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* check if posts array is defined first before mapping, allows time for async */}
        {posts && posts.map((post) => (
          <p className='App-intro'>
            Response: {post.id}
          </p>
        ))}
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );

}

export default App;
