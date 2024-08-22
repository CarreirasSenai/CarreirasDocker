# Usa uma imagem base do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

#Instala o yarn na maquina 
#RUN npm install --global yarn

# Instala as dependências do projeto
RUN yarn install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta que o Vue.js utilizará
EXPOSE 8080
