import React from "react";
import { Link } from "react-router-dom";
import { GridSection } from "./GridSection";
import {
  Container,
  Count,
  Grid,
  Inner,
  Button,
  ResetSection,
  Title,
} from "./Player.styles";

export interface State {
  id: number;
  number: number;
  selected: boolean;
}

export const Player = () => {
  const [state, setState] = React.useState<State[] | null>(null);

  const pickNumbers = () => {
    let selectedNumbers: number[] = [];
    while (selectedNumbers.length < 24) {
      const selectedNumber = Math.floor(Math.random() * 101);

      if (!selectedNumbers.includes(selectedNumber)) {
        selectedNumbers = [...selectedNumbers, selectedNumber];
      }
    }
    return selectedNumbers.sort((a: number, b: number) => a - b);
  };

  const generateState = (numbers: number[]): State[] =>
    addWildcard(numbers).map((number, index) => ({
      id: index,
      number: number,
      selected: false,
    }));

  const updateNumber = (item: State) => {
    console.log(item);
    if (state) {
      const newState = [
        ...state?.filter((stateItem) => stateItem.id !== item.id),
        { ...item, selected: !item.selected },
      ].sort((a: State, b: State) => a.id - b.id);

      setState(newState);
      updateLocalStorageState(newState);
    }
  };

  const updateLocalStorageState = (state: State[]) => {
    console.log(state);
    localStorage.setItem("bingoCurrentState", JSON.stringify(state));
  };

  const resetBoard = () => {
    localStorage.removeItem("bingoCurrentState");
    setUpBoard();
  };

  const addWildcard = (Array: number[]) => {
    const first = Array.slice(0, 12);
    const second = Array.slice(12);
    return [...first, 99999, ...second];
  };

  const setUpBoard = () => {
    const numbers = pickNumbers();
    const state = generateState(numbers);
    setState(state);
    updateLocalStorageState(state);
  };

  React.useEffect(() => {
    const stored = localStorage.getItem("bingoCurrentState");
    console.log("stored : ", stored);
    if (stored) {
      return setState(JSON.parse(stored));
    }
    if (!state) {
      setUpBoard();
    }
  }, []);

  return (
    <Container className="App">
      <Inner>
        <Title>Barnard Bingo</Title>
        <ResetSection>
          <Button onClick={() => resetBoard()}>Reset</Button>{" "}
          <Link to="game">
            <Button>Link to game</Button>{" "}
          </Link>
          <Count>
            {state?.filter((item) => item.selected === true).length}/25 Selected
          </Count>
        </ResetSection>
        <Grid>
          {state?.map((state: State) => (
            <GridSection
              gridItemState={state}
              setSelected={() => updateNumber(state)}
            />
          ))}
        </Grid>
      </Inner>
    </Container>
  );
};
