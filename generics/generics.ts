function mostrar<T extends number | string>(valor: T){
  return typeof valor
}
console.log(mostrar('2'))
console.log(mostrar(2))
