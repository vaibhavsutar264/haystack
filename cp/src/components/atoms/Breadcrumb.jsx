import styled from '@emotion/styled';
import { useBreadcrumbItem, useBreadcrumbs } from '@react-aria/breadcrumbs';
import React from 'react';

const StyledBreadcrumb = styled.nav`
   font-size: 13px;
   ol {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;

   }
`

export default function Breadcrumb(props) {
   let { navProps } = useBreadcrumbs(props);
   let children = React.Children.toArray(props.children);

   return (
      <StyledBreadcrumb {...navProps}>
         <ol>
            {children.map((child, i) =>
               React.cloneElement(child, { isCurrent: i === children.length - 1 })
            )}
         </ol>
      </StyledBreadcrumb>
   );
}

function BreadcrumbItem(props) {
   let ref = React.useRef();
   let { itemProps } = useBreadcrumbItem({ ...props, elementType: 'span' }, ref);
   return (
      <li>
         <span
            {...itemProps}
            ref={ref}
            style={{
               color: 'var(--blue)',
               textDecoration: props.isCurrent ? null : 'underline',
               fontWeight: props.isCurrent ? 'bold' : null,
               cursor: props.isCurrent ? 'default' : 'pointer'
            }}
         >
            {props.children}
         </span>
         {!props.isCurrent &&
            <span aria-hidden="true" style={{ padding: '0 5px' }}>{'›'}</span>}
      </li>
   );
}

Breadcrumb.Item = BreadcrumbItem
