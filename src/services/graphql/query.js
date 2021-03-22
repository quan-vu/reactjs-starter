import { useQuery, gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
    query getProducts{
        products{
            id
            name
            slug
            thumbnail
            description
            price
            inStock
        }
    }
`;
