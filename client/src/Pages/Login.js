import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../Component/Base";

const Login = () => {
  return (
    <Base>
      <Container>
        <Row className="mt-3">
          <Col sm={{ size: 5, offset: 3 }}>
            <Card color="primary" inverse>
              <CardHeader>
                <h3>Fill out this form to login !!!</h3>
              </CardHeader>

              <CardBody>
                <Form>
                  {/* Email Field */}
                  <FormGroup>
                    <Label for="email"> Enter Your Registered Email</Label>
                    <Input type="email" placeholder="Email" id="email" />
                  </FormGroup>

                  {/* Password Field */}
                  <FormGroup>
                    <Label for="password"> Enter Your Password</Label>
                    <Input
                      type="password"
                      placeholder="Password"
                      id="password"
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button color="dark">Login</Button>
                    <Button color="danger" type="reset" className="ms-2 ">
                      Reset
                    </Button>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Login;
