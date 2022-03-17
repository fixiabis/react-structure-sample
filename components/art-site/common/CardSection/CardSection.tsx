export interface CardSectionLayoutProps {
  headerTitle?: React.ReactNode;
  fullLoaded?: boolean;
  wide?: boolean;
}

export interface CardSectionProps extends CardSectionLayoutProps {
  renderCards: (layoutProps: any) => React.ReactNode;
  onLoad: () => void;
}

function CardSection(props: CardSectionProps) {
  const { headerTitle, fullLoaded, wide, renderCards, onLoad: emitLoad, ...layoutProps } = props;

  const header = headerTitle ? <div className="header">{headerTitle}</div> : null;
  const cards = renderCards({ className: 'card' });

  const footer = fullLoaded ? null : (
    <div className="footer">
      <button className="load" onClick={emitLoad}>
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
