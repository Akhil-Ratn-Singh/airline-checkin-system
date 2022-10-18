import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import Base from '../Component/Base'

const Registration = () => {
  return (
    <Base>
      <h1> this is registration Page...</h1>
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 5, offset: 3 }}>
            <Card color="primary" inverse>
              <CardHeader>
                <h3> Fill Information to register !!!</h3>
              </CardHeader>

              <CardBody>
                {/* Creating SignUp Forms */}
                <Form>
                  {/* First Name Field */}
                  <FormGroup>
                    <Label for="firsName" > First Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter Your First Name"
                      id="firstNmae"
                    />
                  </FormGroup>

                  {/* Last Name Field */}
                  <FormGroup>
                    <Label for="lastName"> Last Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter Your Last Name"
                      id="lastName"
                    />
                  </FormGroup>

                  {/* Email Field */}
                  <FormGroup>
                    <Label for="email"> Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter Your Email"
                      id="email"
                    />
                  </FormGroup>

                  {/* Password Field */}
                  <FormGroup>
                    <Label for="password"> Password</Label>
                    <Input
                      type="password"
                      placeholder="Generate a Password"
                      id="password"
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button type="submit" color="dark">
                      Register
                    </Button>
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
}

export default Registration