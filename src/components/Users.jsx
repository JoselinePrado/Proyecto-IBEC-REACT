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
      <div className="p-3 bg-light">
          <figure className="text-center">
            <blockquote className="blockquote">
              <h1 className="text-info">Users List:</h1>
              <h4>Consumiendo API desde React</h4>
            </blockquote>
            <figcaption className="blockquote-footer">
              <b>Fuente:</b> <cite title="Source Title">{urlusuarios}</cite>
              <hr />
            </figcaption>
          </figure>
              
          <section>
                    <table className="table table-hover mb-2">                     
                        <tbody>  
                         { !users ? 'Cargando los datos desde la url ...' :                          
                           users.map((user,index) =>{ return (
                            <tr>
                            <th scope="row" key={user.id}></th>
                            <td><br></br><span className="badge rounded-pill bg-info"><b>{user.id}</b></span></td>
                            <td><b>User:</b> {user.name} <br></br> <b>Street:</b> {user.address.street} <br></br> <b>Phone:</b> {user.phone}</td>
                            <td><b>User name:</b> {user.username} <br></br> <b>City:</b> {user.address.city} <br></br> <b>Website:</b> {user.website}</td>
                            <td><b>Email:</b> {user.email} <br></br> <b>Zip Code:</b> {user.address.zipcode} <br></br> <b>Company:</b> {user.company.name}</td>
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
