import styled from "styled-components";


const white = '#F5F5F5';
const light = '#E0C9CB';
const tan = '#C3A1A0';
const pink = '#D9AAB7';
const rose = '#BA7E7E';
const dark = '#4E4E4E';


export const Container = styled.div`
    position: relative;
    margin: auto;
    overflow: hidden;
    width: 1040px;
    height: 700px;
    background: ${white};
    box-shadow: 5px 5px 15px ${rose};
    border-radius: 10px;
    
    p {
        font-size: 0.6em;
        color: ${rose};
        letter-spacing: 1px;
    }
      
    h1 {
        font-size: 1.2em;
        color: ${dark};
        margin-top: -5px;
    }
      
    h2 {
        color: ${tan};
        margin-top: -5px;
    }
      
    img {
        width: 290px;
        margin-top: 47px;
    }
      
      
    .product {
        position: absolute;
        width: 40%;
        height: 100%;
        top: 10%;
        left: 60%;
    }
      
    .desc {
        text-transform: none;
        letter-spacing: 0;
        margin-bottom: 17px;
        color: ${dark};
        font-size: .7em;
        line-height: 1.6em;
        margin-right: 25px;
        text-align: justify;
    }
      
    button {
        background: darken(${light}, 10%);
        padding: 10px;
        display: inline-block;
        outline: 0;
        border: 0;
        margin: -1px;
        border-radius: 2px;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: ${white};
        cursor: pointer;

        &:hover {
          background: ${rose};
          transition: all .4s ease-in-out;
        }
    }
      
    .add {
        width: 67%;
    }
      
    .like {
        width: 22%;
    }
      
    .sizes {
        display: grid;
        color: ${pink};
        grid-template-columns: repeat(auto-fill, 30px);
        width: 60%;
        grid-gap: 4px;
        margin-left: 20px;
        margin-top: 5px;

        &:hover {
          cursor: pointer;
        }
    }
      
    .pick {
        margin-top: 11px;
        margin-bottom:0;
        margin-left: 20px;
    }
      
    .size {
        padding: 9px;
        border: 1px solid ${light};
        font-size: 0.7em;
        text-align: center;

        &:hover{
          background: ${rose};
          color: ${white};
          transition: all .4s ease-in-out;
        }
    }
      
    .focus{
        background: ${rose};
        color: ${white};
    }
      
    footer {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: 0.8em;
        text-transform: uppercase;
        padding: 10px;

        p {
          letter-spacing: 3px;
        }

        a {
          color: #ffffff;
          text-decoration: none;

          &:hover {
            color: #7d7d7d;
          }
        }
    }
`;

export const Button = styled.div`
    
`;