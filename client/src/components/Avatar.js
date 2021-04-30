import React, { useContext } from 'react';
import UserContext from 'providers/User';
import Identicon from 'react-identicons';

function Avatar({ size = 35, round = true, marginTop = 0, marginRight = 0, id }) {
  const {
    user: {
      isAuthenticated,
      profile: { image, name },
      secret,
    },
    dispatch,
  } = useContext(UserContext);
  if (!isAuthenticated && !id)
    return (
      <i
        style={{ fontSize: size }}
        className="now-ui-icons users_circle-08"
      ></i>
    );
  if (id || (isAuthenticated && !image))
    return (
      <div className="avatar"
        style={{ marginTop, marginRight, borderRadius: round ? '50%' : null }}
      >
        <Identicon size={size} string={secret.public || id} />
      </div>
    );
  else
    return (
      <img
        style={{ marginTop, marginRight, borderRadius: round ? '50%' : null }}
        alt={name}
        src={image}
        height={size}
        width={size}
      />
    );
}

export default Avatar;
