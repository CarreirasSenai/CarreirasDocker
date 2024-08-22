Back -> localhost:3000
Front -> localhost:8080
Banco -> localhost:8081

# PASSO 1 - Instalar o Docker
 - https://www.docker.com/get-started/

# PASSO 2 - instalar o Composer
 - https://getcomposer.org/download/    

# PASSO 3 - Faça o clone do projeto
 - Git

# PASSO 4 - Execute o comando para dar um Build no projeto
 - $ docker compose build

# PASSO 5 - Execute o Docker
 - docker compose up -d


# ----------- Docker e Docker Compose Comandos --------------

## Docker

### 1. `docker build`

- docker build -t nome_da_imagem:tag .

<!-- Constrói uma imagem Docker a partir de um Dockerfile no diretório atual. -->

 - -t: Nome e tag da imagem.

<!-- .: Contexto de build, geralmente o diretório atual. -->

### 2. docker run

- docker run -d -p 80:80 nome_da_imagem:tag

<!-- Inicia um novo contêiner a partir de uma imagem Docker. -->
- -d: Executa o contêiner em segundo plano (detached).
- -p: Mapeia uma porta do host para a porta do contêiner.

### 3. docker ps

- docker ps

<!-- Lista todos os contêineres em execução. -->

### 4. docker ps -a

- docker ps -a

<!-- Lista todos os contêineres, incluindo os que estão parados. -->

### 5. docker stop

- docker stop ID_DO_CONTAINER

<!-- Para um contêiner em execução. -->

### 6. docker rm

- docker rm ID_DO_CONTAINER

<!-- Remove um contêiner parado. -->

### 7. docker rmi

- docker rmi NOME_DA_IMAGEM

<!-- Remove uma imagem Docker. -->

### 8. docker exec

- docker exec -it ID_DO_CONTAINER /bin/b

<!-- Executa um comando em um contêiner em execução. -->

- -it: Modo interativo com terminal.

### 9. docker logs

- docker logs ID_DO_CONTAINER

<!-- Exibe os logs de um contêiner. -->

# #Docker Compose

### 1. docker-compose up

- docker-compose up

<!-- Inicia e executa os serviços definidos em um arquivo docker-compose.yml. -->

### 2. docker-compose down

- docker-compose down

<!-- Para e remove os contêineres, redes e volumes definidos no arquivo docker-compose.yml. -->

### 3. docker-compose build

- docker-compose build

<!-- Constrói ou reconstrói os serviços definidos no docker-compose.yml. -->

### 4. docker-compose ps

- docker-compose ps

<!-- Lista o status dos contêineres definidos no docker-compose.yml. -->

### 5. docker-compose exec

- docker-compose exec SERVIÇO /bin/b

<!-- Executa um comando em um contêiner em execução de um serviço definido no docker-compose.yml. -->

###  docker volume rm

- docker volume rm NOME_DO_VOLUME

<!-- Remove um volume Docker. -->

# # Gerenciamento de Redes

### 1. docker network ls

- docker network ls

<!-- Lista todas as redes Docker. -->

### 2. docker network rm (remove docker)

- docker network rm NOME_DA_REDE


# Parar e remover os serviços:

- docker-compose down

<!-- Executar um comando dentro de um contêiner de serviço: -->

- docker-compose exec nome_do_serviço /bin/b