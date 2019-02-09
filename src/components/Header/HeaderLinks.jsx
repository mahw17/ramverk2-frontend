import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import {reactLocalStorage} from 'reactjs-localstorage';


class HeaderLinks extends Component {
    constructor(props) {
      super(props);
      this.state = {
        redirect: false,
        buttonLabel: "Logga in"
      };
    }

    checkLogin() {
        if (reactLocalStorage.get("token") !== 'false') {
            this.state.buttonLabel = "Logga ut";
            return true;
        }

        this.state.buttonLabel = "Logga in";
        return false;
    }

    setRedirect = () => {
      this.setState({
        redirect: true
      })
    }

    renderRedirect = () => {
      if (this.state.redirect) {
          this.state.redirect = false;
          if (this.checkLogin()) {
              reactLocalStorage.set('token', false);
              return <Redirect to='/' />
          }

        return <Redirect to='/user/login' />
      }
    }

  render() {

    return (
      <div>
         {this.renderRedirect()}
         {this.checkLogin()}
         <button className="btn-fill btn-secondary btn pull-right" onClick={this.setRedirect}>{this.state.buttonLabel}</button>
        </div>
    );
  }
}

export default HeaderLinks;
