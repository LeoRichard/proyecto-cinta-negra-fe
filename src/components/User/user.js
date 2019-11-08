import React from 'react';

const User = ({name, email, isActive}) => {

  var active = "";
  if(isActive === true) {
     active = "Yes"
  } else {
     active = "No"
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{active}</td>
    </tr>
  );
};

export default User;
