import styled from 'styled-components';

export const Container = styled.div``;

export const ContainerTable = styled.div`
  width: 80%;
  margin: 0 auto;

  padding-bottom: 72px;
  overflow-x: hidden;

  @media (max-width: 850px) {
    width: 100%;
    margin: 0 auto;
  }

  @media (max-width: 458px) {
    min-width: 600px;
    margin: 0 auto;
  }
`;

export const ProductTable = styled.table`
  margin-top: 200px;
  width: 100%;

  thead th {
    color: #868686;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    width: 310px;
    padding: 7px 0 7px 0;
    border-bottom: 1px solid #d3d3d3;
  }

  img {
    margin: 16px 20px 0 20px;
    height: 100px;
  }

  strong {
    color: #868686;
    display: block;

    @media (max-width: 650px) {
      font-size: 13px;
    }
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #6a6a6a;
  }

  div {
    display: flex;
    align-items: center;

    p {
      background: transparent;
      border: none;
      color: #b0b0b0;
      font-weight: 600;
      padding: 6px 0 0 60px;
      width: 20px;
      font-size: 12px;
    }
  }
`;
