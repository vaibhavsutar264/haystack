import styled from "@emotion/styled"

const Flex = styled.div`
   display: flex;
   gap: ${props => props.gap ?? '0'};
   align-items: ${props => props.alignItems ?? 'initial'};
   justify-content: ${props => props.justifyContent ?? 'initial'};
`
export default Flex
