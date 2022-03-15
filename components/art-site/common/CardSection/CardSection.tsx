export interface CardSectionLayoutProps extends IntrinsicElementProps<'section'> {
  variantHeaderTitle?: React.ReactNode;
  variantFullLoaded?: boolean;
  variantWide?: boolean;
}

export interface CardSectionProps extends CardSectionLayoutProps {
  renderCards: (layoutProps: any) => React.ReactNode;
  onActionLoad: () => void;
}

function CardSection(props: CardSectionProps) {
  const {
    variantHeaderTitle,
    variantFullLoaded,
    variantWide,
    renderCards,
    onActionLoad: emitActionLoad,
    ...layoutProps
  } = props;

  const header = variantHeaderTitle ? <div className="header">{variantHeaderTitle}</div> : null;
  const cards = renderCards({ className: 'card' });

  const footer = variantFullLoaded ? null : (
    <div className="footer">
      <button className="load" onClick={emitActionLoad}>
        view more
      </button>
    </div>
  );

  return (
    <section {...layoutProps}>
      {header}
      <div className="container">{cards}</div>
      {footer}
    </section>
  );
}

export default CardSection;
