import { useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import "./Login.css";
import {Signup} from "../../api/Auth";


const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // toggle signup to signin
  const toggle = () => {
    setShowSignup(!showSignup);
  };

  const signupHandler = async() => {
    const user = {username, password, email}; 
    try {
        const response = await Signup(user); 
        console.log(response.data.message);
     
    }catch (error) {
        console.log(error);
    }
}

  const renderComponent = () => {
    return (
      <>
        <div>
          <h4 className="heading display-5">
            {showSignup ? "SIGN UP" : "LOG IN"}
          </h4>

          <Container className="bg-light">
            <Form.Group>
              <Stack gap={2} className="col-md-5 mx-auto">
                <Row className="m-2">
                  <Col md={{ span: 4 }}>
                    <Form.Label className="label">User Name </Form.Label>
                  </Col>

                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Enter User Name"
                      className="text-center"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </Col>
                </Row>
              </Stack>
              {showSignup && (
                <>
                  <Stack gap={2} className="col-md-5 mx-auto">
                    <Row className="m-2">
                      <Col md={{ span: 4 }}>
                        <Form.Label className="label">Email ID </Form.Label>
                      </Col>
                      <Col>
                        <Form.Control
                          type="email"
                          placeholder="Enter Email ID"
                          className="text-center"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Col>
                    </Row>
                  </Stack>
                </>
              )}

              <Stack gap={2} className="col-md-5 mx-auto">
                <Row className="m-2">
                  <Col md={{ span: 4 }}>
                    <Form.Label className="label"> Password</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      type="password"
                      className="text-center"
                      placeholder={
                        showSignup ? "Set Password" : "Enter Passowrd"
                      }
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit" className="rounded-4 m-2" onClick={signupHandler}>
                      {showSignup ? "SIGN UP" : "LOG IN"}
                    </Button>
                  </Col>
                </Row>
                <p className="msg" onClick={toggle}>
                  {showSignup
                    ? "If you already had sign up? Log in"
                    : "If you don't have an account ? Sign up"}
                </p>
              </Stack>
            </Form.Group>
          </Container>
        </div>
      </>
    );
  };
  return renderComponent();
};

export default Login;
