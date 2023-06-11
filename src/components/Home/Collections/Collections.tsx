import React, { useCallback, useEffect, useState } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { Typography } from "../../Shared/UI/Typography";
import { CollectionCard } from "../CollectionCard";
import CollectionNav from "../CollectionNav/CollectionNav";
import { DefaultButton } from "../../Shared/UI/DefaultButton";

import { CategoryService } from "../../../services/category";
import { useAsync } from "../../../hooks/useAsync";
import { Product } from "../../../interfaces/product";

const Collections = () => {
  const [categoriesNames, setCategoriesName] = useState<string[] | undefined>();
  const [categoriesInfo, setCategoriesInfo] = useState<Product[]>();
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const {
    loading: getCategoriesNamesLoading,
    execute: getCategoriesNameExecute,
  } = useAsync(CategoryService.getAll);

  const {
    loading: getCategoriesInfoLoading,
    execute: getCategoriesInfoExecute,
  } = useAsync(CategoryService.getCategoriesInfo);

  const handleCategoryChange = useCallback((item: string) => {
    setSelectedCategory(item);
  }, []);

  const handleFindMoreClick = async () => {
    try {
      const data = await getCategoriesInfoExecute({
        category: selectedCategory || "electronics",
      });

      setCategoriesInfo([...(categoriesInfo || []), ...(data || [])]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!categoriesNames?.length) {
        return;
      }

      try {
        const data = await getCategoriesInfoExecute({
          category: selectedCategory ? selectedCategory : categoriesNames[0],
        });

        setCategoriesInfo(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [categoriesNames, getCategoriesInfoExecute, selectedCategory]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCategoriesNameExecute({});

        setCategoriesName(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [getCategoriesNameExecute]);

  return (
    <Container className="d-flex flex-column align-items-center py-5">
      <Typography
        fs="fs6"
        lineHeight={1.3}
        className="mb-5"
        fw="bold"
        textAlign="center"
      >
        Our Premium Collection
      </Typography>
      <CollectionNav
        data={categoriesNames}
        onTabChange={handleCategoryChange}
      />
      {categoriesInfo && (
        <Row>
          {categoriesInfo.map((item) => {
            return (
              <Col key={item.id} className="mb-3" md={6} lg={4} xl={3}>
                <CollectionCard data={item} />
              </Col>
            );
          })}
        </Row>
      )}

      <DefaultButton
        variant="primary"
        filled
        fs="fs3"
        padded="md"
        className="mt-5"
        onClick={handleFindMoreClick}
      >
        Find out More
      </DefaultButton>
    </Container>
  );
};

export default Collections;
