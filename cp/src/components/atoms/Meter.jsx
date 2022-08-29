import styled from '@emotion/styled';
import { useMeter } from '@react-aria/meter';

const StyledMeter = styled.div`
   max-width: 300px;
   .Meter__bar {
      --height: 10px;
      --accent-color: var(--primary-color);
      border-radius: 1rem;
      overflow: hidden;
      margin: 0.5rem 0;
      width: 100%;
      height: var(--height);
      background: var(--dark-2);
      .Meter__bar-complete {
         background: var(--accent-color);
         height: 100%;
      }
   }
`

export default function Meter(props) {
   let {
      label,
      showValueLabel = !!label,
      value,
      minValue = 0,
      maxValue = 100
   } = props;
   let {
      meterProps,
      labelProps
   } = useMeter(props);

   // Calculate the width of the progress bar as a percentage
   let percentage = (value - minValue) / (maxValue - minValue);
   let barWidth = `${Math.round(percentage * 100)}%`;

   return (
      <StyledMeter {...meterProps} >
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {label &&
               <span {...labelProps}>
                  {label}
               </span>
            }
            {showValueLabel &&
               <span>
                  {meterProps['aria-valuetext']}
               </span>
            }
         </div>
         <div className='Meter__bar' >
            <div className='Meter__bar-complete' style={{ width: barWidth, }} />
         </div>
      </StyledMeter>
   );
}
