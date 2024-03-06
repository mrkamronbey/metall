import { CarParkType } from "@/interfaces/carpark.interface";
import request, { gql } from "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

export const CarParkQuery = {
  async getCars() {
    const query = gql`
    query CarParkQuery {
      carParks {
        id
        name
        description {
          text
        }
        image {
          url
        }
      }
    }`;
    const result = request<{carParks : CarParkType[]}>(graphqlAPI, query)
    return (await result).carParks
  }
}
