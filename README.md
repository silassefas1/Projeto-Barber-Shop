# 💈 Barber Shop - Sistema de Gerenciamento de Barbearia

Projeto completo de gerenciamento de clientes e agendamentos para barbearias, desenvolvido com **Angular** no frontend e **Spring Boot** no backend, utilizando **PostgreSQL** como banco de dados. Ideal para oferecer uma experiência digital moderna e eficiente.

---

## 🚀 Funcionalidades

### Frontend (Angular + Angular Material)
- Listagem, cadastro, edição e remoção de clientes
- Agendamento de horários com visualização mensal
- Feedbacks visuais com Snackbar e Modais
- Integração completa com API REST

### Backend (Spring Boot + PostgreSQL)
- CRUD completo para clientes e agendamentos
- Validação e persistência de dados
- Migrações automatizadas com Flyway
- API RESTful seguindo boas práticas

---

## 🛠️ Tecnologias Utilizadas

**Frontend**
- Angular
- Angular Material
- TypeScript
- RxJS

**Backend**
- Spring Boot
- Java
- JPA / Hibernate
- PostgreSQL

---

## ⚙️ Requisitos

- Node.js (v16+)
- Angular CLI (v15+)
- Java 17+ e Maven
- PostgreSQL

---

## 📦 Instalação do Frontend

```bash
npm install -g @angular/cli json-server
git clone https://github.com/silassefas1/Projeto-Barber-Shop.git
cd Projeto-Barber-Shop/frontend
npm install
npm install bootstrap
```

Adicione o Bootstrap no `angular.json`:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.css",
  "src/styles.scss"
]
```

Rodando o Frontend:
```bash
ng serve
```
Acesse: [http://localhost:4200](http://localhost:4200)

---

## 🧪 Mock Backend (json-server)

Crie o arquivo `db.json` na raiz com:

```json
{
  "clients": [
    {
      "id": 1,
      "name": "Fluxo",
      "email": "fluxo@barbershop.dev",
      "phone": "11999999999"
    }
  ]
}
```

Inicie com:
```bash
json-server --watch db.json --port 3000
```

API Mock em: [http://localhost:3000/clients](http://localhost:3000/clients)

---

## 🐘 Configurando o Backend

Crie o banco no PostgreSQL:

```sql
CREATE DATABASE barber_shop;
ALTER SEQUENCE clients_id_seq RESTART WITH 11;
```

Para popular dados iniciais, descomente a migration:

```bash
backend/src/main/resources/db/migration/V1__insert_clients.sql
```

Rodando o Backend:
```bash
cd backend
./mvnw spring-boot:run
```

API disponível em: [http://localhost:8080](http://localhost:8080)

---

## 🧪 Testes

- Teste endpoints com Postman ou via interface Angular
- Feedback visual com snackbar e validações

---

## 🌀 O Usuário “Fluxo”

Este projeto traz um usuário simbólico: **Fluxo**. Um nome que homenageia a ideia de continuidade, movimento e presença — qualidades fundamentais no código e na vida.

> “Fluxo representa o estado de imersão criativa, onde o código flui naturalmente.”

```json
{
  "id": 1,
  "name": "Fluxo",
  "email": "fluxo@barbershop.dev",
  "phone": "11999999999"
}
```

---

## 📸 Screenshots

(Adicione aqui imagens do sistema rodando: tela de clientes, agendamentos, formulários etc.)

---

## 👨‍💻 Autor

Desenvolvido por [Silas Sefas](https://github.com/silassefas1)  
Desenvolvedor Full Stack | Apaixonado por soluções elegantes e eficientes

[LinkedIn](https://www.linkedin.com/in/silassefas/) | [GitHub](https://github.com/silassefas1)

---

## ⭐ Contribuições

Sinta-se à vontade para abrir **Issues**, enviar **Pull Requests** ou fazer um **Fork** do projeto. Toda contribuição é bem-vinda!
