import styled from "styled-components";

export const AsideStyled = styled.aside`
  position: relative;
  background-color: #f5f5f5;
  overflow: hidden;
  overflow-y: auto;
  border-radius: 8px;
  width: 300px;
  height: 100%;
  max-height: 465px;

  > h2 {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    font-size: 1.125rem;
    background-color: #27ae60;
    color: #fff;
    padding: 1.375rem 1.25rem;
    margin-bottom: 1rem;
  }

  #emptyCart {
    padding: 4rem 0;
    text-align: center;
  }
  #emptyCart h3 {
    font-size: 1.125rem;
    font-weight: 700;
    color: #333333;
  }
  #emptyCart p {
    font-size: 0.875rem;
    font-weight: 400;
    color: #828282;
  }

  #listCart {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  #listCart li {
    height: 80px;
    width: 100%;
    display: flex;
    border-radius: 8px;
    overflow: hidden;
    justify-content: space-between;
    padding: 0 10px;
  }
  #listCart li > div {
    display: flex;
    gap: 0.625rem;
  }
  #listCart li > div div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.625rem;
  }
  #listCart li figure {
    width: 80px;
    height: 100%;
    background-color: #e0e0e0;
    border-radius: 8px;
  }
  #listCart li figure img {
    width: 100%;
  }
  #listCart li h2 {
    font-size: 0.875rem;
    color: #333333;
  }
  #listCart li span {
    font-size: 0.75rem;
    color: #828282;
  }
  #listCart li button {
    cursor: pointer;
    border: none;
    height: fit-content;
    margin: 0.75rem 0 0 0;
    background-color: transparent;
    color: #bdbdbd;
    font-size: 0.75rem;
    font-weight: 500;
    transition: 0.3s ease;
  }
  #listCart li button:hover {
    color: #333333;
    text-decoration: underline;
  }

  #totalPrice {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 2px solid #e0e0e0;
    background-color: #f5f5f5;
    margin-top: 1rem;
    padding: 1rem;
  }
  #totalPrice div {
    display: flex;
    justify-content: space-between;
  }
  #totalPrice div p,
  #totalPrice div span {
    font-size: 0.875rem;
    font-weight: 600;
    color: #333333;
  }
  #totalPrice div span {
    color: #828282;
  }
  #totalPrice button {
    cursor: pointer;
    width: 100%;
    border: none;
    border-radius: 8px;
    background-color: #e0e0e0;
    color: #828282;
    margin-top: 1rem;
    padding: 20px 0;
  }
`;
