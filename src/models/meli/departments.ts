export interface CategoryModel {
  id: string;
  name: string;
  permalink: string;
  children_categories?: CategoryModel[];
}

export interface DepartmentModel {
  name: string;
  categories: CategoryModel[];
}

export interface Landing {
  label: string;
  permalink: string;
}

export interface MarketplaceDataModel {
  departments: DepartmentModel[];
  landings: Landing[];
  more_categories: Landing[];
  high_priority: Landing[];
}