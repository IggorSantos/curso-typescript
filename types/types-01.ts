//boolean
let isOpen: boolean
isOpen = true

//string
let message: string
message = "Uma mensagem"

//number
let num: number
num = 2

//array
let nums: Array<number>
nums = [2,3,4,5]
//type inference
let newMessage = "Uma nova mensagem"

//Union
function logDetails(id: number | string ,item: string){
  console.log(`O ${item} tem como id ${id}`)
}
//logDetails(123,"sapato")

//Type alias
type Uid = number | string
function logInfo(uid: Uid ,name: string){
  console.log(`O ${name} tem como id ${uid}`)
}
logInfo(123,"Luis")
