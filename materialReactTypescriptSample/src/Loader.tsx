import React, { useState, useEffect } from 'react'

export default function Loader () {
  const [post, getPost] = useState([])

  // const loadUrl = 'https://jsonplaceholder.typicode.com/posts';
  const loadUrl = 'http://localhost:8080/oppo';
  
  const fetchPost = () => {
    fetch(loadUrl, {
      crossDomain:true,
      method: 'GET',
      /*
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        username: user,
        password: pass,
      })
      */
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        getPost(res)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <>
      <h2>React Fetch Data with REST API Example</h2>
      <ul>
        {post.map((item, i) => {
          return <li key={i}>{item.id}</li>
        })}
      </ul>
    </>
  )
}