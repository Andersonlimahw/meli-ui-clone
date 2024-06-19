import { createServer, Response, Model } from "miragejs";

import peopleMock from "../api/swapi/people.json";

import departmentsMock from "../api/meli/departments.json";
import badgeMock from "../api/meli/badge.json";

import { PEOPLE_BY_ID_ROUTE, PEOPLE_ROUTE } from "../../commons/utils/requests";


createServer({

  routes() {
    // this.namespace = import.meta.env.VITE_API_NAME_SPACE;
    this.timing = 250;
    this.logging = true;

    const headers = {};

    // If your API requests go to an external domain, pass those through by
    // specifying the fully qualified domain name
    this.passthrough("http://api.acme.com/**");


    // Meli:
    this.get('/departments', (schema, request) => {
      const { queryParams } = request;
      let data = departmentsMock;
      if(queryParams && queryParams.zipCode) {
        data = { 
          ...data,
          departments: departmentsMock.departments.filter((x) => x.name.toLowerCase() === 'tecnologia')
        };
      }
      
      return new Response(200, headers, data);
    });

    this.get('/badge', (schema, request) => {
      const data = badgeMock;
      return new Response(200, headers, data);
    })
  },
});

export default function () { return createServer }
