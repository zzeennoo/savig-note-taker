// reactstrap components
import { Link } from "react-router-dom";
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

const Register = () => {
  return (
    <>
      <Col lg="15" md="10">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 pt-lg-5 pb-3">
            <div className="text-center text-muted">
              <h1>Sign up</h1>
            </div>
            <div className="text-center text-muted mb-4">
              <medium>You don't have an account yet? Don't worry! Please sign up to have a great experience with Savig.</medium>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-circle-08" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" type="text" />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
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
                  />
                </InputGroup>
                <div className="mt-3 text-muted font-italic">
                  <small>
                    password strength:{" "}
                    <span className="text-success font-weight-700">strong</span>
                  </small>
                </div>
                <Row className="my-2">
                  <Col xs="12">
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckRegister"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckRegister"
                      >
                        <span className="text-muted">
                          I agree with the{" "}
                          <a href="#pablo" onClick={(e) => e.preventDefault()}>
                            Privacy Policy
                          </a>
                        </span>
                      </label>
                    </div>
                  </Col>
                </Row>
                <div className="text-center">
                  <Button className="mt-2" color="primary" type="button">
                    Create account
                  </Button>
                </div>
              </FormGroup>
              <Row>
                <Col className="text-right" xs="12">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Col className="mt-1" to="/auth/login" tag={Link}>
                      <small>Already a member?</small>
                    </Col>
                  </a>
                </Col>
              </Row>
            </Form>
          </CardBody>
          <CardFooter className="bg-transparent">
            <div className="text-muted text-center">
              <h4>Or sign up with</h4>
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

export default Register;
