import React, { Fragment, useMemo } from 'react';
import Dayzed, { useDayzed } from 'dayzed';
import Calendar from './Calendar';
import { Popover } from '../../molecules';

export default function Datepicker({ onChange, value, ...props }) {
   const datePickerProps = useMemo(() => {
      return {
         firstDayOfWeek: 0,
      }
   }, [])
   return (
      <Fragment>
         <Popover >
            <div style={{ padding: '0 1rem' }}>
               <Dayzed
                  onDateSelected={onChange}
                  selected={value}
                  {...datePickerProps}
                  render={dayzedData => <Calendar {...dayzedData} />}
               />
            </div>
         </Popover >
      </Fragment>
   );
}

Datepicker.propTypes = {
   ...Dayzed.propTypes
}
