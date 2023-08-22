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
  trl: TechnologyReadinessLevel;
  video: string;
  user: User;
  company: Company;
  businessModels: {
    id: number;
    name: string;
  }[];
}

export interface TechnologyReadinessLevel {
  id: number;
  name: string;
  description?: string | null;
}
