type IntrinsicElementProps<E extends keyof JSX.IntrinsicElements> = Omit<JSX.IntrinsicElements[E], 'ref'> & {
  ref?: Exclude<JSX.IntrinsicElements[E]['ref'], string>;
};
