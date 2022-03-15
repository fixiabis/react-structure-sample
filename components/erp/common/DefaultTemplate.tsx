import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export interface DefaultTemplateProps extends Omit<IntrinsicElementProps<'div'>, 'children'> {
  children: { sections: React.ReactNode; modals?: React.ReactNode };
}

function DefaultTemplate(props: DefaultTemplateProps) {
  return (
    <div {...props}>
      <Header />
      <Sidebar />
      {props.children.sections}
    </div>
  );
}

export default DefaultTemplate;
