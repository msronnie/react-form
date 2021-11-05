import { Form, Button } from "react-bootstrap";
import FormContainer from "./components/formcontainer/FormContainer";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {

  const submitHandler = (e) => {
    e.preventDefault();
    window.print();
  }

  return (
    <>
      <FormContainer className="App" className="form">
        <h1>USER ACCESS REQUEST FORM</h1>
        <Form onSubmit={submitHandler}>
          <h5>DEPARTMENT DETAILS</h5>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name of Department/ Unit/ Branch</Form.Label>
            <Form.Control type="name" placeholder="Enter name"></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Enter email"></Form.Control>
          </Form.Group>

          <Form.Label>Staff Status:</Form.Label>

          <Form.Group className="mb-3 checkbox" controlId="isadmin">
            <Form.Check
              type="checkbox"
              className="check"
              label="Permanent"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="Contract"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="National Service"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="Intern"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="Consultant"
            ></Form.Check>
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Profile Expiring Date</Form.Label>
            <Form.Control type="date" placeholder="Enter email"></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="email">
            <Form.Label>HR/MIS/CARDS Confirmation of Expiry Date</Form.Label>
            <Form.Control type="date" placeholder="Enter email"></Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>HR T24 training confirmation</Form.Label>
            <Form.Control type="name" placeholder="Confirm"></Form.Control>
          </Form.Group>

          <h5>REQUEST TYPE</h5>

          <Form.Group className="mb-3" controlId="name">
            <Form.Check
              type="checkbox"
              className="check"
              label="T24 Access"
            ></Form.Check>
          </Form.Group>

          <Form.Label>Mandates Access:</Form.Label>

          <Form.Group className="mb-3 checkbox" controlId="isadmin">
            <Form.Check
              type="checkbox"
              className="check"
              label="Read"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="Write"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="Delete"
            ></Form.Check>
          </Form.Group>

          <Form.Group className="mb-3 " controlId="name">
            <Form.Check
              type="checkbox"
              className="check"
              label="Access to Domain Controller (network)"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="E-mail"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="Moodys"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="Laserfiche"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="SWIFT"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="AML"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="OPAY"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="Custody System"
            ></Form.Check>
          </Form.Group>

          <Form.Label>HR Software:</Form.Label>

          <Form.Group className="mb-3 checkbox" controlId="isadmin">
            <Form.Check
              type="checkbox"
              className="check"
              label="Human Resource (15, 17, 18, 20)"
            ></Form.Check>
            <Form.Check
              type="checkbox"
              className="check"
              label="Payroll (15, 17, 18, 20)"
            ></Form.Check>
          </Form.Group>

          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Role \Description (Type of profile):</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter description"
            ></Form.Control>
          </Form.Group>

          <div className="row">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Heads Approval</Form.Label>
              <Form.Control type="name" placeholder=""></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder=""></Form.Control>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Internal Control Approval</Form.Label>
              <Form.Control type="name" placeholder=""></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder=""></Form.Control>
            </Form.Group>
          </div>
          <div className="row">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Senior Management Approval</Form.Label>
              <Form.Control type="name" placeholder=""></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder=""></Form.Control>
            </Form.Group>
          </div>

          <h5>MIS USE - Access to Domain Server</h5>
          <div className="row">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Heads Approval</Form.Label>
              <Form.Control type="name" placeholder=""></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder=""></Form.Control>
            </Form.Group>
          </div>

          
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Staff Assigned</Form.Label>
              <Form.Control type="name" placeholder=""></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Moodys ID</Form.Label>
              <Form.Control type="text" placeholder=""></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Network ID</Form.Label>
              <Form.Control type="text" placeholder=""></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
              <Form.Label>E-mail ID</Form.Label>
              <Form.Control type="text" placeholder=""></Form.Control>
            </Form.Group>

            <div>(Contact MIS for your password)</div>

            <h5>MIS USE - Access to Domain Server</h5>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Date Tested & Certified by</Form.Label>
              <Form.Control type="text" placeholder=""></Form.Control>
            </Form.Group>

            <div className = "row">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Head of Dept's Sign Off</Form.Label>
              <Form.Control type="name" placeholder=""></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder=""></Form.Control>
            </Form.Group>
            </div>

          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </FormContainer>
    </>
  );
}

export default App;
