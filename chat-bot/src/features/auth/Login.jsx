import React, { useState } from "react";
import {
  Header,
  Form,
  Grid,
  Segment,
  Icon,
  Button,
  Message,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import styles from "./auth.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const displayErrors = () =>
    errors.map((error, key) => <p key={key}>{error.message} </p>);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      password,
      email,
    });
  };

  return (
    <div>
      <Grid textAlign="center" verticalAlign="middle" className={styles.form}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" icon>
            <Icon name="comments outline" />
            {" Chat-bot "}
          </Header>

          <Form>
            <Segment>
              <Form.Field>
                <Form.Input
                  fluid
                  placeholder="Email Adresi"
                  onChange={(e) => setEmail(e.target.value)}
                  icon="mail"
                  iconPosition="left"
                  name="email"
                  type="email"
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  fluid
                  placeholder="Parola"
                  onChange={(e) => setPassword(e.target.value)}
                  icon="lock"
                  iconPosition="left"
                  name="password"
                  type="password"
                />
              </Form.Field>
            </Segment>

            <Button color="blue" fluid size="large" onClick={handleSubmit}>
              Login
            </Button>
          </Form>

          {errors.length > 0 && <Message error>{displayErrors()}</Message>}

          <Message>
            <Icon name="help" color="blue" />
            <Link to="/register ">go to SingUp ...</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Login;
