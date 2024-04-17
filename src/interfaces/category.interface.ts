export interface CategoryType {
  map(arg0: (item: { slug: any; }) => string): unknown;
  id: string;
  name: string;
  slug: string;
  image: {
    url: string;
  };
  subCategories: {
    map(arg0: (item: any) => import("react").JSX.Element): any;
    id: string;
    name: string;
    prices: {
      id: string;
      name: string;
      kgPrice: string;
      tonnaPrice: string;
      slug: string;
      image: {
        url: string;
      };
    };
  };
}
