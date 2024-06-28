import { Component } from "react";
import { Container, Dropdown, Row } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

class MyHome extends Component {
  render() {
    return (
      <Container fluid className="px-4">
        <div className="d-flex justify-content-between ">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="btn-group" role="group">
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic" className=" mx-3 border border-1">
                  genres
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            <Grid></Grid>
            <Grid3x3 mx-4></Grid3x3>
          </div>
        </div>
      </Container>
    );
  }
}

export default MyHome;
