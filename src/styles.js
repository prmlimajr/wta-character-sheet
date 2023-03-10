import styled from "styled-components";


export const Container = styled.div`
  /* width: 1200px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 48px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

export const Atributes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AtributeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AtributeTitle = styled.h3`
  font-size: 22px;
  margin: 0;
  align-self: center;
`