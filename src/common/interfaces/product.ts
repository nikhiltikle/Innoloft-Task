import { Company } from './company';
import { User } from './user';

export interface Product {
  id: number;
  name: string;
  description: string;
  picture: string;
  type: {
    id: number;
    name: string;
  };
  categories: {
    id: number;
    name: string;
  }[];
  implementationEffortText: string | null;
  investmentEffort: string;
  trl: {
    id: number;
    name: string;
  };
  video: string;
  user: User;
  company: Company;
  businessModels: {
    id: number;
    name: string;
  }[];
}
