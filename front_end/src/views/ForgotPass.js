// reactstrap components
import { Link } from "react-router-dom";
import {
    Button,
    Card,
    CardHeader,
    CardBody,
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
    return (
      <>
        <Col lg="15" md="10">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center text-muted">
                <h1>Forgot password?</h1>
              </div>
              <div className="text-center text-muted mb-4">
                <medium>Don't worry! It occurs. Please enter the email address linked with your account.</medium>
              </div>
              <Form role="form">
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
                    />
                  </InputGroup>
                  <div className="text-center">
                    <Button className="mt-4" color="primary" type="button">
                      Send
                    </Button>
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
                      <Col className="mt-1" to="/auth/login" tag={Link}>
                        <small>Already a member?</small>
                      </Col>
                    </a>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  };
  
  export default Login;
  