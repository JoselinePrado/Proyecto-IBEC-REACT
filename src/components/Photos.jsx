import React, { useState, useEffect } from "react";

function Photos(props) {
    const urlphotos = 'https://jsonplaceholder.typicode.com/photos';
    const [photos, setPhotos] = useState();
    const fetchApiPhotos = async () => {
      const response = await fetch(urlphotos);
      const responseJSON = await response.json();
      setPhotos(responseJSON);
    }

    const {albumId} = props
  
  
    useEffect(() => { // useEffect esta ejecutando a fetchApi
        fetchApiPhotos()
      }, []) // [], al terminar de ejecutarse el fetchApi, con los parentesis rectos RENDERIZA


      return (
        <div className="p-3 bg-light">          
          <section>
            <div className="list-group">
                { !photos ? 'Cargando los datos desde la url ...' :
                  photos.filter(p => p.albumId === albumId).map((photo,index) =>{
                    return <div className="list-group-item list-group-item-action" key={photo.id}>
                            <span><b>Title:</b> {photo.title}</span>
                            <span className="float-end"><a href={photo.url} target="_blank"><img src={photo.thumbnailUrl}></img></a></span>
                        </div>
                    }
                  )
                }
              </div>
          </section>
          <span></span>
        </div>
      );

    }

    export default Photos;