import React from 'react';
import MoonLoader from "react-spinners/HashLoader";
import { StyledLoader } from '../style/components';
import colors from '../style/colors';

export default function Loader({ loading }) {
  if (!loading) {
    return null;
  }

  return (
    <StyledLoader>
      <MoonLoader
        type="bubble-top"
        bgColor={"rgb(0,0,0, 50%)"}
        title={"Loading"}
        color={"#dc305e"}
        size={150}
      />
    </StyledLoader>
  )
}
