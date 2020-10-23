import styled from 'styled-components';

// eslint-disable-next-line
export const ShowCharacterss = styled.div`
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;

  .img-wrapper {
    width: 200px;
  }
  .img-wrapper img {
    width: 100%;
    height: 300px;
  }
  button {
    background: #00ff5d;
    border: none;
    outline: none;
    padding: 10px 30px;
    margin-top: 15px;
    cursor: pointer;
  }
  button:hover {
    background: #18753a;
  }
`;
