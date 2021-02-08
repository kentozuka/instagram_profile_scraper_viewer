export function commad (x) {
  if (!x) return '0'
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export function zerod (x) {
  return x > 9 ? x : `0${x}`
}