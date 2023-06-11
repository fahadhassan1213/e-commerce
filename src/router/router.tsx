
import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import { MainLayout } from "../components/Layout/MainLayout";

const routes = [
  {
    path: "/",
    component: Home,
    head: "Your Premium Sound, Unplugged!",
    exact: true,
  },
  {
    path: "/shop",
    component: Shop,
    head: "Home Shopping, Your Choice!",
    exact: true,
  },
];

const createRoutes = () => {
  return routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        Component={() => (
          <MainLayout heroContent={route.head}>
            <route.component />
          </MainLayout>
        )}
      />
    );
  });
};

export { createRoutes };
