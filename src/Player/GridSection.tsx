import React from "react";
import styled from "styled-components";
import { State } from "./Player";
import STAR from "../assets/star-icon.png";

export const GridSection = ({
  gridItemState,
  setSelected,
}: {
  gridItemState: State;
  setSelected: () => void;
}) => {
  return gridItemState.number !== 99999 ? (
    <Section onClick={setSelected}>
      <InnerSection selected={gridItemState.selected}>
        {gridItemState.number}
      </InnerSection>
    </Section>
  ) : (
    <Section>
      <img src={STAR} alt="owl" />
    </Section>
  );
};

const Section = styled.section`
  font-size: 2.5rem;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  img {
    width: 40%;
    max-width: 50px;
    opacity: 0.1;
  }
`;

const InnerSection = styled.section<{ selected?: boolean }>`
  position: relative;
  font-size: 2.5rem;
  width: 100%;
  margin: 5px;
  color: white;
  background-color: ${(p) =>
    p.selected ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.2)"};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
`;
