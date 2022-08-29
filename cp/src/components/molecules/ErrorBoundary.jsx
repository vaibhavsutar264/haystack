import styled from '@emotion/styled';
import React from 'react';
import { Icon, Text } from '../atoms';

const StyledErrorBoundary = styled.div`
   padding: 1.5rem;
   background: rgb(227 36 55 / 5%);
   border-radius: var(--rounded-md);
   margin-bottom: 0.5rem;
   color: #801621;
   display: flex;
   gap: 0.7rem;
   font-size: 14px;
   .icon {
      --icon-size: 40px;
   }
`

export default class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = {hasError: false};
   }

   static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {hasError: true, error};
   }

   componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      // logErrorToMyService(error, errorInfo);
   }

   render() {
      if (this.state.hasError) {
         console.warn(this.state.error)
         // You can render any custom fallback UI
         return (
            <StyledErrorBoundary>
               <div>
                  <Icon name={'exclamationCircle'} size={'sm'} />
               </div>
               <div>
                  <Text heading>Component crashed!</Text>
                  <Text as={'div'}>
                     {this.state?.error.toString() ?? ''}
                     {/* {JSON.stringify({ e: this.state.error})} */}
                  </Text>
               </div>
            </StyledErrorBoundary>
         );
      }

      return this.props.children;
   }
}
