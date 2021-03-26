import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
  Card,
  CardTitle,
  CardBody
} from 'reactstrap';
import ImageUpload from 'components/CustomUpload/ImageUpload.js'
import { localStorageSet } from '../lib/localStorage';

export const SIGNUP = gql`
  mutation($name: String!, $description: String) {
    signup(name: $name, description: $description) {
      public
      private
      curve
      id
    }
  }
`;

const SignupForm = ({ storageKeys }) => {
  /* History */
  let history = useHistory()
  /* Input control */
  const [input, setInput] = useState({
    profileName: '',
    profileDescription: '',
    profileImage: null,
  });
  const changeInput = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  /* Signup */
  const [signup, { data, loading, error }] = useMutation(SIGNUP, {
    update(cache, { data }) {
      const cleanData = Object.keys(data.signup).reduce((p, k) => {
        if (k !== '__typename') {
          return {
            ...p,
            [k]: data.signup[k]
          }
        } else {
          return p
        }
      }, {})
      localStorageSet(storageKeys.secret, cleanData);
    },
  });
  /* Submit form */
  const onSubmit = (e) => {
    e.preventDefault();
    const { profileName, profileDescription, profileEmail } = input;
    signup({ variables: { name: profileName, profile: profileDescription } });
    if (data && !error) {
      /* Hack to force refetching of new set localStorage keys */
      window.location.reload();
      history.push('/')
    }
    if (!error && data && profileEmail) {
      localStorageSet(storageKeys.email, profileEmail);
    }
  };
  return (
    <Container>
      <h1 className='mt-xl'>Join Cashless</h1>
      <p>
        We are an online community of people who can get things done without spending
        cash.
      </p>
      <Card>
        <CardBody>
          <CardTitle className="text-center" tag="h3">
            Create your Cashless profile
          </CardTitle>

          <Form onSubmit={onSubmit}>
            <FormGroup>
              {/* This renders a standard image upload
              <CardTitle>Regular Image</CardTitle>
              <ImageUpload /> */}

              {/* This renders a circle avatar upload - maybe we want this? */}
              <ImageUpload avatar />
            </FormGroup>
            <FormGroup>
              <Label for='profileName'>Name to display</Label>
              <Input
                type='text'
                name='profileName'
                value={input.profileName}
                onChange={changeInput}
              />
              <FormText color='muted'>
                This is the name other users will see you as on Cashless
              </FormText>
            </FormGroup>
            {/* Should e-mail be asked for here? */}
            {/* <FormGroup>
          <Label for='profileEmail'>E-mail</Label>
          <Input
            type='email'
            name='profileEmail'
            onChange={changeInput}
            placeholder='Your e-mail address so we can send your token'
          />
        </FormGroup> */}
            <Button disabled={loading} type='submit'>
              Sign Up
        </Button>
            {(error) && <p>Got error: {JSON.stringify(error)}</p>}
          </Form>
        </CardBody>
      </Card>

    </Container >
  );
};
export default SignupForm;
