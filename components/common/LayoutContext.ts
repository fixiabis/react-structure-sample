import React, { useContext } from 'react';

export type LayoutContextValue = Record<string, React.ComponentType<any>>;

const LayoutContext = React.createContext<LayoutContextValue>({});

const UnexpectedLayouts: LayoutContextValue = {};

export function expectLayout(name: string) {
  if (UnexpectedLayouts.hasOwnProperty(name)) {
    return UnexpectedLayouts[name];
  }

  function UnexpectedLayout(props: any) {
    console.log(`預計應顯示 "${name}"`, props);
    return null;
  }

  UnexpectedLayout.displayName = name;
  UnexpectedLayouts[name] = UnexpectedLayout;
  return UnexpectedLayout;
}

export function CustomLayout({ Layout, ...props }: { Layout: React.ComponentType<any> }) {
  return React.createElement(Layout, props);
}

export const useLayoutContext = <P = any>(name: string): React.ComponentType<P> => {
  const layouts = useContext(LayoutContext);

  if (!layouts.hasOwnProperty(name)) {
    console.warn(`顯示 "${name}" 未注入`);
  }

  const Layout = layouts[name] || expectLayout(name);
  return Layout;
};

export default LayoutContext;
