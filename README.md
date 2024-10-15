# fsw-barber
Desenvolvimento de um aplicativo para barbearia

## Tecnologias
É utilizado neste projeto, NextJS, PostgreSQL (banco relacional)

## Neon.DB
Utilizarei o neon.DB para estar rodando meu database

## Adicionando o prisma na aplicação
- *Prisma*
```
npm install prisma --save-dev
```

- *Avisando o prisma que iremos usar o postgr como banco*
```
npx prisma init --datasource-provider postgresql 
```

- *Após criar o schema do prisma, rodar o comando abaixo para formatar os dados*
```
npx prisma format
```

- *Para aplicar o schema do prisma no banco, é preciso rodar* 
```
npx prisma migrate dev --name init_db
```

- *Popular o prisma com o seed.ts, após isso adicionar no JSON o "seed": "ts-node prisma/seed.ts". Para rodar é necessário instalar ts com o comando*
```
npm install -D ts-node
``` 

- *Após isso para executar o script no nosso banco rodar*
```
npx prisma db seed
```

## Adicionando o Prettier-Plugin ao Tailwind
Para começar, instalar com o comando abaixo:
```
npm install -D prettier prettier-plugin-tailwindcss
```
Após a instalação do do prettier, criar um arquivo .prettierrc.json na raiz do projeto e adicionar
```
{
    "plugins": ["prettier-plugin-tailwindcss"],
    "tabWidth": 2,
    "semi": false
}
```
Rodar o comando abaixo para ver se a conflitos entre o Pretty e o ESLint
```
npm install eslint-config-prettier --save-dev
```

## Adicionando o ShadcnUI 
Esta vai ser a nossa biblioteca de componentes, para adicionar ao projeto, rodar o comando
```
npx shadcn-ui@latest init
```
Adicionar um "_" na frente do nome das páginas para não confundir com as rotas
### Adicionando componentes
Botão
```
npx shadcn-ui@latest add button
```
Card
```
npx shadcn@latest add card
```

## Git Hooks
Formatar o código antes de todos os commits para não dar conflito, para isso vamos utilizar a biblioteca Husky juntamente do Lint. Para adicionar ao projeto, rodar o comando:
```
npm install -D husky lint-staged
```
Inicializar o husky
```
npx husky init
```
Criar um arquivo com o nome .lintstagedrc.json e adicionar o código abaixo
```
{
    "*.ts?(x)": ["eslint --fix", "prettier --write"]
}
```
Agora, após dar o commit, serão rodados os comandos acima, apenas aos arquivos adicionados no commit

Dentro do .eslintrc.json, adicionar uma regra que não deixa dar commit com variavel que não está sendo usada
```
{
  "extends": "next/core-web-vitals",
  "rules": {
    "no-unused-vars": "error"
  }
}
```
Garantir que cada commit tenha um prefixo:
```
npm i git-commit-msg-linter
```
Após a instalação, adicionar um arquivo dentro da pasta .husky chamdado "commit-msg" e dentro do arquivo adicionar o comando
```
.git/hooks/commit-msg $1
```

## Login com rede social(NextAuth)
Rodar o comando para instalar o NextAuth
```
npm install next-auth
```