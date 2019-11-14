import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import RecetaForm from './recetaForm';

const ADD_RECETA = gql`
  mutation addRecetaFunction($data: RecetaInput, $ingredientID: String) {
    addReceta(recetaInfo: $data, ingredientID: $ingredientID ) {
      _id
      name
      difficulty
      content
    }
  }
`;

class RecetaRegister extends React.Component {
  render() {
    const {history} = this.props;
    return (
      <Mutation mutation={ADD_RECETA}>
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
