import React from "react";
import { Section, Title, Container } from "./styles";

interface IProps {
  title: string;
}

const MoviesSection: React.FC<IProps> = ({ children, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Container>{children}</Container>
    </Section>
  );
};
export default MoviesSection;
