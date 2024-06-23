import styled, { css } from "styled-components";
import { colors } from "#common/common.style";

export const ControllerButtonContainer = styled.button`
    width: 36px;
    height: 36px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    &:has(svg) {
        border: 1px solid ${colors.grey[1]};

        &:hover {
        border: transparent;
        }
    }

    background: ${colors.brandingColors.white};

    &:hover {
        background: ${colors.brandingColors.primary};
        & p {
        color: ${colors.brandingColors.white};
        }
        & path {
        stroke: ${colors.brandingColors.white};
        }
    }

    &:disabled {
        pointer-events: none;
        & path {
            stroke: ${colors.grey[5]};
        }
    }

    ${(props) =>
    props.$isActive && css`
          & p {
            color: ${colors.brandingColors.primary};
          }
        `
    }
`;