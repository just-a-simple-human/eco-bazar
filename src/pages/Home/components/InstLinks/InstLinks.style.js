export const { default: styled } = require("styled-components");

export const InstLinksContainer = styled.section`
  width: 1320px;
  height: 270px;
  margin-block: 100px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const PostsContainer = styled.div`
  height: 200px;

  display: flex;
  gap: 24px;
`;

export const Post = styled.a.attrs({ target: "_blank" })`
  max-height: 200px;
  max-width: 200px;
  border-radius: 10px;
  overflow: hidden;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  & * {
  }

  & svg {
    position: absolute;
    opacity: 0;
  }

  &:hover {
    & img:first-child {
      scale: 1.25;
    }

    & div,
    & svg {
      opacity: 1;
    }
  }
`;

export const GreanBackground = styled.div`
  width: 200px;
  height: 200px;
  border-radius: inherit;

  position: absolute;
  left: 0;
  top: 0;

  background: rgba(43, 87, 46, 0.8);
  opacity: 0;
`;