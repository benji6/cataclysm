export default (objA: Object) => (objB: Object) => (<any>Object).assign({}, objB, objA)
