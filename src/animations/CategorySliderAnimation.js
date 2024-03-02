import { keyframes } from "styled-components";

export const $moveToLeft = keyframes`

    from {
        transform: translateX(224px);
    }
    to {
        transform: translateX(0);
    }

`

export const $moveToRight = keyframes`

    from {
        transform: translateX(-224px);
    }
    to {
        transform: translateX(0);
    }

`