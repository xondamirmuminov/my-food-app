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
    position: relative;
  }
  .container {
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 15px;
  }
  .slick-track {
    max-width: 100%;
  }
`;