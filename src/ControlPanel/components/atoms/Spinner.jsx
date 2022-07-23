import styled from "@emotion/styled"
import { useProgressBar } from '@react-aria/progress'

const StyledLoading = styled.div`
`
export default function Spinner({ size = 32, strokeWidth = 4 }) {
   // const size = useMemo(() => {
   //    return sizeProps
   // }, [ sizeProps ])
   let { progressBarProps } = useProgressBar({
      isIndeterminate: true,
      'aria-label': 'Loading...'
   });

   let center = (size / 2);
   let r = (size / 2) - strokeWidth;
   let c = 2 * r * Math.PI;
   let offset = c - (1 / 4) * c;

   return (
      <StyledLoading>
         <svg
            {...progressBarProps}
            width={size}
            height={size}
            viewBox={`0 0 ${size}  ${size} `}
            fill="none"
            strokeWidth={strokeWidth}>
            <circle
               role="presentation"
               cx={center}
               cy={center}
               r={r}
               stroke="var(--dark-4)" />
            <circle
               role="presentation"
               cx={center}
               cy={center}
               r={r}
               stroke="var(--primary-color)"
               strokeDasharray={c}
               strokeDashoffset={offset}>
               <animateTransform
                  attributeName="transform"
                  type="rotate"
                  begin="0s"
                  dur="0.5s"
                  from={`0 ${center} ${center}`}
                  to={`360 ${center} ${center}`}
                  repeatCount="indefinite" />
            </circle>
         </svg>
      </StyledLoading>
   );
}
