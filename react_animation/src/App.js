import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isModalOpen: false,
  };

  showModal = () => {
    this.setState({ isModalOpen: true });
  };

  hideModal = () => {
    this.setState({ isModalOpen: false });
  };


  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <Modal show={this.state.isModalOpen} closed={this.hideModal}/>
        <Backdrop show={this.state.isModalOpen} />
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
