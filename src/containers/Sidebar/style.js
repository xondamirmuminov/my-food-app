import styled from 'styled-components';
import colors from '../../style/colors';
const { dark, red, gray } = colors;

export default styled.header`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 220px;
  background-color: ${dark};
  padding: 20px 0 20px 20px;
  display: flex;
  flex-direction: column;

  .sidebar__links {
    display: flex;
    flex-direction: column;
  }
  .sidebar__links.settings {
    margin-top: auto;
  }

  .sidebar__link-item {
    color: ${gray};
    margin: 7px 0;
    padding: 10px 7px;
    text-decoration: none;
    display: flex;
    align-items: center;

    &.active {
      color: ${red};
    }

    .sidebar__link-icon {
      font-size: 20px;
      margin-right: 12px;
    }
  }
`
