import React, { Fragment } from "react";
import { TeamButton } from "./Button";
import { useDispatch } from "react-redux";
import { hit } from "../redux/reducer";
import styled from "styled-components";

const ScoreButtonsWrapper = styled.div`
  display: flex;
  padding-bottom: 2vh;
  justify-content: space-between;
`;

export const ScoreButtons = () => {
  const dispatch = useDispatch();
  return (
    <ScoreButtonsWrapper>
      <TeamButton team="blue" onClick={() => dispatch(hit("blue"))}>
        Point Team Blue
      </TeamButton>
      <TeamButton team="red" onClick={() => dispatch(hit("red"))}>
        Point Team Red
      </TeamButton>
    </ScoreButtonsWrapper>
  );
};
