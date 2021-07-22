import styled from 'styled-components';
import colors from './colors';

export const StyledLoader = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1040;
  background-color: #2e3549c2;
  display: flex;
  align-items: center;
  justify-content: center;

  .bubble2 .loader .loader-items .bubble {
    background-color: #fff;
  }
`;