
import React from "react";
import { Paper } from "./Home.styled";
import TopItems from "./TopItems/TopItems";
import { BrandStory } from "./BrandStory";
import { Achievements } from "./Achievements";
import { ArticleInsights } from "./ArticleInsights";
import { Collections } from "./Collections";

const PremiumCollection = () => {

  return (
    <>
      <Paper>
        <Collections />
      </Paper>
      <TopItems />
      <Paper>
        <BrandStory />
        <Achievements />
        <ArticleInsights />
      </Paper>
    </>
  );
};

export default PremiumCollection;
