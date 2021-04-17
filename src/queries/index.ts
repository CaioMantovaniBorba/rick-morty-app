import { gql } from '@apollo/client';

// export const COUNT = gql`
//   query charactersCount {
//     characters {
//       info {
//         count
//       }
//     }
//     locations {
//       info {
//         count
//       }
//     }
//   }
// `;

export const INFO_CHARACTERS = gql`
  query infoCharacters($randomCharacters: [ID!]!) {
    charactersByIds(ids: $randomCharacters) {
      id
      name
      image
    }
  }
`;

export const INFO_LOCATIONS = gql`
  query infoLocations($randomLocations: [ID!]!) {
    locationsByIds(ids: $randomLocations) {
      id
      name
    }
  }
`;
