import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 5rem;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 600px) {
    height: 7.5rem;
  }
`;
export const DivHeader = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;

    form {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const FormStyle = styled.form`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 0.625rem;
  display: flex;
  gap: 20px;

  input::placeholder {
    font-weight: 400;
    color: #e0e0e0;
  }
  input {
    border: none;
    width: 100%;
  }
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  button {
    background-color: #27ae60;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 15px 20px;
  }
`;
