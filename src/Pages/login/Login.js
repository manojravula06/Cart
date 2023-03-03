import { useState } from "react";
import axios from 'axios';
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import "./Login.css";
import {Signup,Signin} from "../../api/Auth";


const Login = ({token,setToken}) => {
  const [showSignup, setShowSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message,setMessage]=useState('')

  // toggle signup to signin
  const toggle = () => {
    setShowSignup(!showSignup);
  };
  const clearState=()=>{
      setUsername('');
      setEmail('')
      setPassword('')
  }
  const updateSignupData=(e)=>{
      const id=e.target.id;

      if(id==='username'){
        setUsername(e.target.value);
      }else if(id==='email'){
        setEmail(e.target.value);
      }else if(id==='password'){
        setPassword(e.target.value)
      }
      setMessage('')
  }
  //sign up functionality
  const signupHandler = async(e) => {
    e.preventDefault();
    const data={
      name:username,
      email:email,
      password:password
    };
    const response=await Signup(data)
    console.log(response)
    clearState()
 
}
  //sign in functionality
  const signinHandler=async(e)=>{
    e.preventDefault()
    const user={username,password}
    try {
      const response=await Signin(user)
      console.log(response)      
    } catch (error) {
      console.log(error)
    }
  }

  const renderComponent = () => {
    return (
      <>
        <div>
          <h4 className="heading display-5">
            {showSignup ? "SIGN UP" : "LOG IN"}
          </h4>
          <p className="text-danger">{message}</p>
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
                      id="username"
                      value={username}
                      onChange={updateSignupData}
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
                          id="email"
                          value={email}
                          onChange={updateSignupData}
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
                      placeholder="Enter Password"
                      id="password"
                      value={password}
                      onChange={updateSignupData}
                    />
                      {showSignup ? <input type="submit" name="signup" value="Sign up" className="btn btn-primary m-2"
                      onClick={signupHandler}/> : 
                      <input type="submit" name="signin" value="Sign in" className="btn btn-primary m-2" onClick={signinHandler}/>
                      }
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