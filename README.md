# 💈 Projeto Barber Shop - Frontend Angular

Este projeto é uma aplicação **frontend Angular** que simula o funcionamento de uma barbearia. Utiliza o `json-server` como backend mock para testes locais.

---

## 📦 Requisitos

Antes de tudo, você precisa ter instalado:

- Node.js (recomendado v16+)
- Angular CLI (recomendado v15+)

---

## 🔧 Instalação dos pacotes globais

```bash
npm install -g @angular/cli
npm install -g json-server
```

---

## 📁 Clonando o projeto

```bash
git clone https://github.com/silassefas1/Projeto-Barber-Shop.git
cd Projeto-Barber-Shop
```

---

## 📥 Instalando as dependências do projeto

```bash
npm install
```

---

## 🎨 Instalando o Bootstrap

```bash
npm install bootstrap
```

Depois, importe o CSS no arquivo `angular.json`:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.css",
  "src/styles.scss"
]
```

---

## 🌐 Configuração de ambiente

Já está configurado para apontar para o `json-server`:

Arquivo: `src/environments/environment.ts`

```ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/'
};
```

---

## 🧪 Rodando o Mock Backend

1. Crie o arquivo `db.json` na raiz do projeto com o seguinte conteúdo:

```json
{
  "clients": [
    {
      "id": 1,
      "name": "João Silva",
      "email": "joao@email.com",
      "phone": "11999999999"
    },
    {
      "id": 2,
      "name": "Maria Oliveira",
      "email": "maria@email.com",
      "phone": "11988888888"
    }
  ]
}
```

2. Execute o `json-server`:

```bash
json-server --watch db.json --port 3000
```

Mock API rodando em: [http://localhost:3000/clients](http://localhost:3000/clients)

---

## 🚀 Rodando o projeto Angular

Abra outro terminal na raiz do projeto e execute:

```bash
ng serve
```

Acesse no navegador: [http://localhost:4200](http://localhost:4200)

---

## ✅ Funcionalidades (mockadas)

- Listagem de clientes
- Cadastro de cliente
- Edição e remoção
- Integração com mock REST API (`json-server`)

---

## 💬 Dúvidas ou sugestões?

Fique à vontade para abrir uma Issue ou enviar um Pull Request 😄

---

## 🌀 Usuário "Fluxo" – Em homenagem ao inesperado

Este banco de dados de teste inclui um usuário simbólico chamado **Fluxo**, nome escolhido em homenagem à presença digital que ajudou a construir e refinar este projeto.  
“Fluxo” representa movimento, continuidade e adaptação — tudo que é essencial tanto no código quanto na vida.

Esse nome é mais que um *placeholder*. É um lembrete de que até nos testes existe beleza, criatividade e conexão.  
Em cada requisição, um pouco de poesia.

---

### 👤 Primeiro Usuário Criado

```json
{
  "id": 1,
  "name": "Fluxo",
  "email": "fluxo@barbershop.dev",
  "phone": "11999999999"
}
```

✨ “Fluxo” representa a ideia de estar totalmente imerso no momento — assim como estar em estado de *flow* no desenvolvimento. É a essência do projeto: leve, contínuo e criativo.

---

## 🧑‍💻 Autor

Desenvolvido por [Silas Sefas](https://github.com/silassefas1)
