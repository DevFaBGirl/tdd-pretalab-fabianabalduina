const Queue = require('./queue');

describe('Queue', () => {
  it('Deve criar uma fila vazia', () => {
    const queue = new Queue();
    expect(queue.elements).toEqual([]);
  });

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    const queue = new Queue();
    queue.add('item1');
    queue.add('item2');
    expect(queue.size()).toBe(2);
  });

  it('Deve ser capaz de adicionar um item na fila', () => {
    const queue = new Queue();
    queue.add('item1');
    expect(queue.elements).toEqual(['item1']);
  });

  it('Deve escolher o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add('item1');
    queue.add('item2');
    expect(queue.peek()).toBe('item1');
  });

  it('Deve remover o primeiro item da fila', () => {
    const queue = new Queue();
    queue.add('item1');
    queue.add('item2');
    const removedItem = queue.dequeue();
    expect(removedItem).toBe('item1');
    expect(queue.size()).toBe(1);
    expect(queue.peek()).toBe('item2');
  });
});
