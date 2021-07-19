import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  @fontface {
    font-family: 'Poppins', san-serif;
    src: url('https://fonts.googleapis.com/css2?family=Poppins&display=swap')
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  
  body {
    margin: 0;
  }

  input{
    font-family: 'Poppins', sans-serif;
  }

  .main-content {
    padding-left: 260px;
    padding-right: 20px;
    max-width: 100%;
  }
  .container {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .slick-track {
    max-width: 100%;
    height: 300px;
  }
  .slick-dots{
    display: flex !important;
    justify-content: center;
    align-items: center;
    position: relative;
    list-style: none;
  }
  .slick-dots li button::before {
    font-size: 6px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    content: '•';
    text-align: center;
    top: -60px;
    background: gray;
    border-radius: 50%;
  }
  .slick-active button::before {
    background: white !important;
  }
  .slick-dots li button {
  font-size: 0;
  line-height: 0;
  display: block;
  width: 20px;
  height: 20px;
  padding: 5px;
  cursor: pointer;
  color: transparent;
  border: 0;
  position: relative;
  margin-right: 15px;
  outline: 0;
  background: 0 0;
}
`;