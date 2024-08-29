# fsw-barber
Desenvolvimento de um aplicativo para barbearia

## Tecnologias
É utilizado neste projeto, NextJS, PostgreSQL (banco relacional)

## Adicionando o prisma na aplicação
npm install prisma --save-dev

npx prisma init --datasource-provider postgresql (avisando o prisma que iremos usar o postgr como banco)

Após criar o schema do prisma, rodar um npx prisma format para formatar os dados

Para aplicar o schema do prisma no banco, é preciso rodar um npx prisma migrate dev --name init_db

Popular o prisma com o seed.ts, após isso adicionar no JSON o "seed": "ts-node prisma/seed.ts". Para rodar é necessário instalar o ts npm install -D ts-node

Após isso executar npx prisma db seed para executar o scrpit no nosso banco

## Neon.DB
Utilizarei o neon.DB para estar rodando meu database
