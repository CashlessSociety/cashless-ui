import React, { useState, useContext, useCallback } from 'react';
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row
} from 'reactstrap';
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import Avatar from 'components/Avatar';
import ssbKeys from 'ssb-keys';
import Cropper from 'react-easy-crop';

import UserContext from 'providers/User';
import cropImage from 'libs/cropImage';

export const SIGNUP = gql`
  mutation(
    $name: String!
    $description: String
    $image: FileInput
    $keys: KeysInput
  ) {
    signup(name: $name, description: $description, image: $image, keys: $keys) {
      id
      keys {
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

const avatarSize = 120;
const tmpDir = 'tmp'

const SignupAvatar = ({ display, id}) => {
  if (display) return <Avatar size={avatarSize} id={id} />
  return <span />
}

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
  const [modal, setModal] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const onDrop = (acceptedFiles) => {
    setModal(true);
    setDisplayImage(URL.createObjectURL(acceptedFiles[0]));
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const changeInput = (e) => {
    const { value, name } = e.target;
    setInput({ ...input, [name]: value });
  };
  /* Generate SSB keys and store */
  let keys = ssbKeys.loadOrCreateSync(tmpDir)
  /* Signup */
  const [signup, { data, loading, error }] = useMutation(SIGNUP, {
    update(cache, { data }) {
      const cleanData = (toClean) =>
        Object.keys(toClean).reduce((p, k) => {
          if (k === 'image')
            return {
              ...p,
              image: toClean[k] ? toClean[k].uri : null,
            };
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
        value: { ...cleanData(data.signup.keys), id: data.signup.id },
      });
      dispatch({ type: 'set_profile', value: cleanData(data.signup.profile) });
      window.localStorage.removeItem(tmpDir)
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
        keys,
      },
    });
    if (data && !error) {
      history.push('/');
    }
  };
  const showCroppedImage = useCallback(async () => {
    try {
      const cropped = await cropImage(
        displayImage,
        croppedAreaPixels,
        rotation
      );
      setDisplayImage(cropped.url);
      function blob2file(theBlob, fileName) {
        return new File([theBlob], fileName, {
          lastModified: new Date().getTime(),
          type: theBlob.type || 'image/jpeg',
        });
      }

      const croppedFile = blob2file(cropped.file, input.profileImage);
      setInput({
        ...input,
        profileImage: {
          file: croppedFile,
          size: cropped.file.size,
        },
      });
      setModal(false);
    } catch (e) {
      console.error(e);
    }
  }, [croppedAreaPixels, displayImage, input, rotation]);
  return (
    <Container className="text-center mt-5 mb-5">
      <h1 className="mt-xl">Join Cashless</h1>
      <p>
        We're a community of people who can get things done without spending
        cash.
      </p>
      
      <Form onSubmit={onSubmit} className="col-lg-8 mt-5 mx-auto">
        <Card className="text-left">
          <CardBody>
            <CardTitle tag="h3">Create your Cashless profile</CardTitle>
            <Row className="mt-4">
              <Col sm={12} lg={4} className="text-center">
                <FormGroup>
                  <div>{input.profileImage && <img src={displayImage} alt="user profile" width={120} className="border rounded-circle"/>}</div>
                  <div {...getRootProps()}>
                    <input {...getInputProps()}/>
                    {isDragActive ? (
                      <>
                        <SignupAvatar display={!displayImage} id={keys.public} width={120} />
                        <p className="small mt-3 text-muted">Drop the files here ...</p>
                      </>
                    ) : (
                      <>
                        <SignupAvatar display={!displayImage} id={keys.public} width={120} />
                        <p className="small mt-3 text-muted">Drag 'n' drop some files here, or click to select files</p>
                      </>
                    )}
                  </div>
                </FormGroup>
              </Col>
              <Col sm={12} lg={8}>
                <FormGroup>
                  <Label for="profileName">Name to display</Label>
                  <Input
                    type="text"
                    name="profileName"
                    value={input.profileName}
                    onChange={changeInput}
                    placeholder=""
                  />
                </FormGroup>
                <FormGroup className="mt-3">
                  <Label for="profileDescription">Short bio</Label>
                  <Input
                    type="textarea"
                    rows="10"
                    name="profileDescription"
                    placeholder="Tell us a bit about yourself"
                    onChange={changeInput}
                  />
                </FormGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Button color="primary" className="btn-round" disabled={loading} type="submit">
          Sign Up
        </Button>
        {error && <p>Got error: {JSON.stringify(error)}</p>}
      </Form>
      <Modal isOpen={modal}>
        <ModalHeader style={{ paddingBottom: 15 }}>
          Ajust your image
        </ModalHeader>
        <ModalBody>
          <div style={{ height: 300 }}>
            <Cropper
              image={displayImage}
              crop={crop}
              zoom={zoom}
              aspect={1 / 1}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
              showGrid={false}
            />
          </div>
        </ModalBody>
        <ModalFooter style={{ paddingTop: 15 }}>
          <Button color="secondary" onClick={() => setModal(false)}>
            Cancel
          </Button>
          <Button color="primary" onClick={showCroppedImage}>
            Done
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </Container>
  );
};
export default SignupForm;
