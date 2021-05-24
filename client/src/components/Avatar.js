import React, { useContext } from 'react';
import UserContext from 'providers/User';
import Identicon from 'react-identicons';

function Avatar({
  size = 35,
  round = true,
  marginTop = 0,
  marginRight = 0,
  id,
  src,
}) {
  const {
    user: {
      isAuthenticated,
      profile: { image, name },
      secret,
    }
  } = useContext(UserContext);
  const href = src || image;
  if (!isAuthenticated && !id)
    return (
      <i
        style={{ fontSize: size }}
        className="now-ui-icons users_circle-08"
      ></i>
    );
  if (id || (isAuthenticated && !href))
    return (
      <div
        className="avatar"
        style={{
          marginTop,
          marginRight,
          borderRadius: round ? '50%' : null,
          background: '#b4cffa',
          width: size + 10,
          height: size + 10,
          textAlign: 'center',
          zIndex: 2,
        }}
      >
        <Identicon size={size} string={secret.public || id} />
      </div>
    );
  else
    return (
      <img
        style={{ marginTop, marginRight, borderRadius: round ? '50%' : null }}
        alt={name}
        src={href}
        height={size}
        width={size}
      />
    );
}

export default Avatar;
