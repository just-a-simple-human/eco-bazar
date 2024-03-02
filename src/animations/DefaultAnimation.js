import { keyframes } from "styled-components";

export function animationOnClick($isclicked, setIs$clicked, mainFunction) {

    return {
        disabled: $isclicked ? 'true' : null,
        $clicked: $isclicked ? 'true' : null,
        onClick: () => setIs$clicked(true),
        onAnimationIteration:() =>{
            setIs$clicked(false)
            mainFunction()
        }
    }

}

export const appearance = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    } 
`

export const fall = keyframes`
    from {
        transform: translateY(-60px);
        opacity: 0;
    }
    to {
        transform: translateY(0px);
        opacity: 1;
    }
`

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

`