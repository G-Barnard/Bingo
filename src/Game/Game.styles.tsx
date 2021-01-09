import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(to right, #00c4ff, #129cff);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0 0 5rem;
`;

export const BallSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  @media only screen and (min-width: 750px) {
    width: 50%;
  }
`;
export const SelectedSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  @media only screen and (min-width: 750px) {
    width: 50%;
  }
`;

export const Count = styled.p`
  margin: 0;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.2);
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
  width: 90vw;
`;

export const Title = styled.p`
  font-size: 2.25rem;
  margin: 0 20px 0 0;
  color: white;
  @media only screen and (min-width: 750px) {
    font-size: 4rem;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0px;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 30px;
  box-sizing: border-box;
  @media only screen and (min-width: 750px) {
    padding: 0 30px;
  }
`;

export const ButtonSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
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

export const LargeBall = styled.div`
  margin-top: 60px;
  background: blue;
  width: 300px;
  height: 300px;
  position: relative;
  background: -webkit-radial-gradient(
    40% 40%,
    #00c4ff 5%,
    #129cff 50%,
    #0c69b1 90%
  );
  border-radius: 50%;
  -webkit-transition: 3s;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 5rem;
`;
