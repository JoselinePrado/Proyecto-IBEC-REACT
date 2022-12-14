import React, { useState, useEffect } from "react";

function ListaUsers() {
  const urlusuarios = 'https://jsonplaceholder.typicode.com/users';
  const url = 'https://jsonplaceholder.typicode.com';
  const [users, setUsers] = useState();
  const fetchApiUsers = async () => {
    const response = await fetch(urlusuarios);
    const responseJSON = await response.json();
    setUsers(responseJSON);
  }


  useEffect(() => { // useEffect esta ejecutando a fetchApiUsers
      fetchApiUsers()
    }, []) // [], al terminar de ejecutarse el fetchApiUsers, con los parentesis rectos RENDERIZA

    return (
        <div>
          <h3>Consumiendo API desde React</h3>
          <p>fuente: {url}</p>
          <section>
            <ul>
              { !users ? 'Cargando los datos desde la url ...' :
                users.map((user,index) =>{
                  return <li key={user.id}>{user.id} - {user.name} </li>
                  }
                )
              }
            </ul>
          </section>
          <span></span>
        </div>
      );

}

    export default ListaUsers;
