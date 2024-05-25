import styled from "styled-components";

export const PaginationDiv = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  margin-bottom: 100px;

  button {
    width: 5rem;
    background-color: #304ffe;
    color: #fff;
    text-transform: capitalize;
    padding: 0.5rem 0.7rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
  }
  p {
    display: block;
    border: 0.1rem solid #304ffe;
    width: 1.4rem;
    text-align: center;
    border-radius: 0.3rem;
  }
  .disabled {
    opacity: 0.3;
  }
  .selected{
    background-color: #304ffe;
    color: #fff;
  }
`;
