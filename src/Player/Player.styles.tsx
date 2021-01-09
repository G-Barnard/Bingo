import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to right, #ff5e62, #ff9966);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 0 5rem;
`;

export const ResetSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  font-family: "Sue Ellen Francisco", cursive;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  margin-right: 10px;
  transition: opacity 0.2s ease;
  &:disabled {
    opacity: 0.2;
  }
`;

export const Count = styled.p`
  margin: 0;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.075);
  border-radius: 10px;
  color: white;
  padding: 0 20px;
  margin: 0 10px;
`;

export const Inner = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.p`
  font-size: 4rem;
  margin: 0;
  color: white;
`;

export const Grid = styled.section`
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  padding: 5px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
`;
