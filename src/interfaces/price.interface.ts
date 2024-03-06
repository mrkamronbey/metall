export interface PricesType {
  name: string;
  id: string;
  kgPrice: string;
  tonnaPrice: string;
  subCategory: {
    id: string;
    name: string;
  };
}

export interface PriceDetails {
  id: string;
  kgPrice: string;
  name: string;
  tonnaPrice: string;
  image: {
    url: string;
  };
  subCategory: {
    id: string;
    name: string;
    category: {
      id: string;
      name: string;
    };
  };
}
