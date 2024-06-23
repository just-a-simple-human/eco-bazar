import styled from "styled-components";

export const DeleteFilterButton = styled.button`
  width: fit-content;
  height: fit-content;

  background: transparent;

  &:hover path {
    stroke: #272343;
  }
`;

export const ActiveFilterContainer = styled.div`
  display: flex;
  gap: 8px;

  display: flex;
  align-items: center;
`;