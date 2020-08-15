import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
class ModalPage extends Component {
  state = {
    modal: false,
    header: "",
    para: "",
    footer: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      ...this.state,
      [name]: value
    });
  };

  render() {
    return (
      <MDBContainer>
        <div class="text-center">
          <h1>Welcome to Text to Pdf Generator</h1>
          <MDBBtn class="btn1" onClick={this.toggle}>
            Click to Generate
          </MDBBtn>
        </div>
        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
          <MDBModalHeader toggle={this.toggle}>Pdf Generator</MDBModalHeader>
          <MDBModalBody>
            <div class="container5">
              <h2>Drop your text here</h2>

              <form>
                <div class="group">
                  <input
                    type="text"
                    name="header"
                    value={this.state.header}
                    required
                    onChange={this.handleChange}
                  ></input>
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Header</label>
                </div>

                <div class="group">
                  <input
                    type="text"
                    name="para"
                    value={this.state.para}
                    required
                    onChange={this.handleChange}
                  ></input>
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Paragraph</label>
                </div>

                <div class="group">
                  <input
                    type="text"
                    name="footer"
                    value={this.state.footer}
                    required
                    onChange={this.handleChange}
                  ></input>
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Footer</label>
                </div>
              </form>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn class=" btn2 btn-danger" onClick={this.toggle}>
              Close
            </MDBBtn>
            <NavLink
              exact
              to={{
                pathname: "Generator",
                data: this.state 
              }}
            >
              {" "}
              <MDBBtn type="button" class="btn btn-info">
                Preview
              </MDBBtn>
            </NavLink>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;
