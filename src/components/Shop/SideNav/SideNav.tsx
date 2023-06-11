import React, { FC, useCallback, useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { NavInput } from "./SideNav.styled";
import { PriceRangeFilter } from "../PriceRangeFilter";
import { Typography } from "../../Shared/UI/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowUpShortWide,
  faArrowUpWideShort,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { CategoryService } from "../../../services/category";
import { useAsync } from "../../../hooks/useAsync";
import { styled } from "styled-components";

interface Props {
  onCategoryChange: (category: string) => void;
  onSortChange: (sortOrder: string) => void;
  onPriceRangeFilter: (min: number, max: number) => void;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledStack = styled(Stack)`
  width: 25%;

  @media (max-width: 898px) {
    width: 100%;
  }
`;

const SideNav: FC<Props> = ({
  onCategoryChange,
  onSortChange,
  onPriceRangeFilter,
  onSearch,
}) => {
  const [categoriesNames, setCategoriesName] = useState<string[] | undefined>();
  const [selectedCategory, setSelectedCategory] = useState<string>();

  const [sortOrder, setSortOrder] = useState<string>("asc");

  const handleSortChange = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    if (onSortChange) {
      onSortChange(newSortOrder);
    }
  };

  const handleCategoryChange = useCallback(
    (item: string) => {
      setSelectedCategory(item);

      if (onCategoryChange) {
        onCategoryChange(item);
      }
    },
    [onCategoryChange]
  );

  const handlePriceRangeChange = (min: number, max: number) => {
    if (onPriceRangeFilter) {
      onPriceRangeFilter(min, max);
    }
  };

  const {
    loading: getCategoriesNamesLoading,
    execute: getCategoriesNameExecute,
  } = useAsync(CategoryService.getAll);

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
    <StyledStack className="px-3 d-block">
      <NavInput
        placeholder="Search products"
        className="py-2 mb-5"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onSearch(e)}
      />
      <Stack>
        <Stack
          direction="horizontal"
          className="justify-content-between mb-3 align-items-center"
        >
          <Typography className="mb-0" fs="fs4" fw="bold">
            Price Range
          </Typography>
          <FontAwesomeIcon icon={faFilter} />
        </Stack>
        <PriceRangeFilter min={0} max={100} onChange={handlePriceRangeChange} />
      </Stack>
      <Stack direction="horizontal" className="justify-content-between mb-3">
        <Typography className="mb-3" fs="fs4" fw="bold">
          Sort
        </Typography>
        {sortOrder === "asc" ? (
          <FontAwesomeIcon
            icon={faArrowUpShortWide}
            onClick={handleSortChange}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faArrowUpWideShort}
            onClick={handleSortChange}
            style={{ cursor: "pointer" }}
          />
        )}
      </Stack>

      <Stack>
        <Typography className="mb-3" fs="fs4" fw="bold">
          Product Categories
        </Typography>
        <Stack>
          {categoriesNames?.map((category) => {
            return (
              <Stack
                key={category}
                direction="horizontal"
                className="justify-content-between align-items-center"
                onClick={() => handleCategoryChange(category)}
                style={{ cursor: "pointer" }}
              >
                <Typography
                  fs="fs3"
                  color={category === selectedCategory ? "primary" : "black"}
                  fw={category === selectedCategory ? "medium" : "regular"}
                  textTransform="capitalize"
                  className="mb-3"
                >
                  {category}
                </Typography>
                <FontAwesomeIcon icon={faArrowRight} size="sm" />
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </StyledStack>
  );
};

export default SideNav;
