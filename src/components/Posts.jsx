import React, { useState, useEffect } from "react";

function ListaPosts() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const urlusuarios = 'https://jsonplaceholder.typicode.com/users';
  const urlcomments = 'https://jsonplaceholder.typicode.com/comments';
  const [posts, setTodos] = useState();
  const [users, setUsers] = useState();
  const [comments, setComments] = useState();
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
  const fetchApiComments = async () => {
    const response = await fetch(urlcomments);
    const responseJSON = await response.json();
    setComments(responseJSON);
  }

  useEffect(() => { // useEffect esta ejecutando a fetchApi definida 
      fetchApi()
      fetchApiUsers()
      fetchApiComments()
    }, []) // [], al terminar de ejecutarse el fetchApi, con los parentesis rectos RENDERIZA

  return (
    <div className="p-3 bg-light">
      <figure className="text-center">
        <blockquote className="blockquote">
              <h1 className="text-info">Posts:</h1>
              <h4>Consumiendo API desde React</h4>
        </blockquote>
        <figcaption className="blockquote-footer">
          <b>Fuentes:</b> <cite title="Source Title">{url}, {urlcomments}</cite>
        </figcaption>
        <hr />
      </figure>
      
      <section>
        <div className="list-group">
            { !posts || !users || !comments ? 'Cargando los datos desde la url ...' :
              posts.map((post,index) =>{
                return <button type="button" className="list-group-item list-group-item-action" key={post.id}>  
                          <p className="text-center"><span className="badge rounded-pill bg-info"><b>{post.id}</b></span>
                          <b> - Title: </b>{post.title}, <b>User ID:</b> {post.userId}, <b>User:</b> {users.filter(u => u.id === post.userId).map(user => (user.name))}</p> 
                          <p className="p-1 mb-2 text-center"><b>POST </b></p> <p>{post.body} </p>
                            <div className="accordion" id="accordionExample">
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                  <div class="d-grid gap-2">
                                    <button className="btn btn-outline-info" type="button" data-bs-toggle="collapse" data-bs-target={'#collapseOne' + index} aria-expanded="true" aria-controls="collapseOne">
                                      COMMENTS
                                    </button>
                                  </div>
                                </h2>
                                <div id={'collapseOne' + index}  className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                  <div className="accordion-body">
                                    <p><b>Name:</b> {comments.filter(c => c.postId === post.id).map(comment => (comment.name))}</p>
                                    <p><b>Email:</b> {comments.filter(c => c.postId === post.id).map(comment => (comment.email))}</p>
                                    <p><b>Body:</b> {comments.filter(c => c.postId === post.id).map(comment => (comment.body))}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                        </button>
                })
            }
        </div>
      </section>
      <span></span>
    </div>
  );
}

export default ListaPosts;
