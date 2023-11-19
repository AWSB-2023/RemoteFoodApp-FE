export interface IDish {
  id: number;
  name: string;
  rating: number;
  time: number;
  img: string;
  ingredients?: string[];
  method?: string[];
}
