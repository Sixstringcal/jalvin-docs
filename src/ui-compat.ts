import * as Raw from "../node_modules/@jalvin/ui/dist/index.js";

function toChildArray(children: any): any[] | undefined {
  if (children === undefined || children === null) return undefined;
  return Array.isArray(children) ? children : [children];
}

function withChildren<P extends Record<string, any>>(
  fn: (props: P, children?: any[]) => any
) {
  return (props: P) => fn(props, toChildArray((props as any).children));
}

export * from "../node_modules/@jalvin/ui/dist/index.js";

// Components in @jalvin/ui currently read children from a second arg.
// Jalvin 2.0.32 emits React.createElement, which passes children via props.
// These wrappers bridge that mismatch.
export const Scaffold = withChildren((Raw as any).Scaffold);
export const Column = withChildren((Raw as any).Column);
export const Row = withChildren((Raw as any).Row);
export const Box = withChildren((Raw as any).Box);
export const Card = withChildren((Raw as any).Card);
export const Button = withChildren((Raw as any).Button);
export const IconButton = withChildren((Raw as any).IconButton);
