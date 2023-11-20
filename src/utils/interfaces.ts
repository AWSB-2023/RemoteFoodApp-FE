export interface IDish {
  id: number;
  name: string;
  rating: number;
  time: number;
  img: string;
  country: string;
  ingredients?: string[];
  method?: string[];
}
