export default class Todo {
  id: string;
  text: string;
  constructor(todoType: string) {
    this.text = todoType;
    this.id = new Date().toISOString();
  }
}
