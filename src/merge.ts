import curry2 from './internal/curry2'

const merge = (objA: object, objB: object): object => ({ ...objB, ...objA })

export default curry2(merge)
