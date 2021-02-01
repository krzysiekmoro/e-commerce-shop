import styled from "styled-components";

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid lightblue;
    border-radius: 20px;
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
        border-radius: .5em;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-color: #fff;
        background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
            linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
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