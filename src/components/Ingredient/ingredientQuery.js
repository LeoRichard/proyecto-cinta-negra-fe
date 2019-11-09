import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Ingredient from './ingredient';

const INGREDIENT = gql`
  {
    ingredients {
      name
    }
  }
`;

const IngredientsQuery = () => {
  return (
    <div className="mt-5 mb-5">
      <h2>Ingredient List</h2>
      <Query query={INGREDIENT}>
        {
          ({ loading, error, data}) => {
            if (loading) return <p>Loading..</p>
            if (error) return <p>Algo salio mal</p>

            return (
              <div className="container">
                <div className="row mt-4 mb-4 justify-content-center">
                  {
                    data.ingredients.map((ingredientItem, index) => (
                      <Ingredient key={index} name={ingredientItem.name} />
                    ))
                  }
                </div>
              </div>
            );
          }
        }
      </Query>
    </div>
  );
};

export default IngredientsQuery;
