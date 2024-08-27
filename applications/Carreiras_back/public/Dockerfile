FROM node:18
COPY package*.json ./
RUN apt-get update && apt-get install -y netcat-openbsd
RUN npm install
WORKDIR /usr/src/app
COPY . .
EXPOSE 4000
CMD ["npm", "start"]