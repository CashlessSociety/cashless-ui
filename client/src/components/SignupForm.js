import React, { useState, useContext } from 'react';
import { Container, Form, FormGroup, FormText, Label, Input, Button } from 'reactstrap';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import UserContext from '../providers/User'

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

const SignupForm = () => {
  /* User context */
  const {dispatch} = useContext(UserContext);
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
      dispatch({ type: 'set_secret', value: cleanData })
    },
  });
  /* Submit form */
  const onSubmit = (e) => {
    e.preventDefault();
    const { profileName, profileDescription, profileEmail } = input;
    signup({ variables: { name: profileName, profile: profileDescription } });
    const newProfile = {
      name: profileName,
      description: profileDescription,
      email: profileEmail
    }
    dispatch({ type: 'set_profile', value: newProfile})
    if (data && !error) {
      history.push('/')
    }
  };
  return (
    <Container>
      <hr />
      <h1 className='mt-xl'>Join Cashless</h1>
      <p>
        We're a community of people who can get things done without spending
        cash.
      </p>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for='profileName'>Name</Label>
          <Input
            type='text'
            name='profileName'
            value={input.profileName}
            onChange={changeInput}
            placeholder='The name you preffer being called'
          />
        </FormGroup>
        <FormGroup>
          <Label for='profileFile'>Profile image</Label>
          <Button>
            <Input onChange={changeInput} type='file' name='profileImage' />
          </Button>
          <FormText color='muted'>
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for='profileDescription'>Description</Label>
          <Input
            type='text'
            name='profileDescription'
            placeholder='A short bio'
            onChange={changeInput}
          />
        </FormGroup>
        <Button disabled={loading } type='submit'>
          Send
        </Button>
        {(error) && <p>Got error: {JSON.stringify(error)}</p>}
      </Form>
    </Container>
  );
};
export default SignupForm;
