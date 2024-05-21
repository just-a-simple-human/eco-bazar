import { keyframes } from "styled-components";

export const adding = keyframes`
    from {
        transform: translateY(-2px);
    }
    25% {
        transform: translateY(2px);
    }
    50% {
        transform: translateY(-2px);
    }
    75% {
        transform: translateY(2px);
    }
    to {
        transform: translateY(0px);
    }
`;
