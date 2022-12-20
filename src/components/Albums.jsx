import React, { useState, useEffect } from "react";
import Photos from "./Photos.jsx";

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
    <div className="p-3 bg-light">
      <figure className="text-center">
        <blockquote className="blockquote">
          <h1 className="text-info">Albums:</h1>
          <h4>Consumiendo API desde React</h4>
        </blockquote>
        <figcaption className="blockquote-footer">
          <b>Fuentes:</b> <cite title="Source Title">{url}, https://jsonplaceholder.typicode.com/photos</cite>
          <hr />
        </figcaption>
      </figure>

      <section>
        <div className="list-group">
            { !albums || !users ? 'Cargando los datos desde la url ...' :
              albums.map((album,index) =>{ return <button type="button" className="list-group-item list-group-item-action" key={album.id}>
                <div className="p-2 mb-2"><span className="badge rounded-pill bg-info"><b>{album.id}</b></span> 
                  <b> Title:</b> {album.title}, <b>ID User:</b> {album.userId}, 
                  <b>User:</b> {users.filter(u => u.id === album.userId).map(user => (user.name))} 
                </div>

                <div className="accordion" id="accordionExample">
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                  <div class="d-grid gap-2">
                                    <button className="btn btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target={'#collapseOne' + index} aria-expanded="true" aria-controls="collapseOne">
                                      See More
                                    </button>
                                  </div>
                                </h2>
                                <div id={'collapseOne' + index}  className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <Photos albumId={album.id} />
                                  </div>
                                </div>
                              </div>
                            </div>
                </button> })
            }
          </div>
      </section>
      <span></span>
    </div>
  );
}

export default ListaAlbums;
