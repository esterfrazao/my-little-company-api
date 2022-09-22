# my-little-company-api

## Base Url : `https://onco-manager.herokuapp.com`

## Rotas Sem Autorização:

### Cadastro

---

**endpoint:** `/clients/register`

**POST/**

**O que deve ser enviado:**

```json
{
  "name": "Nome Completo Cliente",
  "email": "client@kenzie.com",
  "password": "12345678",
  "phone_number": "(86) 99999-9999"
}
```

**O que será retornado caso a requisição seja realizada com sucesso:**

```json
{
  "id": "ff9a5522-2fc6-4661-ab37-cfeb83195092",
  "name": "Nome Completo Cliente",
  "email": "client@kenzie.com",
  "phone_number": "(86) 99999-9999",
  "created_at": "12-12-12T00:00.00Z"
}
```

### Login

---

**endpoint:** `/login`

**POST/**

**O que deve ser enviado:**

```json
{
  "email": "client@kenzie.com",
  "password": "12345678"
}
```

**O que será retornado caso a requisição seja realizada com sucesso:**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
}
```

**O que será retornado caso a requisição falhe:**

```json
{
  "message": "Invalid Email/Password"
}
```

## Rotas Com Autorização:

Nas seguintes rotas é necessário fornecer o token que foi gerado no seu login

**endpoint:** `/clients/profile`

**GET/**

Leitura do perfil logado

**O que será retornado caso a requisição seja realizada com sucesso:**

```json
{
  "id": "ff9a5522-2fc6-4661-ab37-cfeb83195092",
  "name": "Nome Completo Cliente",
  "email": "client@kenzie.com",
  "phone_number": "(86) 99999-9999",
  "created_at": "12-12-12T00:00.00Z"
}
```

**endpoint:** `/clients/:client_id`

**PATCH/**

Alteração dos dados de um cliente

**Chaves que a API aceita (Todas opcionais):**

```json
{
  "name": "Nome Completo Cliente",
  "email": "client@kenzie.com",
  "phone_number": "(86) 99999-9999"
}
```

**O que será retornado caso a requisição seja realizada com sucesso:**

```json
{
  "message": "Client Updated Successfully"
}
```

**PUT/**

Alteração dos dados de um cliente

**Chaves que a API aceita (Todas obrigatórias):**

```json
{
  "name": "Nome Completo Cliente",
  "email": "client@kenzie.com",
  "phone_number": "(86) 99999-9999"
}
```

**O que será retornado caso a requisição seja realizada com sucesso:**

```json
{
  "message": "Client Updated Successfully"
}
```

**DELETE/**

Remoção de um cliente do banco de dados

**retornará status 204, sem corpo, caso a requisição seja realizada com sucesso**

### Contatos

---

**endpoint:** `/contacts`

**POST/**

Adição de um novo contato na sua agenda

**O que deve ser enviado:**

```json
{
  "name": "Nome do Contato",
  "email": "contact@mail.com",
  "phone_number": "(86) 99999-9999"
}
```

**O que será retornado caso a requisição seja realizada com sucesso:**

```json
{
  "id": "ff9a5522-2fc6-4661-ab37-cfeb83195092",
  "name": "Nome do Contato",
  "email": "contact@mail.com",
  "phone_number": "(86) 99999-9999",
  "id_client": "ff9a5522-2fc6-4661-ab37-cfeb83195092"
}
```

**GET/**

Listagem dos contatos do cliente logado

**O que será retornado caso a requisição seja realizada com sucesso:**

```json
[
    ...
    {
        "id": "ff9a5522-2fc6-4661-ab37-cfeb83195092",
        "name": "Nome do Contato",
        "email": "contato@mail.com",
        "phone_number": "(86) 99999-9999",
        "id_client": "ff9a5522-2fc6-4661-ab37-cfeb83195092"
    }
    ...
]
```

**endpoint:** `/clients/:contact_id`

**GET/**

Leitura de um contato

**O que será retornado caso a requisição seja realizada com sucesso:**

```json
{
  "id": "ff9a5522-2fc6-4661-ab37-cfeb83195092",
  "name": "Nome do Contato",
  "email": "contato@mail.com",
  "phone_number": "(86) 99999-9999",
  "id_client": "ff9a5522-2fc6-4661-ab37-cfeb83195092"
}
```

**PATCH/**

Alteração de um contato do cliente

**Chaves que a API aceita (Todas opcionais):**

```json
{
  "name": "Nome do Contato",
  "email": "contato@mail.com",
  "phone_number": "(86) 99999-9999"
}
```

**O que será retornado caso a requisição seja realizada com sucesso:**

```json
{
  "message": "Client Updated Successfully"
}
```

**PUT/**

Alteração de um contato do cliente

**Chaves que a API aceita (Todas obrigatórias):**

```json
{
  "name": "Nome do Contato",
  "email": "contato@mail.com",
  "phone_number": "(86) 99999-9999"
}
```

**O que será retornado caso a requisição seja realizada com sucesso:**

```json
{
  "message": "Contact Updated Successfully"
}
```

**DELETE/**

Remoção de um contato da agenda do client

**retornará status 204, sem corpo, caso a requisição seja realizada com sucesso**
