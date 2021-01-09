import React from "react";
import styled from "styled-components";

export const SelectedBall = ({ number }: { number: number }) => {
  return (
    <Section className="animate__animated animate__bounceInDown">
      <InnerSection>{number}</InnerSection>
    </Section>
  );
};

const Section = styled.section`
  font-size: 2.5rem;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerSection = styled.section`
  font-size: 2.5rem;
  width: 100%;
  margin: 5px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
`;
