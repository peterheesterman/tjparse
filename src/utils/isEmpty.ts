
const isEmpty = (arr: Array<any>) => {
  if (arr == null) throw new Error(`Can't check that null or undefined is empty`)
  return arr.length === 0
}

export { isEmpty }