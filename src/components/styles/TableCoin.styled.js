import styled from "styled-components";

export const TableCoinDIv = styled.div`
  border-radius: 0.5rem;
  background: transparent;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: center;
  margin: 3rem 0 6rem;
  box-shadow: 6px 6px 3px #4876a6, -6px -6px 3px #84d6ff;
  .table {
    width: 100%;
    border-collapse: collapse;
    thead {
      border-bottom: 0.1rem solid #304ffe;
      margin: 1.2rem 0;
    }
    th {
      height: 4rem;
      text-align: left;
      padding: 0.7rem 0;
    }
    tbody tr {
      height: 4rem;
      border-bottom: 0.1rem solid #fff;
      font-weight: 600;
      font-size: 1.1rem;
    }
  }
  .price-td{
    display: flex;
    align-items: center;
    height: 3.5rem;
  }
  .symbol {
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.7rem;
    }
    span {
      font-weight: 600;
      font-size: 1.2rem;
      color: #4876a6;
    }
  }
  .success {
    color: #57bc7c;
  }
  .error {
    color: #d33636;
  }
  @media (max-width: 600px) {
    .table {
      display: block;
      overflow-x: scroll;
      td,
      th {
        padding: 0 0.7rem;
      }
    }
  }
`;
