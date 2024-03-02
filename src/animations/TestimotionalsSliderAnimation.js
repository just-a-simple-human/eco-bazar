import { keyframes } from "styled-components";

export const $moveToLeft = keyframes`

    from {
        transform: translateX(448px);
    }
    to {
        transform: translateX(0);
    }

`

export const $moveToRight = keyframes`

    from {
        transform: translateX(-448px);
    }
    to {
        transform: translateX(0);
    }

`