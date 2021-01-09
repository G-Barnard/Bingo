import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Player/Player.styles";
import {
  BallSection,
  Container,
  Inner,
  LargeBall,
  SelectedSection,
  Title,
  ButtonSection,
  TitleSection,
} from "./Game.styles";
import { SelectedBall } from "./SelectedBall";

export const Game = () => {
  const [currentSelectedValue, setCurrentSelectedValue] = React.useState<
    number | null
  >(null);
  const [startingArray, setStartingArray] = React.useState<number[]>(
    Array.from(Array(100).keys())
  );
  const [selectedArray, setSelectedArray] = React.useState<number[]>([]);

  const setLocalStorage = ({
    startingArray,
    selectedArray,
  }: {
    startingArray: number[];
    selectedArray: number[];
  }) => {
    const arrays = {
      startingArray,
      selectedArray,
    };
    localStorage.setItem("bingoCurrentBoardState", JSON.stringify(arrays));
  };

  React.useEffect(() => {
    const stored = localStorage.getItem("bingoCurrentBoardState");
    console.log("stored : ", stored);
    if (stored) {
      const parsedArrays = JSON.parse(stored);
      setStartingArray(parsedArrays.startingArray);
      setSelectedArray(parsedArrays.selectedArray);
    }
  }, []);

  const resetBoard = () => {
    localStorage.removeItem("bingoCurrentBoardState");
    setStartingArray(Array.from(Array(100).keys()));
    setSelectedArray([]);
  };

  const selectBall = () => {
    const randomNumber =
      startingArray[Math.floor(Math.random() * startingArray.length)];
    setCurrentSelectedValue(randomNumber);
    setTimeout(() => {
      setCurrentSelectedValue(null);
      const newSelectedArray = [...selectedArray, randomNumber];
      setSelectedArray(newSelectedArray);
      const newStartingArray = startingArray.filter(
        (number) => number !== randomNumber
      );
      setStartingArray(newStartingArray);
      setLocalStorage({
        selectedArray: newSelectedArray,
        startingArray: newStartingArray,
      });
    }, 5000);
  };

  return (
    <Container>
      <TitleSection>
        <Title>Barnard Bingo</Title>
        <div>
          <Button onClick={resetBoard}>Reset</Button>
          <Link to="/">
            <Button onClick={resetBoard}>To board</Button>
          </Link>
        </div>
      </TitleSection>
      <Inner>
        <BallSection>
          {currentSelectedValue && (
            <LargeBall className="animate__animated animate__bounceInDown">
              {currentSelectedValue}
            </LargeBall>
          )}
          <ButtonSection>
            <Button
              disabled={currentSelectedValue !== null}
              onClick={selectBall}
            >
              Select Ball
            </Button>
          </ButtonSection>
        </BallSection>
        <SelectedSection>
          {selectedArray.map((number) => (
            <SelectedBall number={number} />
          ))}
        </SelectedSection>
      </Inner>
    </Container>
  );
};
