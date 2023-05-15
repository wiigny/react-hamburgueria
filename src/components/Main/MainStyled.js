import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 40px;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  section {
    width: 77%;
  }
  section ul {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
  }
  section ul li {
    width: 100%;
    max-width: 300px;
    height: 346px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    transition: 0.3s ease;
  }
  section ul li:hover {
    transform: scale(1.1);
    border-color: #333333;
  }
  section ul li figure {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
  }
  section ul li figure img {
    width: 150px;
    height: 150px;
  }
  section ul li div {
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    justify-content: space-between;
    height: 100%;
  }
  section ul li div h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #333333;
  }
  section ul li div p {
    color: #27ae60;
    font-weight: 600;
    font-size: 0.875rem;
  }
  section ul li div button {
    background-color: #27ae60;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 11px 20px;
    width: fit-content;
    font-size: 0.875rem;
    font-weight: 600;
  }

  @media (max-width: 1640px) {
    section ul li {
      max-width: 250px;
    }
  }
  @media (max-width: 1040px) {
    section ul li {
      max-width: 100%;
    }
    aside {
      width: 400px;
    }
  }

  @media (max-width: 800px) {
    section {
      width: 100%;
      overflow-x: scroll;
      height: 400px;
      align-items: center;
      display: flex;
    }
    section ul {
      flex-wrap: nowrap;
    }
    section ul li {
      width: 300px;
    }
    aside {
      width: 100%;
    }
  }
`;
