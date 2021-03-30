import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
// reactstrap components
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import UserContext from "../providers/User";

// core components
import TopNavbar from "components/Navbars/TopNavbar.js";
import FooterSocial from "components/Footers/FooterSocial.js";

export const SEND_MAGIC_LINK = gql`
  mutation($email: String!, $secret: SecretInput!) {
    sendMagiclink(email: $email, secret: $secret)
  }
`;

function MagicLinkPage() {
  const {
    user: { isAuthenticated, profile: { email }, secret, token },
    dispatch,
  } = useContext(UserContext);

  let history = useHistory();
  /* Redirect if not authenticated */
  if (!isAuthenticated) history.push("/");
  /* Input control */
  const [input, setInput] = useState({
    email: "",
  });
  const changeInput = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  /* SendMagicLink */
  const [sendMagicLink, { data, loading, error }] = useMutation(
    SEND_MAGIC_LINK,
    {
      update(cache, { data }) {
        console.log(`Token: ${data.sendMagiclink}`);
      },
    }
  );
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email && input.email) {
      dispatch({ type: "set_profile", value: input });
    }
    sendMagicLink({
      variables: {
        email: email || input.email,
        secret: {
          publicKey: secret.public,
          privateKey: secret.private,
        },
      },
    });
  };
  return (
    <>
      <TopNavbar isAuthenticated={isAuthenticated} />
      <div className="wrapper">
        <Container>
          <h1>Your Magic Link</h1>
          <p>Magic link explanation</p>
          {!token && !data && !loading && !email && (
            <Form onSubmit={onSubmit}>
              <FormGroup>
                <Label for="email">E-mail</Label>
                <Input
                  required
                  type="email"
                  name="email"
                  onChange={changeInput}
                  placeholder="Your e-mail address so we can send your token"
                />
              </FormGroup>
              <Button type="submit">Send magic link</Button>
            </Form>
          )}
          {loading && <p>Sending email...</p>}
          {!loading && (data || token || email) && (
            <Button
              onClick={() =>
                sendMagicLink({
                  variables: {
                    email: email,
                    secret: {
                      publicKey: secret.public,
                      privateKey: secret.private,
                    },
                  },
                })
              }
            >
              Resend e-mail
            </Button>
          )}
          {error && <p>Error on sending e-mail</p>}
        </Container>
        <FooterSocial />
      </div>
    </>
  );
}

export default MagicLinkPage;
