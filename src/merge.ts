export default (objA: Object) => (objB: Object): Object => (<any>Object).assign({}, objB, objA)
