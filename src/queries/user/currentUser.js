import gql from "graphql-tag";

export default gql`
  query currentUser {
    currentUser {
      id
      name
      surname
      email
      coins
    }
  }
`;
