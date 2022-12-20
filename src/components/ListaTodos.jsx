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
    <div className="p-3 bg-light">
      <figure className="text-center">
        <blockquote className="blockquote">
              <h1 className="text-info">List Todos:</h1>
              <h4>Consumiendo API desde React</h4>
        </blockquote>
        <figcaption className="blockquote-footer">
          <b>Fuente:</b> <cite title="Source Title">{url}</cite>
        </figcaption>
        <hr />
      </figure>
      
      <section>
        <div className="list-group">
            { !todos || !users ? 'Cargando los datos desde la url ...' :
              todos.map((todo,index) =>{
                return <button type="button" className="list-group-item list-group-item-action" key={todo.id}><span className="badge rounded-pill bg-info"><b>{todo.id}</b></span> - <b>Title:</b> {todo.title}, <b>ID user:</b> {todo.userId}, <b>User: </b>{users.filter(u => u.id === todo.userId).map(user => (user.name))} {todo.completed ? <span className="badge rounded-pill bg-success float-end">Completado</span>:<span className="badge rounded-pill bg-warning float-end">Pendiente</span>}</button>
                }
              )
            }
          </div>
      </section>
      <span></span>
    </div>
  );
}

export default ListaTodos;
