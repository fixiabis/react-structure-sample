import React from 'react';
import Header from './Header';

export interface DefaultTemplateProps {
  children: { sections: React.ReactNode; modals?: React.ReactNode };
}

function DefaultTemplate(props: DefaultTemplateProps) {
  return (
    <div {...props}>
      <Header />
      {props.children.sections}
    </div>
  );
}

export default DefaultTemplate;
