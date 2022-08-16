import React, { Component } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    isModalOpen: false,
    isShowingBlock: false,
  };

  showModal = () => {
    this.setState({ isModalOpen: true });
  };

  hideModal = () => {
    this.setState({ isModalOpen: false });
  };

  blockHandler = () => {
    this.setState((prevState) => ({
      isShowingBlock: !prevState.isShowingBlock,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={this.blockHandler}>
          Toggel Block
        </button>
        <br />
        <Transition
          in={this.state.isShowingBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "exiting" ? 0 : 1,
                opacity: state === "entering" || state === "entered" ? 1 : 0,
              }}
            />
          )}
        </Transition>
        <Transition
          in={this.state.isModalOpen}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => <Modal show={state} closed={this.hideModal} />}
        </Transition>

        {this.state.isModalOpen ? (
          <Backdrop show={this.state.isModalOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
