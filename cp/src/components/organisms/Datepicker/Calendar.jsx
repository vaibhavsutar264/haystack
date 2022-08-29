import React from 'react';
import Dayzed, { useDayzed } from 'dayzed';
import { StyledCalander } from './StyledDatepicker';
import { Button, Flex, IconButton } from '../../atoms';
import CalendarDay from './CalendarDay';

const monthNamesShort = [
   'Jan',
   'Feb',
   'Mar',
   'Apr',
   'May',
   'Jun',
   'Jul',
   'Aug',
   'Sep',
   'Oct',
   'Nov',
   'Dec'
];
const weekdayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar({ calendars, getBackProps, getForwardProps, getDateProps }) {
   if (calendars.length) {
      return (
         <StyledCalander>

            {calendars.map(calendar => (
               <div
                  key={`${calendar.month}${calendar.year}`}
               >
                  <Flex gap={'1rem'} justifyContent={'space-between'} alignItems="center">
                     <IconButton variant={'default'} size={'small'} {...getBackProps({ calendars })} name={'chevronLeft'} />
                     <div className='Calendar__label'>
                        {monthNamesShort[calendar.month]} {calendar.year}
                     </div>
                     <IconButton variant={'default'} size={'small'} {...getForwardProps({ calendars })} name={'chevronRight'} />
                  </Flex>
                  <div className="Calendar__grid">
                     {weekdayNamesShort.map(weekday => (
                        <div
                           key={`${calendar.month}${calendar.year}${weekday}`}
                           className="Calendar__item-label"
                        >
                           {weekday}
                        </div>
                     ))}
                     {calendar.weeks.map((week, weekIndex) =>
                        week.map((dateObj, index) => {
                           let key = `${calendar.month}${calendar.year
                              }${weekIndex}${index}`;
                           if (!dateObj) {
                              return (
                                 <div
                                    key={key}
                                 />
                              );
                           }
                           let { date, selected, selectable, today } = dateObj;
                           console.log({ dateObj, week })
                           let background = today ? 'var(--dark-2)' : '';
                           background = selected ? 'var(--primary-color)' : background;
                           background = !selectable ? 'teal' : background;
                           return (
                              <CalendarDay
                                 className={`Calendar__item ${selected ? 'selected' : ''} ${!selectable ? 'not-selectable' : 'selectable'}`}
                                 style={{
                                    background
                                 }}
                                 key={key}
                                 {...getDateProps({ dateObj })}
                                 children={selectable ? date.getDate() : 'X'}
                              />
                           );
                        })
                     )}
                  </div>
               </div>
            ))}
         </StyledCalander>
      );
   }
   return null;
}
