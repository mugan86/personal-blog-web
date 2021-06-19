import { gql } from '@apollo/client';

export const SEND_CONTACT = gql`
  mutation addContactMsg($message: ContactInput!) {
    sendContactMessage(message: $message) {
      status
      message
      item {
        ... on Contact {
          name
          email
          message
          subject
        }
      }
    }
  }
`;
