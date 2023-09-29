import http from 'node:http'

const Users = [] 

const server = http.createServer((req, res) => {
  const {method, url} = req

  if(method === 'POST' & url === '/users'){
    Users.push({
      id: 1,
      name: 'Fulano de Tal',
      email: 'fulano@email.com'
    })

    return res.end('Criação de usuário')
  }
  if(method === 'GET' & url === '/users'){
    return res.setHeader('Content-Type', 'application/json').end(JSON.stringify(Users))
  }

  return res.end('hello world')
})

server.listen(3333) //=> setamos aqui a porta que o server irá rodar
