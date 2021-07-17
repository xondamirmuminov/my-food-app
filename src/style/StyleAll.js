import Styled from 'styled-components'

const Main = Styled.div`
.card {
    width:100%;
    max-width:350px;
    margin-bottom:12px;
}

.top {
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    width: 100%;
}
a {
text-decoration:none;
}
img {
    width: 100%;
    height:180px;
    object-fit:cover;
    border-radius:15px;
}
.label {
    color:#000;
    margin:0;
    font-size:22px;
    margin-left:10px
}
`;

const InputInner = Styled.div`
    display: flex;
    align-items: center;
    border: 1px solid gainsboro;
    padding: 6px;
    border-radius: 6px;
    background: white;
    max-width: 100px;
    
    input{
        width: 100%;
        max-width: 60px;
        font-size: 16px;
        text-align: center;
        color: #2e3549;
        font-weight: 600;
        border: 0;
    }
    button{
        font-size: 14px;
        border: 0;
        background: white;
        color: #2e3549;
        cursor: pointer;
    }
`

export {
    Main,
    InputInner
}