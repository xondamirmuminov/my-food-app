import Styled from 'styled-components';
import Salad2 from '../assets/salad2.jpg';
import colors from '../style/colors';


export const Main = Styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  @fontface {
    font-family: 'Poppins', san-serif;
    src: url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
  }
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
    padding-top: 40px;
    align-items: center;
    margin-bottom:15px;
}
form{
    display: flex;
    align-items: center;
}
.top input {
    width: 480px;
    font-size:14px;
    border:2px solid #ddd;
    border-radius:1px 5px 5px 1px;
    background-color:#ddd;
    padding: 6px;
    font-family: 'Poppins', sans-serif;
}
.top button {
    background-color:#ff2c68;
    border:2px solid #ff2c68;
    border-radius: 4px;
    padding: 3px 5px;
    width: 40px;
    color:#fff;
    font-size:18px;
}
.top__switch {
    display:flex;
    align-items: center;
    .label {
        margin-left: 6px;
    }
}

.slider {
    height:300px;  
    background-repeat: no-repeat;
    background-size: cover;
    border-radius:8px;
    background-image: url(${Salad2}) ;
    background-position-y:center;   
} 
.first {
    h3 {
        color: ${colors.dark};
        font-weight: 900;
    }
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