import { keyframes } from "styled-components";

export const deleted = keyframes`
    from {
        transform: translateX(0);
        opacity: 1;
    }
    to {
        transform: translateX(416px);
        opacity: 0;
    }
`;