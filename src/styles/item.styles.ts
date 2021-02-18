import styled from "styled-components";

export const ItemWrapper = styled.div`
    margin: 15px; 
    width: calc((100% / 3) - 30px);
    transition: all 0.2s ease-in-out;

    #link {
        text-decoration: none;
    }
`;

export const ImageWrapper = styled.div`
    display: grid;
    grid-template: 100% / 1fr;
    width: 100%;
    flex-grow: 2;
    justify-items: center;
    align-items: center;

    img {
        width: 25%;
        height: auto;
    }
`;

export const CardContent = styled.div`
    width: 100%;
    padding: 30px;
    position: relative;
    cursor: pointer;

    border-radius: 10px;
    box-shadow: 5px 5px 15px #BA7E7E;
        
    background-color: #fff;
    color: gray;
    font-size: 1.5em;
    text-transform: uppercase;
    text-align: center;

    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;