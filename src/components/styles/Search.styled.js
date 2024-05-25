import styled from "styled-components";

export const SearchDiv = styled.div`
  background-color: transparent;
  box-shadow: 6px 6px 3px #4876a6, -6px -6px 3px #84d6ff;
  width: fit-content;
  margin: 3rem;
  padding: 0.7rem 0.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
  input{
    width: 18rem;
    height: 2.5rem;
    padding: 0.7rem 0.5rem;
    background-color: transparent;
    outline: 0.1rem solid #304ffe;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    color: #fff;
    font-size: 1rem;
    &:focus{
        outline-style: dashed;
    }
  }
  select{
    padding: 0.7rem 0.5rem;
    margin-left: 0.1rem;
    background-color: transparent;
    color: #304ffe;
    outline: 0.1rem solid #304ffe;
    height: 2.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    &:hover{
        outline-style: dashed;
    }
  }
  .search-result{
    position: absolute;
    top: 60px;
    background-color: #222;
    text-align: center;
    width: 18rem;
    height: 25rem;
    border-radius: 0.3rem;
    overflow-y: scroll;
    border: 0.1rem solid #304ffe;
    padding: 1.2rem;
    li{
      display: flex;
      margin-bottom: 1rem;
      align-items: center;
      color: #fff;
      padding-bottom: 0.4rem;
      border-bottom: 0.1rem solid #304ffe;
      img{
        margin-right: 0.7rem;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
  ::-webkit-scrollbar{
    width: 0.7rem;
    background-color: transparent;
  }
`;
