import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const INGREDIENT = gql`
  {
    ingredients {
      _id
      name
    }
  }
`;

const IngredientsSelectQuery = ({name, onChange, onBlur, value}) => {
  return (
    <div className="wrap-input100 validate-input m-b-16">
      <Query query={INGREDIENT}>
        {
          ({ loading, error, data}) => {
            if (loading) return <p>Loading..</p>
            if (error) return <p>Algo salio mal</p>

            return (
                 <select className="form-control select-grey" name={name} onChange={onChange} onBlur={onBlur} value={value}>
                  <option value=''>Select Ingredient</option>
                  {
                    data.ingredients.map((ingredientItem, index) => (
                      <option value={ingredientItem._id} key={index}>{ingredientItem.name}</option>
                    ))
                  }
                  </select>
            );
          }
        }
      </Query>
    </div>
  );
};

export default IngredientsSelectQuery;
