import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: #5d04d9;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 16px;
  border: 4px solid black;
  width: 180px;
  height: 200px;
  margin: 16px;
  overflow: hidden;
`;

export const CardImage = styled.img`
  border: 4px solid black;
  min-width: 130px;
  min-height: 130px;
  max-width: 130px;
  max-height: 130px;
  object-fit: contain;
`;

export const CardInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
