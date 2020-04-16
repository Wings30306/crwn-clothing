import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils"

import "./header.styles.scss";

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
        currentUser ? <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : <Link className="option" to="/sign-in">SIGN IN</Link>
      }
      
    </div>
  </div>
);

export default Header;


/**
 * NOTE FOR FUTURE REFERENCE:
 * 
 * import { ReactComponent as Logo }
 * 
 * This is a new special syntax when importing SVG in React. The ReactComponent import name is special and tells Create React App that you want a React component that renders an SVG, rather than its filename. You can read more about it here, but keep in mind that this is a React library special syntax:
 * 
 * https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
 */
