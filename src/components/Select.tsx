import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2px;
  width: 100px;
`;

const SelectTag = styled.select`
  width: 100%;
  padding: 2px;
  border-radius: 4px;
  border-color: #52bbab;
  outline: none;
  &:hover,
  &:focus {
    border-width: 2px;
  }
`;

export default function Select() {
  const [selected, setSelected] = useState("none");
  return (
    <Wrapper>
      <SelectTag value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="none">Select</option>
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </SelectTag>
    </Wrapper>
  );
}
