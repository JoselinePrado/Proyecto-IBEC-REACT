import React, { useState, useEffect } from "react";

function ListaTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  const urlusuarios = 'https://jsonplaceholder.typicode.com/users';
  const [todos, setTodos] = useState();
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
          { !todos ? 'Cargando los datos desde la url ...' :
            todos.map((todo,index) =>{
              return <li key={todo.id}>{todo.id} - {todo.title} - {todo.userId} - {users.filter(u => u.id === todo.userId).map(user => (user.name))} - {todo.completed ? 'completado':'pendiente'}</li>
              }
            )
          }
        </ul>
      </section>
      <span></span>
    </div>
  );
}

export default ListaTodos;
