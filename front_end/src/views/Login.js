// reactstrap components
import { Link } from "react-router-dom";

import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

//import UserLayout from "../layouts/User.js";
// import AdminLayout from "../layouts/Admin.js";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [pwd,setPwd] = useState('');
  // haha = (e) => {
  //   console.log('haha')
  //   e.preventDefault();
  // }
  const handleSignIn = async (e) => {
    e.preventDefault();
    
    // return (
    //   <Route path="/user/*" element={<UserLayout />} />
    // );
    //return <Navigate replace to="/user/*"/>;
    if( (email=='Long@gmail.com' || email=='user@gmail.com' || email=='quocthanh.280603@gmail.com') && pwd=='123')
    navigate("/user/*");
    else if(email=='admin@gmail.com' && pwd=='321')
    navigate('/admin/*');
    else
    window.alert("Wrong email or password");
  };
  
  return (
    <>
      <Col lg="15" md="10">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 pt-lg-5 pb-3">
            <div className="text-center text-muted">
              <h1>Sign in</h1>
            </div>
            <div className="text-center text-muted mb-4">
              <medium>Welcome back! Please login to your account to keep track of and manage your tasks and events.</medium>
            </div>
            <Form role="form" onSubmit={handleSignIn} >
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    //value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                  /> 
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </InputGroup>
                <div className="mt-3 custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  <Button className="mt-2" color="primary" type="submit">
                    Sign in
                  </Button>
                  {/* <input type="submit" value="Submit" /> */}
                </div>
              </FormGroup>
              <Row>
                <Col xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Col className="mt-1" to="/auth/register" tag={Link}>
                      <small>Create new account</small>
                    </Col>
                  </a>
                </Col>
                <Col className="text-right" xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Col className="mt-1" to="/auth/forgotpass" tag={Link}>
                      <small>Forgot password?</small>
                    </Col>
                  </a>
                </Col>
              </Row>
            </Form>
          </CardBody>
          <CardFooter className="bg-transparent">
            <div className="text-muted text-center">
              <h4>Or sign in with</h4>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="rounded-circle">
                  <img
                    alt="..."
                    src={
                      require("../assets/img/icons/common/google.svg")
                        .default
                    }
                  />
                </span>
              </Button>
              <Button
                className="btn-neutral"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="rounded-circle">
                  <img
                    alt="..."
                    src={
                      require("../assets/img/icons/common/facebook.svg")
                        .default
                    }
                  />
                </span>
              </Button>
              <Button
                className="btn-neutral"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="rounded-circle">
                  <img
                    alt="..."
                    src={
                      require("../assets/img/icons/common/github.svg")
                        .default
                    }
                  />
                </span>
              </Button>
              <Button
                className="btn-neutral"
                color="default"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="rounded-circle">
                  <img
                    alt="..."
                    src={
                      require("../assets/img/icons/common/microsoft.svg")
                        .default
                    }
                  />
                </span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </Col>
    </>
  );
};

export default Login;
