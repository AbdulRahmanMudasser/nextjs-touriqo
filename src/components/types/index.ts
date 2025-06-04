export type Tour = {
    id: number;
    title: string;
    location: string;
    price: number;
    priceUnit: string;
    duration: string;
    maxPeople: number;
    rating: number;
    reviewCount: number;
    image: string;
    category: string;
    featured: boolean;
    description: string;
  };
  
  export type TourCategory = {
    id: string;
    name: string;
  };