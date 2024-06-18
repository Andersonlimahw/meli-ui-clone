
import { useEffect } from "react";
import { EActionType } from "../../../store/flux";
import { useStoreHook } from "../../../store/hooks/use-store";

import { useQuery } from "@tanstack/react-query";
import { MarketplaceDataModel } from "../../../models/meli";
import { MeliServiceDepartmentsApi } from "../../../services";


export const useHookSample = () => {
  const useStore = useStoreHook((state: any) => state);
  const _meliDepartmentServiceApi =  new MeliServiceDepartmentsApi();
  const {
    dispatch, 
    theme
  } = useStore;

  async function fetchDepartments() {
    return await _meliDepartmentServiceApi.getDepartments()
    .then((data : MarketplaceDataModel) => {
      return data as MarketplaceDataModel;
    }).catch((error) => console.error('subscribeSample : ', error));    
  };

  const departmentsQuery = useQuery({
    queryKey: ['departments'],
    queryFn: async () => {
      const data = await fetchDepartments();
      console.log('[departmentsQuery]: data => ', data);
      return data;
    },
  });

  return {
    departmentsQuery, 
    theme,
    dispatch
  }
}