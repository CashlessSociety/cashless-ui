import React, { useState, useContext } from 'react';
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Media,
  Button,
} from 'reactstrap';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';

import UserContext from 'providers/User';

export const SIGNUP = gql`
  mutation($name: String!, $description: String, $image: FileInput) {
    signup(name: $name, description: $description, image: $image) {
      id
      secret {
        public
        private
        curve
      }
      profile {
        name
        description
        image {
          uri
        }
      }
    }
  }
`;

const SignupForm = () => {
  /* User context */
  const { dispatch } = useContext(UserContext);
  /* History */
  let history = useHistory();
  /* Input control */
  const [input, setInput] = useState({
    profileName: '',
    profileDescription: '',
    profileImage: null,
  });
  /* Image drop */
  const onDrop = (acceptedFiles) => {
    const { size } = acceptedFiles[0];
    setInput({
      ...input,
      profileImage: {
        file: acceptedFiles[0],
        size
      },
    });
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const changeInput = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  /* Signup */
  const [signup, { data, loading, error }] = useMutation(SIGNUP, {
    update(cache, { data }) {
      const cleanData = (toClean) =>
        Object.keys(toClean).reduce((p, k) => {
          if (k === 'image') return {
            ...p,
            image: toClean[k].uri
          }
          if (k !== '__typename') {
            return {
              ...p,
              [k]: toClean[k],
            };
          } else {
            return p;
          }
        }, {});
      dispatch({
        type: 'set_secret',
        value: { ...cleanData(data.signup.secret), id: data.signup.id },
      });
      dispatch({ type: 'set_profile', value: cleanData(data.signup.profile) });
    },
  });
  /* Submit form */
  const onSubmit = (e) => {
    e.preventDefault();
    const { profileName, profileDescription, profileImage } = input;
    signup({
      variables: {
        name: profileName,
        description: profileDescription,
        image: profileImage,
      },
    });
    if (data && !error) {
      history.push('/');
    }
  };
  return (
    <Container>
      <hr />
      <h1 className="mt-xl">Join Cashless</h1>
      <p>
        We're a community of people who can get things done without spending
        cash.
      </p>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label for="profileName">Name</Label>
          <Input
            type="text"
            name="profileName"
            value={input.profileName}
            onChange={changeInput}
            placeholder="The name you preffer being called"
          />
        </FormGroup>
        <FormGroup>
          <Label for="profileFile">Profile image</Label>
          <div>
            <Media
              object
              data-src="holder.js/64x64"
              alt="Generic placeholder image"
            />
          </div>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>

          {/* <Button>
            <Input onChange={changeInput} type="file" name="profileImage" />
          </Button> */}
          {/* <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText> */}
        </FormGroup>
        <FormGroup>
          <Label for="profileDescription">Description</Label>
          <Input
            type="text"
            name="profileDescription"
            placeholder="A short bio"
            onChange={changeInput}
          />
        </FormGroup>
        <Button disabled={loading} type="submit">
          Send
        </Button>
        {error && <p>Got error: {JSON.stringify(error)}</p>}
      </Form>
    </Container>
  );
};
export default SignupForm;
