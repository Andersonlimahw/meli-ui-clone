export interface CategoryModel {
  id: string;
  name: string;
  permalink: string;
  children_categories: CategoryModel[];
}

export interface DepartmentModel {
  name: string;
  categories: CategoryModel[];
}

export interface LandingModel {
  label: string;
  permalink: string;
}

export interface MarketplaceDataModel {
  departments: DepartmentModel[];
  landings: LandingModel[];
  more_categories: LandingModel[];
  high_priority: LandingModel[];
}