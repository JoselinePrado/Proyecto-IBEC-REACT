import React, { useState, useEffect } from "react";

function Users() {
  const urlusuarios = 'https://jsonplaceholder.typicode.com/users';
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
          <h2>Consumiendo API desde React</h2>
          <section>
                    <table className="table table-hover">                     
                        <tbody>  
                         { !users ? 'Cargando los datos desde la url ...' :                          
                           users.map((user,index) =>{ return (
                            <tr>
                            <th scope="row" key={user.id}></th>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            </tr>
                              )}
                        )}
                        </tbody>
                    </table>
                
          </section>
          <span></span>
        </div>
      );

}

    export default Users;
