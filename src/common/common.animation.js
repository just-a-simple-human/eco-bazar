import { css, keyframes } from "styled-components";

export function animationOnClick(isClicked, setIsClicked, mainFunction) {
  return {
    disabled: isClicked ? true : null,
    $clicked: isClicked ? "true" : null,
    onClick: () => setIsClicked(true),
    onAnimationEnd: () => {
      setIsClicked(false);
      mainFunction();
    },
  };
}

export function transitionOnClick(isClicked, setIsClicked, mainFunction) {
    return {
      disabled: isClicked ? true : null,
      $clicked: isClicked ? "true" : null,
      onClick: () => setIsClicked(true),
      onTransitionEnd: (e) => {
        setIsClicked(false);
        e.propertyName === "transform" && getComputedStyle(e.target)[e.propertyName] !== "none" && mainFunction();
      },
    };
  }

export const appearance = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    } 
`;

export const fall = (direction, spacing) => keyframes`
    from {
        ${
            direction === "Y" ? 
                css`transform: translateY(${spacing}px);` : 
                css`transform: translateX(${spacing}px);`
        }
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
`;

export const shrinkAnim = keyframes`

    from {
        transform: scale(1);
    }
    50% {
        transform: scale(.75)
    }
    to {
        transform: scale(1);
    }

`;
