import { Categories } from "@/interfaces/category";
import { BaseService, errorHandler } from "./base";
import { ProductsResponse } from "../interfaces/product";

export const CategoryService = {
  getAll: async () => {
    try {
      const response: Categories = await BaseService.get(
        "/products/categories"
      );
      return response.data;
    } catch (err) {
      errorHandler(err);
    }
  },

  getCategoriesInfo: async (param: { category: string }) => {
    try {
      const response: ProductsResponse = await BaseService.get(
        `/products/category/${param.category}`
      );
      return response.data;
    } catch (err) {
      errorHandler(err);
    }
  },
};
