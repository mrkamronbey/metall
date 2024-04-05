import { PriceDetails, PricesType } from "@/interfaces/price.interface";
import { request, gql } from "graphql-request";
import { API_URL } from "@/utils/api";

// const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const PricesQuery = {
  async getAllPrices() {
    const query = gql`
      query Prices {
        prices {
          name
          id
          kgPrice
          tonnaPrice
          subCategory {
            id
            name
          }
        }
      }
    `;

    const result = await request<{ prices: PricesType[] }>(API_URL, query);
    return result.prices;
  },
  async getTenPrice() {
    const query = gql`
      query PriceTen {
        prices(first: 10) {
          name
          id
          kgPrice
          tonnaPrice
          subCategory {
            id
            name
          }
        }
      }
    `;
    const result = await request<{ prices: PricesType[] }>(API_URL, query);
    return result.prices;
  },

  async getPriceDetails(slug: string) {
    const query = gql`
      query PriceDetails($slug: String!) {
        pricess(where: { slug: $slug }) {
          id
          kgPrice
          name
          tonnaPrice
          image {
            url
          }
          subCategory {
            id
            name
            category {
              id
              name
            }
          }
        }
      }
    `;
  
    const variables = { slug }; // Define the variable here
  
    const result = await request<{ pricess: PriceDetails }>(
      API_URL,
      query,
      variables // Pass the variables when making the request
    );
  
    return result.pricess;
  }
  
};
