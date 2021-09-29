import styled from "styled-components";

export const Link = styled.div`
    display: flex;
    justify-content: space-evenly;
    max-width: 480px;

a {
  margin: 40px;
}
    
img {
    height: 10em;
}

p {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #FFFEF6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

  @media (min-width: 992px) {
    height: 2.2em;
  }


    
`;