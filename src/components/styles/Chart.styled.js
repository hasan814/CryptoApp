import styled from "styled-components";

export const ChartDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(0.2rem);
  .cross {
    display: inline-block;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: #d33636;
    color: #fff;
    width: 1.8rem;
    height: 1.8rem;
    line-height: 1.8rem;
    text-align: center;
    margin: 1.8rem 0 0 1.8rem;
    border-radius: 0.5rem;
    cursor: pointer;
  }
  .chart {
    width: 800px;
    margin: auto;
    padding: 1.2rem;
    margin-top: 3.2rem;
    background-color: #18181ce6;
    border: 0.1rem solid #404042;
    border-radius: 1.2rem;
  }
  .graph {
    width: 760px;
    height: 300px;
  }
  .name {
    display: flex;
    align-items: center;
    margin: 0 0.7rem 1.8rem;
    img {
      width: 2.5rem;
      height: 2.5rem;
      margin-right: 1.2rem;
    }
    p {
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
    }
  }
  .types {
    margin-top: 1.8rem;
    button {
      margin: 0.7rem;
      background-color: #18181ce6;
      color: #304ffe;
      border: 0.1rem solid #304ffe;
      border-radius: 0.5rem;
      font-size: 1rem;
      padding: 0.4rem 0.7rem;
      cursor: pointer;
    }
    .selected {
      background-color: #304ffe;
      color: #fff;
    }
  }

  .details {
    display: flex;
    justify-content: space-between;
    margin: 1.8rem 1.2rem 0;
    div{
        display: flex;
        font-size: 1.1rem;
    }
    p{
        color: #3874ff;
        margin-right: 0.5rem;
        font-weight: 700;
    }
    span{
        color: #fff;
    }
  }
`;
