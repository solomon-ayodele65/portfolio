import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import resume from '../../assets/resume/resume.pdf'


export const Resume = () => {
  return (
    <HelmetProvider>
      <Container className="Resume-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Resume </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="w-100" style={{width: "100%"}}>
          <iframe
            title="solohCode resume"
            src={"https://solohcode.netlify.app/resources/Resume-Solomon-Ayodele.pdf" || resume}
            style={{width: "100%", height: "100vh"}}
          />
        </div>
      </Container>
    </HelmetProvider>
  );
};
