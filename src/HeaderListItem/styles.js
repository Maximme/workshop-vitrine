import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    list-style: none;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    margin: auto;

a {
    color: #FFFEF5;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
}

li {
    margin: 0 2em;
}

li:hover {
    border-bottom: 0.2em solid #FFCD08;
}

li:last-child a{
    font-weight: 700;
}

img {
    max-height: 2em;
}
`;
