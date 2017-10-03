export default (objA: Object) => (objB: Object): Object => ({...objB, ...objA})
