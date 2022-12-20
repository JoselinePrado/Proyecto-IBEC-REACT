import React from "react";
import PropTypes from "prop-types";
import Users from './Users.jsx';
import ListaTodos from './ListaTodos.jsx';
import Albums from './Albums.jsx';
import Posts from './Posts.jsx';


const Navbar = (props) => {

    function showPhotos() {
        console.log('mostart photos')
    }

 return (  
    <div> 
      <nav className="navbar navbar-expand-lg bg-light">
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" aria-selected="true" role="tab" href="#divusuario">{props.item1Text}</a>                 
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#divalbums" aria-selected="false" role="tab" tabIndex="0">{props.item2Text}</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#divpost" aria-selected="false" role="tab" tabIndex="1">{props.item3Text}</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" data-bs-toggle="tab" href="#divtodos" aria-selected="false" role="tab" tabIndex="2">{props.item4Text}</a>
                </li>
            </ul>
      </nav>

      
      <div id="myTabContent" className="tab-content">
        <div className="tab-pane fade active" id="divusuario" role="tabpanel">
            <Users />
        </div>
        <div className="tab-pane fade" id="divalbums" role="tabpanel">
          <Albums />
        </div>
        <div className="tab-pane fade" id="divpost" role="tabpanel">
           <Posts />
        </div>
        <div className="tab-pane fade" id="divtodos" role="tabpanel">
          <ListaTodos />
        </div>
      </div>


</div>
 );
};

Navbar.propTypes = {
  logoHref: PropTypes.string, 
  logoURL: PropTypes.string,
  logAlt: PropTypes.string,
  logoTitle: PropTypes.string,
  item1URL: PropTypes.string,
  item1Text: PropTypes.string,
  item2URL: PropTypes.string,
  item2Text: PropTypes.string,
  item3URL: PropTypes.string,
  item3Text: PropTypes.string,
  item4URL: PropTypes.string,
  item4Text: PropTypes.string,
};

Navbar.defaultProps = {
  item1Text: "Usuario",
  item2Text: "Albums",
  item3Text: "Post",
  item4Text: "Todos",
};

export default Navbar;
