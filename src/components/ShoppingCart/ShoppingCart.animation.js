import { keyframes } from "styled-components";

export const openning = keyframes`
    from {
        transform: translateX(455px);
    }
    to {
        transform: translateX(0px);
    }
`;
export const closing = keyframes`
    from {
        transform: translateX(0px);
    }
    to {
        transform: translateX(455px);
    }
`;

export const added = keyframes`
    from {
        transform: translateX(200%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`;
