import Styled from 'styled-components';
import Salad from '../assets/home/salad.jpg';


export const Main = Styled.div`
h3 {
    font-size:40px;
    margin:0;
    bottom:20px;
    font-weight:900;
    margin:80px 0 0 50px;
    color:#fff;
}
h4 {
    font-size:40px;
    margin: 0;
    color:#fff;
    margin: 0 0 0 50px;
}
.top {
    display:flex;
    justify-content:space-between;
    padding-top:20px;
    margin-bottom:15px;
}
.top input {
    width:600px;
    font-size:16px;
    border:2px solid #ddd;
    border-radius:1px 5px 5px 1px;
    background-color:#ddd;
}
.top button {
    background-color:#ff2c68;
    border:2px solid #ff2c68;
    border-radius:3px;
    color:#fff;
    font-size:16px;
}
.top__switch {
    display:flex;
}

.slider {
    height:300px;  
    background-repeat: no-repeat;
    background-size: cover;
    border-radius:8px;
    background-image: url(${Salad}) ;
    background-position-y:center;   
}
.tab {
    margin-top:40px;
}
.tab__list {
    list-style:none;
    display:flex;
    justify-content:space-between;
    padding:0;
}
.tab__list-item {
    color:#ddd;
    display:flex;
    align-items:center;
    border-bottom:3px solid #ddd;
    font-size:18px;
}
.active {
    color:#000;
    cursor:pointer;
    border-bottom: 3px solid #ff2c68;
}

.tab__list-item:hover {
    color:#000;
    cursor:pointer;
    border-bottom: 3px solid #ff2c68;
}
.tab__list-item:hover .icons, .tab__list-item.active .icons {
    color:#ff2c68;
}
.tab__list-item .icons {
    color:#ffcfdc;
    margin-right:5px;
}
`;