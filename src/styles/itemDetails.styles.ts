import styled from "styled-components";


const white = '#fff';
// const light = '#E0C9CB';
const tan = '#C3A1A0';
const pink = '#D9AAB7';
const rose = '#BA7E7E';
const dark = '#4E4E4E';


export const Container = styled.div`
    position: relative;
    margin: auto;
    margin-top: 20px;
    overflow: hidden;
    width: 1040px;
    height: 700px;
    background: ${white};
    box-shadow: 5px 5px 15px ${rose};
    border-radius: 10px;
    display: flex;
    flex-flow: row wrap;
    
    .images{
        width: 50%;

        img {
            width: 290px;
            margin: 47px auto 0px auto;
        }
    }
  
    .product {
        margin: 5%;
        width: 40%;

        p {
            font-size: 0.9em;
            color: ${rose};
            letter-spacing: 1px;
        }
          
        h1 {
            font-size: 1.5em;
            color: ${dark};
            margin-top: -5px;
        }
          
        h2 {
            color: ${tan};
            margin-top: -5px;
        }

        .desc {
            text-transform: none;
            letter-spacing: 0;
            margin-bottom: 17px;
            color: ${dark};
            font-size: 1em;
            line-height: 1.6em;
            margin-right: 25px;
            text-align: justify;
        }

        .buttons {
            width: 100%;

            .add {
                width: 40%;
                text-align: center;
            }

            .like {
                width: 15%;
                margin-left: 15px;
                text-align: center;
            }
        }
    }

    form {
        width: 100%;
        display: flex;
        flex-direction: column;

        select {
            width: 37%;
            border: ${rose};
            border-radius: 2px;
            padding: 2px;
        }

        .pick {
            margin-top: 11px;
            text-transform: uppercase;
            color: ${rose};
        }
    }
      
    .focus{
        background: ${rose};
        color: ${white};
    }
`;

export const Button = styled.div`
    background: ${pink};
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
`;