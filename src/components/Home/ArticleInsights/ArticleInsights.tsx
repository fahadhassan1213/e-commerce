import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Typography } from "../../Shared/UI/Typography";
import { ArticleInsightsCard } from "../ArticleInsightsCard";

const ArticleInsights = () => {
  return (
    <Container className="pt-5">
      <Row className="justify-content-between mb-5">
        <Col md={6}>
          <Typography fs="fs6" lineHeight={1.3} className="mb-4" fw="bold">
            Get Better Insights from Our Articles
          </Typography>
        </Col>
        <Col xs={3} className="d-flex align-items-end justify-content-end">
          <Typography
            fs="fs3"
            lineHeight={1.3}
            className="mb-4"
            fw="bold"
            color="primary"
          >
            See more
          </Typography>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <ArticleInsightsCard />
        </Col>
        <Col md={6}>
          <ArticleInsightsCard />
        </Col>
        <Col md={6}>
          <ArticleInsightsCard />
        </Col>
        <Col md={6}>
          <ArticleInsightsCard />
        </Col>
      </Row>
    </Container>
  );
};

export default ArticleInsights;
