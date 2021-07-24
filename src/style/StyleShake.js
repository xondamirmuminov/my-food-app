import styled from 'styled-components';
import colors from './colors';
const { dark, red, gray } = colors;

let Main = styled.main`
    
`

let Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;

    .header__inner {
        display: flex;
        align-items: center;
        width: 100%;
        padding-top: 30px;
    }
    .header__list-all {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100px;
        margin: 0;
        padding: 0;
    }
    .header__list-all-item {
        list-style: none;
    }
    .header__list-all-link {
        background: ${gray};
        color: white;
        padding: 9px 9px 6px 10px;
        line-height: 1;
        text-align: center;
        font-size: 18px;
        text-decoration: none;
        border-radius: 4px;
    }
    .active {
        background: ${red};
    }
    .header__list {
        display: flex;
        align-items: center;
        padding: 0;
    }
    .header__list-item {
        margin-left: 100px; 
        list-style: none;
    }
    .header__list-link {
        text-decoration: none;
        font-size:  18px;
        color: #c8c8c9;
    }
    .header__inner-cart {
        display: flex;
        width: 23%;
        justify-content: flex-end;
    }
    .header__cart {
        color: ${red};
        font-size: 34px;
        background: transparent;
        border: 0;
        position: relative;
    }
    .cart__product {
        position: absolute;
        font-size: 15px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background: ${dark};
        padding: 1px 7px;
        font-weight: 600;
        border-radius: 50%;
        bottom: 27px;
        left: 34px;
    }
    .active-category {
        color: black;
    }
    .home__inner{
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 40px;
        width: 100%;
    }
    .home__card {
        width: 100%;
        max-width: 235px;
        border: 1px solid gainsboro;
        border-radius: 20px 20px 6px 6px;
        margin-top: 30px;
        margin-left: 18px;
        padding: 15px;
        cursor: pointer;
        position: relative;
    }
    .home__card:hover{
        box-shadow: 10px 10px 10px gainsboro;
    }
    .home__card-img {
        border-bottom: 4px solid #e9f6ff    ;
        border-radius: 20px 20px 0 0;
        width: 100%;
        height: 155px;
    }
    .home__card-title {
        font-size: 22px;
        margin-top: 6px;
        margin-bottom: 0;
        text-transform: capitalize;
    }
    .home__card-text{
        color: #b9bbc0;
        font-size: 16px;
        line-height: 1.4;
    }
    .home__card-cost{
        clip-path: polygon(21% 30%, 100% 30%, 100% 73%, 22% 73%, 6% 52%);
        width: 100%;
        max-width: 46px;
        padding-left: 14px;
        line-height: 1;
        letter-spacing: 2px;
        font-weight: 600;
        height: 46px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        color: white;
        background: ${red};
        border: 0;
    }
    .home__card-rate-inner {
        display: flex;
        justify-content: center;
        width: 100%;
        position: absolute;
        top: 146px;
        left: 0;
        span{
            font-size: 32px;
            color: gainsboro;
            margin-right: 4px;
        }
    }
    .oneStar span:first-child, 
    .twoStar span:nth-child(1), 
    .twoStar span:nth-child(2),
    .threeStar span:nth-child(1),
    .threeStar span:nth-child(2),
    .threeStar span:nth-child(3),
    .fourStar span:nth-child(2n),
    .fourStar span:nth-child(1),
    .fourStar span:nth-child(3),
    .fiveStar span:nth-child(2n),
    .fiveStar span:nth-child(1n){
        color: yellow !important;
    }
    .home__table {
        width: 100%;
        text-align: left;
        border-collapse: separate;
        border-spacing: 0px 20px;
        background: ${red};
        margin: 30px 0;
        padding: 20px;
        border-radius: 10px;
        color: white;
    }
    th {
        font-weight: 500;
        font-size: 18px;
    }
    .home__table-head {
        width: 100%;
    }
    tr td:first-of-type {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    tr td:last-of-type {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .shakes__tr {
        cursor: pointer;
        height: 50px;
        background: white;
        border-radius: 20px;
        color: black;
        margin-bottom: 20px;
    }
    .shakes__td-img img {
        margin-top: 4px;
        width: 90px;
        max-height: 65px;
        border-radius: 6px;
    }
    .shakes__td-img {
        max-width: 30px;
    }
    .shakes__td-btn {
        background: ${red};
        color: white;
        display: flex;
        align-items: center;
        border: 0;
        cursor: pointer;
        padding: 10px;
        border-radius: 4px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 15px;
        font-weight:600; 
    }
    .shakes__td-btn svg {
        font-size: 20px;
        margin-left: 4px;
    }
`

const Flex = styled.div`
    display: flex;
`

const Bag2 = styled.div`
    position: relative;
    width: 280px;
    .bag__header {
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        background: #f8f9fb;
        width: 280px;
        padding: 10px;
    }
    .bag__header-list {
        display: flex;
    }
    .bag__inner-size {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 100%;
            max-width: 60px;
        }
        .bag__header-size-item {
            background: #ffcfdc;
            margin-right: 10px;
            letter-spacing: 1px;
            width: 45px;
            line-height: 2.6;
            cursor: pointer;
            height: 40px;
            text-align: center; 
            border-radius: 50%;
        }
        .active-text {
            background: ${red};
            color: white;
        }
    }
    .bag__inner-total {
        display: flex;
        background: #eff3ff;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        height: 45px;
        margin-top: 30px;
        border-radius: 25px;
    }
    .bag__header-list-item {
        color: black;
        background: #ffcfdc;
        padding: 10px;
       list-style: none;
       cursor: pointer;
       font-size: 14px;
       letter-spacing: 1px;
    }
    .bag__header-list-item:first-child{
        border-radius: 25px 0 0 25px;
    }
    .bag__header-list-item:last-child{
        border-radius: 0 25px 25px 0;
        padding: 10px 25px;
    }
    .active {
        background: ${red};
        color: white;
    }
    .bag__inner-product {
        margin-top: 10px;
        box-shadow: 5px 5px 5px 5px #eceded;
        border-radius: 10px;
        
        .bag__inner-product-header {
            background: #eff3ff;
            color: gray;
            padding: 8px;
            text-transform: capitalize;
            font-size: 19px;
            border-radius: 10px 10px 0 0;
        }
        .bag__inner-product-body {
            overflow: auto;
            height: 140px;
            padding: 10px;

            &::-webkit-scrollbar {
             width: 0px;
            }
        }
        .bag__inner-product-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid gainsboro;
            p{
                color: #616571;
                font-weight: 600;
                font-size: 18px;
                text-transform: capitalize;
            }
        }
    }
`

export {
    Container,
    Flex,
    Bag2
}