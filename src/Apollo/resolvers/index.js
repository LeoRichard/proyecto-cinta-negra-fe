const resolvers = {
  Mutation: {
    setUserLogged: (parent, { logged }, { cache }) => {
      const userLogged = {
        __typename: 'loginState',
        userLogged: logged,
      };

      const data = { loginState: userLogged };
      cache.writeData({ data });
      return userLogged;
    }
  }
}

export default resolvers;
