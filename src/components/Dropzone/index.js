import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

function MyDropzone({ onDropCallback }) {
  const onDrop = useCallback(acceptedFiles => {
    onDropCallback(acceptedFiles);
    // Do something with the files
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
    </div>
  )
}

export default MyDropzone;
