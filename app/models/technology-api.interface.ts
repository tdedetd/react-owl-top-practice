export interface TechnologyApi {
  name: string;
  description: string;
  coursesCount: number;
  vacanciesCount: number;
  avgSalaries: {
    beginner: number;
    middle: number;
    professional: number;
  };
  features: {
    title: string;
    description: string;
  }[];
  skills: string[];
}
