import React from 'react';
import { useParams } from "react-router-dom";
import SingleRecetaQuery from './singleRecetaViewQuery';

function SingleRecetaViewSection() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div className="container">
      <SingleRecetaQuery id={id} />
    </div>
  );
}

export default SingleRecetaViewSection;
