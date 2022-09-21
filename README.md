
# Repositório de Testes de Habilidades em Angular!


O Objetivo desse teste é avaliar as habilidades do candidato em front-end (Angular), estruturação e compilação de uma aplicação web, estilização e consumo de Api's e importações de bibliotecas.

# Instruções 

 1. Crie uma branch com o seu nome a partir da master
 2. Clone o repositório na sua maquina e selecione a branch criada no passo 1.
 
## Objetivos da Aplicação

a Aplicação deve fazer o consumo de uma API publica e gratuita de escolha do candidato ([Lista de API's](https://github.com/public-apis/public-apis)), e exibir os resultados em uma estrutura do Tipo (Grid/Table), para isso utilizar os componentes da biblioteca `Material` [material.angular.io](https://material.angular.io/guide/getting-started)

 - para recuperar os dados da api utilizar o service:  `api-service.ts`e o método `getdados()` faça as implementações que julgar necessarias:   
 - utilize os arquivos de `environments` para armazenar o endpoint da api.

## Estrutura da Pagina
- Aplicação deve conter apenas toolbar superior **FIXO** com o logo e nome da empresa, e no body um botão que troque a rota, utilzando o `router-outlet` [Referencia](https://angular.io/guide/router-tutorial-toh).
- A estilização (css/scss) e por conta do candidato. Sabemos que o candidato não é designer :) porém, o bom senso estético é de suma Importancia!, capriche no css!

- para a rota utilize o nome dados "/dados":   

### Exemplo de projeto (home , /dados):

![TLV test project](https://i.ibb.co/nbNpcPP/angular-skills.png)


