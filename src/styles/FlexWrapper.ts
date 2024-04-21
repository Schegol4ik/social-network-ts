import styled from "styled-components";

type FlexWrapperType = {
    direction?: string
    align?: string
    justify?: string
    wrap?: string
}
export const FlexWrapper = styled.div<FlexWrapperType>`
    display: flex;
    flex-direction: ${({direction})=> direction || "row"};
    justify-content: ${({justify}) => justify || "flex-start"};
    align-items: ${({align}) => align || "stretch"};
    flex-wrap: ${({wrap}) => wrap || "nowrap"};
`