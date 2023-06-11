import React, { FC, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "./CollectionNav.styled";

interface Props {
  data?: string[];
  onTabChange: (item: string) => void;
}

const CollectionNav: FC<Props> = ({ data, onTabChange }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (item: string, idx: number) => {
    setTabIndex(idx);

    if (onTabChange) {
      onTabChange(item);
    }
  };

  return (
    <Nav
      variant="tabs"
      className="pb-5 border-0 w-100 d-flex justify-content-evenly"
    >
      {data?.map((item: string, idx: number) => {
        return (
          <Nav.Item key={item} onClick={() => handleTabChange(item, idx)}>
            <NavLink
              className="text-decoration-none text-capitalize"
              isActive={idx === tabIndex}
              to="/"
            >
              {item}
            </NavLink>
          </Nav.Item>
        );
      })}
    </Nav>
  );
};

export default CollectionNav;
