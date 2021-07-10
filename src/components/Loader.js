import React from 'react';
import MoonLoader from "react-spinners/MoonLoader";
import { StyledLoader } from '../style/components';

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
        size={100}
      />
    </StyledLoader>
  )
}
