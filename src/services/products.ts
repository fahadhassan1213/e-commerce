import { BaseService, errorHandler } from "./base";
import { ProductsResponse } from "../interfaces/product";

export const ProductService = {
  getAll: async (params: { sort?: string }) => {
    try {
      const response: ProductsResponse = await BaseService.get(
        `/products?sort=${params.sort ? params.sort : "asc"}`
      );
      return response.data;
    } catch (err) {
      errorHandler(err);
    }
  },
};
