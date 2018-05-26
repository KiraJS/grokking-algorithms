let graph = {};

graph['you'] = ['alice', 'bob', 'claire'];
graph['bob'] = ['anuj', 'peggy'];
graph['alice'] = ['peggy'];
graph['claire'] = ['thom', 'jonny'];
graph['anuj'] = [];
graph['thom'] = [];
graph['jonny'] = [];
graph['peggy'] = [];

function breadthfirstsearch(g, first) {
  let sequence = g[first];
  while(sequence.length) {
    let person = sequence.pop();
    if(person[person.length-1] === 'm') return person + ' is mango seller'
    else {
      sequence = sequence.concat(g[person])
    }
  }
  return 'There are no mango seller in the sequence';
}

console.log(breadthfirstsearch(graph, 'you'))
