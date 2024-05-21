import { keyframes } from "styled-components";

export const moveToLeft = keyframes`

    from {
        transform: translateX(448px);
    }
    to {
        transform: translateX(0);
    }

`;

export const move = (spacing) => keyframes`

    from {
        transform: translateX(${spacing}px);
    }
    to {
        transform: translateX(0);
    }

`;