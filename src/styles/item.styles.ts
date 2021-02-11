import styled from "styled-components";

export const ItemWrapper = styled.div`
    margin: 15px; 
    width: calc((100% / 3) - 30px);
    transition: all 0.2s ease-in-out;

    .card-content{
        width: 100%;
        padding: 30px;
        position: relative;
        cursor: pointer;
        
        background-color: #fff;
        color: gray;
        font-size: 1.5em;
        text-transform: uppercase;
        text-align: center;

        transition: all 0.2s ease-in-out;

        &:hover {
            transform: scale(1.05);
        }
    }
    
    

    #image-wrapper {
        display: grid;
        grid-template: 100% / 1fr;
        width: 100%;
        flex-grow: 2;
        justify-items: center;
        align-items: center;
    }

    img {
        width: 25%;
        height: auto;
    }

    .expander {
        transition: all 0.2s ease-in-out;
        background-color: #c6c6c6;
        width: 100%;
        position: relative;
        
        display: flex;
        justify-content: center;
        align-items: center;
        
        text-transform: uppercase;
        color: $light-gray;
        font-size: 1.5em;
    }

    &.is-collapsed {
    
        .card-content {
          &:after {
            content: "";
            opacity: 0;
          }
        }

        .expander {
          max-height: 0;
          min-height: 0;
          overflow: hidden;
          margin-top: 0;
          opacity: 0;
        }
    }

    &.is-expanded {

        .card-content {
            background-color: #ededed;

            &:after {
                content: "";
                opacity: 1;
                display: block;
                height: 0;
                width: 0;
                position: absolute;
                bottom: -30px;
                left: calc(50% - 15px);
                border-left: 15px solid transparent;
                border-right: 15px solid transparent;
                border-bottom: 15px solid #c6c6c6;
            }
        }

        .expander {
            max-height: 1000px;
            min-height: 200px;
            overflow: visible;
            margin-top: 30px;
            opacity: 1;
        }

        &:hover {
            .card-content {
              transform: scale(1);
            }
        }
    }
`;