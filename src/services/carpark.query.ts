import { CarParkType } from "@/interfaces/carpark.interface";
import request, { gql } from "graphql-request"
import { API_URL } from "@/utils/api";

// const graphqlAPI = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT as string;

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
    const result = request<{carParks : CarParkType[]}>(API_URL, query)
    return (await result).carParks
  }
}
