import { CategoryType } from "@/interfaces/category.interface";
import { request, gql } from "graphql-request";
import { API_URL } from "@/utils/api";

// const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const CategoryQuery = {
  async getAllCategory() {
    const query = gql`
      query GetCategories {
        categories {
          id
          name
          slug
          image {
            url
          }
          subCategories {
            id
            name
            prices(first: 1000) {
              id
              name
              kgPrice
              tonnaPrice
              slug
              image {
                url
              }
            }
          }
        }
      }
    `;

    const result = await request<{ categories: CategoryType[] }>(
      API_URL,
      query
    );
    return result.categories;
  },

  async getDetailCategory(slug: string) {
    const query = gql`
      query CategoryDetail($slug: String!){
        categories(where: { slug: $slug }) {
          id
          name
          slug
          image {
            url
          }
          subCategories {
            id
            name
            prices(first: 1000) {
              id
              name
              slug
              tonnaPrice
              kgPrice
              image {
                url
              }
            }
          }
        }
      }
    `;
    const variables = { slug };
    const result = await request<{ categories: CategoryType[]; }>(API_URL, query, variables);
    return result.categories;
  },
};
