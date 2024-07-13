class Queue {
  constructor() {
    this.elements = [];
  }

  // Método para calcular o tamanho da fila
  size() {
    return this.elements.length;
  }

  // Método para adicionar um item na fila
  add(item) {
    this.elements.push(item);
  }

  // Método para escolher o primeiro item da fila (sem remover)
  peek() {
    return this.elements[0];
  }

  // Método para remover e retornar o primeiro item da fila
  dequeue() {
    return this.elements.shift();
  }
}

module.exports = Queue;
