import React ,{useState} from "react";
import Pdf from "react-to-pdf";
import { NavLink} from "react-router-dom";
import {

  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
const ref = React.createRef();
const Home = (props) => {  
  console.log(props);
  console.log(props.location.data);
  const data = props.location.data;
  const [state , setState] = useState({
    modal: false,
    header: "",
    para: "",
    footer: "",
})
console.table(state)
function toggle (){
    setState({
      modal: !state.modal
    });
  };

  function foggle (){
    setState({
      modal: !state.modal,
      header: data.header,
    para: data.para,
    footer: data.footer,
    });
  };
  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  return (<>
  

    <div class="container1 container2">
      <div className="backbtn">
        <NavLink exact to="/">
          {" "}
          <button type="button" class="btn btn-warning">
          <strong>⌫</strong> Back
          </button>
        </NavLink>
        </div>
        <link href="https://fonts.googleapis.com/css2?family=Grenze&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500&display=swap" rel="stylesheet"></link>
        <div class="fulltext">
      <div ref={ref}>
        <h1 className="Header">{data.header}</h1>
        <p class="Para">{data.para}</p>
        <h3 className="Footer">{data.footer}</h3>
        </div>
        </div>
        <>
        <div class="generatebtn1">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button  class="generatebtn1 button" onClick={toPdf}>Generate a pdf</button>}
        </Pdf>
        <button type="button" class="generatebtn2 button" onClick={foggle}>Edit</button></div></>
        <MDBModal isOpen={state.modal} toggle={toggle}>
          <MDBModalHeader toggle={toggle}>Pdf Generator</MDBModalHeader>
          <MDBModalBody>
            <div class="container5">
              <h2>Drop your text here</h2>

              <form>
                <div class="group">
                  <input
                    type="text"
                    name="header"
                    value={state.header || ''}
                    required
                    onChange={handleChange}
                  ></input>
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Header</label>
                </div>

                <div class="group">
                  <input
                    type="text"
                    name="para"
                    value={state.para || ''}
                    required
                    onChange={handleChange}
                  ></input>
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Paragraph</label>
                </div>

                <div class="group">
                  <input
                    type="text"
                    name="footer"
                    value={state.footer || ''}
                    required
                    onChange={handleChange}
                  ></input>
                  <span class="highlight"></span>
                  <span class="bar"></span>
                  <label>Footer</label>
                </div>
              </form>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn class=" btn3 btn-danger" onClick={toggle}>
              Close
            </MDBBtn>
            <NavLink
              exact
              to={{
                pathname: "Generator",
                data: state
              }}
            >
              {" "}
              <MDBBtn onClick={toggle}type="button" class="btn btn-info">
                Preview
              </MDBBtn>
            </NavLink>
          </MDBModalFooter>
        </MDBModal>
    </div>
    </>
    
  );
};
export default Home;


















