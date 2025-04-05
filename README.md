# 💈 Projeto Barber Shop - Frontend Angular

Este projeto é uma aplicação frontend desenvolvida em **Angular**, simulando o funcionamento de uma barbearia. Utiliza o **json-server** como backend mock para testes locais.

---

## 📦 Requisitos

Antes de tudo, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (recomendado v16+)
- [Angular CLI](https://angular.io/cli) (recomendado v15+)

### 🔧 Instalação dos pacotes globais:

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

Se ainda não estiver instalado, rode:

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

Já está configurado para apontar para o json-server:

```ts
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/'
};
```

---

## 🧪 Rodando o Mock Backend

### 1. Crie o arquivo `db.json` na raiz do projeto com o seguinte conteúdo:

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

### 2. Execute o json-server:

```bash
json-server --watch db.json --port 3000
```

> Mock API rodando em: `http://localhost:3000/clients`

---

## 🚀 Rodando o projeto Angular

Abra outro terminal na raiz do projeto e execute:

```bash
ng serve
```

Acesse no navegador:  
📍 `http://localhost:4200`

---

## 🛠️ Estrutura de pastas relevante

```
src/
├── app/
│   ├── pages/
│   │   └── clients/
│   │       └── components/
│   ├── services/
│   │   ├── api-client/
│   │   │   └── clients/
│   │   └── service.token.ts
├── environments/
│   └── environment.ts
```

---

## ✅ Funcionalidades (mockadas)

- 📋 Listagem de clientes
- ➕ Cadastro de cliente
- ✏️ Edição e remoção
- 📡 Integração com mock REST API (`json-server`)

---

## 💬 Dúvidas ou sugestões?

Fique à vontade para abrir uma **Issue** ou enviar um **Pull Request** 😄

---

## 🧑‍💻 Autor

Desenvolvido por [Silas Sefas](https://github.com/silassefas1)
