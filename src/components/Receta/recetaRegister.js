import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import RecetaForm from './recetaForm';

const RECETAS = gql`
query {
    getAllRecetas {
      _id
     name
     difficulty
     content
     author {
       name
       profileImage
     }
     featuredImage
    }
  }
`;

const ADD_RECETA = gql`
  mutation addRecetaFunction($data: RecetaInput, $ingredientID: String) {
    addReceta(recetaInfo: $data, ingredientID: $ingredientID ) {
      _id
      name
      difficulty
      content
      featuredImage
    }
  }
`;

class RecetaRegister extends React.Component {
  render() {
    const {history} = this.props;
    return (
      <Mutation mutation={ADD_RECETA} update={(store, {data: { addReceta } }) => {
          console.log(addReceta);
          const variables = {};
          const data = store.readQuery({ query: RECETAS, variables });
          console.log("TCL: RecetaRegister -> render -> data", data)
          data.getAllRecetas.unshift(addReceta);
          store.writeQuery({ query: RECETAS, variables, data });
       }}>
        {
          (addReceta, { data, error, loading }) => {
            return <RecetaForm
              addRecetaMutation={addReceta}
              loading={loading}
              error={error}
              history={history}
            />
          }
        }
      </Mutation>
    )
  }
}

export default RecetaRegister;
