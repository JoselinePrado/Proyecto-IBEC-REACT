import React, { useState, useEffect } from "react";

function ListaPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const urlusuarios = 'https://jsonplaceholder.typicode.com/users';
  const [posts, setTodos] = useState();
  const [users, setUsers] = useState();
  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON);
  }
  const fetchApiUsers = async () => {
    const response = await fetch(urlusuarios);
    const responseJSON = await response.json();
    setUsers(responseJSON);
  }

  useEffect(() => { // useEffect esta ejecutando a fetchApi definida 
      fetchApi()
      fetchApiUsers()
    }, []) // [], al terminar de ejecutarse el fetchApi, con los parentesis rectos RENDERIZA

  return (
    <div>
      <h3>Consumiendo API desde React</h3>
      <p>fuente: {url}</p>
      <section>
        <ul>
          { !posts ? 'Cargando los datos desde la url ...' :
            posts.map((post,index) =>{
              return <li key={post.id}>{post.id} - {post.title} - {post.userId} - {users.filter(u => u.id === post.userId).map(user => (user.name))} - {post.body}</li>
              }
            )
          }
        </ul>
      </section>
      <span></span>
    </div>
  );
}

export default ListaPosts;
