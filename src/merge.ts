export const merge = (objA: Object) => (objB: Object) => (<any>Object).assign({}, objB, objA)
