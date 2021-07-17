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

  .main-content {
    padding-left: 260px;
    padding-right: 20px;
  }
`;