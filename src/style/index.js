import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
  }

  .main-content {
    padding-left: 260px;
    padding-right: 20px;
  }
`;