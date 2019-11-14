import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import IngredientForm from './ingredientForm';

const ADD_INGREDIENT = gql`
  mutation addIngredientFunction($data: IngredientInput) {
    addIngredient(ingredientInfo: $data ) {
      name
    }
  }
`;

class IngredientRegister extends React.Component {
  render() {
    const {history} = this.props;
    return (
      <Mutation mutation={ADD_INGREDIENT}>
        {
          (addIngredient, { data, error, loading }) => {
            return <IngredientForm
              addIngredientMutation={addIngredient}
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

export default IngredientRegister;
