import React, { FC } from "react";
import { Container, Stack } from "react-bootstrap";
import {
  Heading,
  LongInput,
  Paper,
  Typography,
  ContentContainer,
  InputIconContainer,
} from "./NewLetter.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

const NewsLetter: FC = () => {
  return (
    <Paper>
      <Container className="bg-white py-5 px-2 d-flex justify-content-center mb-5">
        <ContentContainer>
          <Heading>Join Our News Letters</Heading>
          <Typography>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster{" "}
          </Typography>
          <Stack direction="horizontal">
            <LongInput
              placeholder="Insert your mail here"
              className="py-2 border-0 rounded"
            />
            <InputIconContainer className="px-2 py-1 rounded">
                <FontAwesomeIcon icon={faArrowCircleRight} color="white"/>
            </InputIconContainer>
          </Stack>
        </ContentContainer>
      </Container>
    </Paper>
  );
};

export default NewsLetter;
