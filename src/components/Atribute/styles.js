import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.span`
  font-size: 20px;
  margin-right: 8px;
`;

export const Ball = styled.div`
  width: 8px;
  height: 8px;
  border: 2px solid black;
  background-color: ${props => props.filled ? 'black' : 'white'};
  border-radius: 50%;
  cursor: pointer;
`;  