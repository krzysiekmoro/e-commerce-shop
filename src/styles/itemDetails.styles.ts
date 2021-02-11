import styled from "styled-components";

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    height: 100%;

    div {
        padding: 1rem;
        height: 20%;
    }

    img {
        height: 40%;
        width: 40%;
        align-self:center;
        padding-top: 20px;
    }

    form {
        display: flex;
        flex-direction: row;
    }

    select {
        display: block;
        font-weight: 700;
        color: #444;
        line-height: 1.3;
        padding: .6em 1.4em .5em .8em;
        width: 60%;
        max-width: 100%; /* useful when width is set to anything other than 100% */
        box-sizing: border-box;
        margin: 5%;
        border: 1px solid #aaa;
        box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
        appearance: none;
        background-color: #fff;
        background-repeat: no-repeat, repeat;
        background-position: right .7em top 50%, 0 0;
        background-size: .65em auto, 100%;
    }
`;

export const Button = styled.div`
    background: #BFC0C0;
    display: inline-flex;
    height: 40px;
    width: 150px;
    border: 2px solid #BFC0C0;
    margin: 20px 20px 20px 20px;
    color: #BFC0C0;
    text-transform: uppercase;
    text-decoration: none;
    font-size: .8em;
    font-weight: 700;
    letter-spacing: 1.5px;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    p {
        color: #ffffff;
        text-decoration: none;
        letter-spacing: 1px;
        position: relative;
        transition: all .45s ease-Out;
    }
    
    div {
        width: 100%;
        height: 2.5px;
        margin-top: 15px;
        align-self: flex-end;
        left: -200px;
        background: #fff;
        position: absolute;
        transition: all .3s ease-Out;
        bottom: 0;
    }

    p:hover {
        color: #BFC0C0;
    }
      
    &:hover div {
        left: 0;
    }
`;