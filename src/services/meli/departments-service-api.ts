 
import BaseService from "../base";
import { DEPARTMENTS_ROUTE } from "../../commons/utils/requests";
import { MarketplaceDataModel } from "../../models/meli";
  
  // Méthods:
  export class MeliServiceDepartmentsApi extends BaseService<MarketplaceDataModel> {
  
    public async getDepartments(): Promise<MarketplaceDataModel> {
      return await this.GetAsync({
        endpoint: DEPARTMENTS_ROUTE,
      }).then((data: MarketplaceDataModel) => {
        return data;      
      });
    }
  }
  