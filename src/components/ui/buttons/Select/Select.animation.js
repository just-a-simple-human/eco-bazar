import { keyframes } from "styled-components";

export const openning = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const closing = keyframes`
from {
    opacity: 1;
}
to {
    opacity: 0;
}
`;
