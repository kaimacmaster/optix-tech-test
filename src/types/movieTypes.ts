// src/types/movieTypes.ts

export interface MovieCompany {
  id: string;
  name: string;
}

export interface Movie {
  id: string;
  reviews: number[];
  title: string;
  filmCompanyId: string;
  cost: number;
  releaseYear: number;
}

export interface MovieWithCompany extends Movie {
  companyName?: string;
}

export type MovieCompaniesResponse = MovieCompany[];

export type MoviesResponse = Movie[];
