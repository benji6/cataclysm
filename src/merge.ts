import curry2 from './internal/curry2'
export default curry2((objA: Object, objB: Object): Object => ({...objB, ...objA}))
