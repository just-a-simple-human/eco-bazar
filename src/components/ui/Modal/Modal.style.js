import styled from "styled-components";

export const ModalContainer = styled.dialog`

    &[open] {
        min-height: 100lvh;
        overflow-x: hidden;

        position: absolute;
        z-index: 1;
        
        &::backdrop {
            background: rgba(0, 0, 0, 0.7);
        }
    }

`