const graph = {}
graph['you'] = ['alice', 'bob', 'claire']
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
graph['anuj'] = []
graph['peggy'] = ['alice']
graph['thom'] = []
graph['jonny'] = []

const set = new Set()

function findSeller(g, first) {
    let sequence = g[first]

    while(sequence.length) {
        let person = sequence.pop(); // can use sequence.shift()
        if (!set.has(person)){
            set.add(person)
            if(person[person.length-1] === 'z') return `${person} is seller`
            else sequence = sequence.concat(g[person])
        } else {
            continue
        }
    }
    
    return 'There are no seller'
}

console.log(findSeller(graph, 'you'))
console.log(set)
