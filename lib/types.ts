export interface Dog {
  id: string;
  name: string;
  age: string;
  breed: string;
  sex: "Macho" | "Hembra";
  size: "Pequeño" | "Mediano" | "Grande";
  weight: string;
  description: string;
  personality: string[];
  image: string;
  vaccinated: boolean;
  sterilized: boolean;
  dewormed: boolean;
}
