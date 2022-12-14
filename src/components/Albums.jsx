import React, { useState, useEffect } from "react";

function ListaAlbums() {
  const url = 'https://jsonplaceholder.typicode.com/albums';
  const urlusuarios = 'https://jsonplaceholder.typicode.com/users';
  const [albums, setTodos] = useState();
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

  useEffect(() => { // useEffect esta ejecutando a fetchApi definida en linea 14
      fetchApi()
      fetchApiUsers()
    }, []) // [], al terminar de ejecutarse el fetchApi, con los parentesis rectos RENDERIZA

  return (
    <div>
      <h3>Consumiendo API desde React</h3>
      <p>fuente: {url}</p>
      <section>
        <ul>
          { !albums ? 'Cargando los datos desde la url ...' :
            albums.map((album,index) =>{ return <li key={album.id}>{album.id} - {album.title} - {album.userId} - {users.filter(u => u.id === album.userId).map(user => (user.name))}</li> })
          }
        </ul>
      </section>
      <span></span>
    </div>
  );
}

export default ListaAlbums;
