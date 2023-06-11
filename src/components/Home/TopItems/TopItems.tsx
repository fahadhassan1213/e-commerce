import React from "react";
import "react-multi-carousel/lib/styles.css";
import { Paper } from "./TopItems.styled";
import { Stack } from "react-bootstrap";
import { Typography } from "../../Shared/UI/Typography";
import MultiCarousel from "../MultiCarousel/MultiCarousel";
import { TopItemsCard } from "../TopItemsCard";

const TopItems = () => {
  return (
    <Paper className="py-5">
      <Stack>
        <Typography fs="fs6" lineHeight={1.3} className="mb-4" fw="bold" textAlign="center"> 
          Top Items
        </Typography>
        <Typography color="darkGrey" fs="fs3" lineHeight={1.3} className="mb-5" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Stack>
      <MultiCarousel fullWidth>
        <TopItemsCard />
        <TopItemsCard />
        <TopItemsCard />
        <TopItemsCard />
        <TopItemsCard />
        <TopItemsCard />
      </MultiCarousel>
    </Paper>
  );
};

export default TopItems;
