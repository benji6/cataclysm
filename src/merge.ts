import curry2 from './internal/curry2'

const merge = (objA: Object, objB: Object): Object => ({...objB, ...objA})

export default curry2(merge)
