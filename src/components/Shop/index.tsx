import React from "react";
import { Container, Stack } from "react-bootstrap";
import theme from "../../theme/theme";
import { SideNav } from "./SideNav";
import { Products } from "./Products";
import { useEffect, useState } from "react";
import { ProductService } from "../../services/products";
import { useAsync } from "../../hooks/useAsync";
import { Product } from "../../interfaces/product";
import { CategoryService } from "../../services/category";

const ProductsShop = () => {
  const [products, setProducts] = useState<Product[]>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const [searchQuery, setSearchQuery] = useState("");

  const { loading: getAllProductsLoading, execute: getAllProductsExecute } =
    useAsync(ProductService.getAll);

  const {
    loading: getProductsInCategoryLoading,
    execute: getProductsInCategory,
  } = useAsync(CategoryService.getCategoriesInfo);

  const handleCategoryChange = (category: string) => {
    fetchProductsInCategory(category);
  };

  const handleSortChange = async (sortOrder: string) => {
    try {
      const data = await getAllProductsExecute({ sort: sortOrder });

      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePriceRangeFilterChange = (min: number, max: number) => {
    if (products) {
      const filtered = products.filter(
        (product) => Number(product.price) > min && Number(product.price) < max
      );

      setFilteredProducts(filtered);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const fetchProductsInCategory = async (category: string) => {
    try {
      const data = await getProductsInCategory({
        category: category ? category : "electronics",
      });

      setProducts(data);
      setFilteredProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProductsExecute({});

        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [getAllProductsExecute]);

  useEffect(() => {
    if (products && searchQuery.trim() !== "") {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchQuery, products]);

  return (
    <Stack style={{ background: theme.palette.light }} className="py-5">
      <Container className="d-lg-flex align-items-start">
        <SideNav
          onCategoryChange={handleCategoryChange}
          onSortChange={handleSortChange}
          onPriceRangeFilter={handlePriceRangeFilterChange}
          onSearch={handleSearch}
        />
        <Products data={filteredProducts} />
      </Container>
    </Stack>
  );
};

export default ProductsShop;
