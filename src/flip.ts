export const flip = (f: Function) => (a: any) => (b: any) => f(b)(a)
