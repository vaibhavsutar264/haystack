import React, { Component } from 'react';
import { default as Dash } from 'react-dazzle';

// Your widget. Just another react component.
// import CounterWidget from './widgets/CounterWidget';

// Default styles.
import 'react-dazzle/lib/style/style.css';
import { useMemo } from 'react';

const ExampleWidget = () => {
   return (
      <div>
         Example widget
      </div>
   )
}

const Dashboard = () => {
   const widgets = useMemo(() => {
      return {
         ExampleWidget: {
            type: ExampleWidget,
            title: 'Counter widget',
         }
      }
   }, [])
   const layout = useMemo(() => {
      return {
         rows: [{
            columns: [{
               className: 'col-md-12',
               widgets: [{ key: 'ExampleWidget' }],
            }],
         }],
      }
   }, [])
   return (
      <Dash widgets={widgets} layout={layout} />
   )
}

export default Dashboard
