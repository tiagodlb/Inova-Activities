<h1 align="center">
    Traveling Mango
</h1>
deploy link: https://traveling-mango.vercel.app/
deploy link back: https://traveling-mango-api.onrender.com

**TODAS AS IMAGENS** SÃO GRATUITAS E SOBRE LICENÇA CREATIVE COMMONS
<br />

## :rocket: Routes
- Link da API: [https://traveling-mango-api.onrender.com/destinies](https://traveling-mango-api.onrender.com/destinies)

- As respostas padrões são:
  - `200` - Successful GET request || Sucesso na requisição GET 
  - `201` - Successful POST or PUT request || Sucesso na requisição POST or PUT
  - `204` - Successful DELETE request
  - `401` - Auth errors || Erro de autenticação
  - `404` - Resource not found || Recurso não encontrado
  - `409` - Resource conflict on POST requests || Recurso em conflito nas requisição POST
  - `422` - Body validation error on POST requests || Erro de validação no corpo nas requisições POST

### Auth

```yml
POST /register
    - Rota para criar um novo usuario
    - body:{
        "email": "jon@doe.com",
        "nickname": "JonTheDoe",
        "password": "DonJoe27",
      }
    - response: {}
```

```yml
POST /login
    - Rota para acesso de um usuário já existente
    - body:{
        "email": "jon@doe.com",
        "password": "DonJoe27"
    }
    - Response: {"token": JWT_TOKEN}
```
    
### Destinies

```yml 
GET /destinies
    - Rota para acessar as informações dos destinos
    - response:
[
  {
    "id": 18,
    "created_at": "2024-07-15T00:55:50.272Z",
    "title": "Santo Amaro",
    "content": "Santo Amaro do Maranhão é uma cidade charmosa localizada no coração dos Lençóis Maranhenses. É conhecida por suas paisagens deslumbrantes, menos exploradas que as de Barreirinhas, e pela proximidade com as dunas e lagoas do Parque Nacional dos Lençóis Maranhenses. Aqui estão alguns dos principais atrativos de Santo Amaro",
    "imgURL": "https://images.unsplash.com/photo-1668431397148-21a3dc45a8bb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "lat": -2.4901,
    "long": -43.2401,
    "favoritedBy": 0,
    "Attraction": [
      {
        "title": "Lagoa da Gaivota",
        "content": "Uma das lagoas mais icônicas dos Lençóis Maranhenses, a Lagoa da Gaivota é famosa por suas águas cristalinas e areia branca, proporcionando um ambiente tranquilo e paradisíaco para banhos e contemplação. A beleza intocada e a serenidade do local fazem dela uma parada obrigatória para os visitantes.",
        "imgURL": "https://upload.wikimedia.org/wikipedia/commons/0/05/A_bela_Lagoa_da_Am%C3%A9rica%2C_no_Parque_Nacional_dos_Len%C3%A7%C3%B3is_Maranhenses.jpg",
        "destinyId": 18
      }
    ]
  }
], ...
```
### Attractions

```yml 
GET /attractions
    - Routa para acessar as informações das atrações em possiveis destinos
    - response:
[
  {
    "id": 1,
    "created_at": "2024-07-31T11:52:25.257Z",
    "title": "Lençois Maranhenses",
    "content": "Um dos destinos mais espetaculares do Brasil, os Lençóis Maranhenses são uma vasta extensão de dunas de areia branca, pontuadas por lagoas de água doce que se formam durante a estação chuvosa. Este cenário único e surreal atrai visitantes de todo o mundo, oferecendo uma experiência incomparável de contato com a natureza.",
    "imgURL": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Len%C3%A7%C3%B3is_Maranhenses._01.jpg",
    "lat": null,
    "long": null,
    "destinyId": 19
  }
],
```

