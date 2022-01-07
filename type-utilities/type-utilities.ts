interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
//Partial: Transforma todas as propiedades do type em opcionais
function updateTodo(todo: Todo, fieldsUpdate: Partial<Todo>){
  return { ...todo, ...fieldsUpdate}
}
//Readonly: Transforma as propiedades do type em readonly
const todo1: Readonly<Todo> = {
  title: "Assistir Dark",
  description: "Relembrar pontos da serie",
  completed: true,
}

const todo2 = updateTodo(todo1, {
  completed: false,
})
//Pick: Constrói um novo type com propriedades selecionadas do primeiro type
type TodoPreview = Pick<Todo, "title" | "completed">

const todo3: TodoPreview = {
  title: "Estudar Angular",
  completed: false,
}

//todo1.title = "Mudar"
console.log(todo1)
console.log(todo2)
console.log(todo3)
