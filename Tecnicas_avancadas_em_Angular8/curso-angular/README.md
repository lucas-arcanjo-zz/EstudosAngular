# Inicio do Projeto

O que é um `FormBuilder`?
    É um conjunto de informações responsável por criar um formulário, onde ajuda o angular, a 
    manipular as informações contidas dentro.
Uma dessas informações dentro do `FormBuilder` é o `group()` que retorna um `FormGroup`.

# Adicionando validações ao nosso formulário
`Form field` Usado para apresentar erro, nas validações de campos obrigatórios ou que tenha outra condição
selector/tag utilizada `<mat-error>

# Elvis operator (navegação segura)
o que caractere `?` em HTML é muito usado para limitar erros, ele irá ver a lógica contida até chegar nele, se não tiver nenhum 
erro, ele para aonde está.

# Serviço para validação de erros
Sempre ao criar um `service`, e dentro dele, há um `@injectable({ provideIn: 'root'})`. Ele é a 
parte principal do sistema, ou seja, qualquer parte do sistema poderar usar o serviço.

# 
A ideia do angular é sempre componentizar objetos, para reutilizar
Componentizar facilita o trabalho do desenvolvedor, e deixa o HTML do component mais limpo.

#
Todo método post esperasse inicialmente uma url

#
entryComponents: []




================================================================
# Informações anteriores do professor

# Curso Intermediário de Angular - Digital Innovation One

Esse curso foi feito para a plataforma [Digital Innovation One](https://digitalinnovation.one/)

O curso consiste em um sistema de filmes, com a possibilidade de cadastros, edições, listagem e visualização dos cursos de outros usuários.

## Instalação

1. clone o repositório `git clone git@github.com:RenanRB/curso-angular.git`
2. Entre no projeto e instale as dependencias `npm install`

## Ambiente Local

Execute `ng serve` para que o projeto suba localmente. Acesse a url `http://localhost:4200/`. O projeto já está com reload automático conforme as alterações que você realizar no código

## Simulando o Back-end

Execute `npm install -g json-server` para instalar globalmente o servidor json. Após a instalação entre na pasta do projeto e execute `json-server --watch db.json`, com isso um servidor será inicializado na url `http://localhost:3000/`, após a inicialização sera possível realizar requisições http.

## Gerendo componente

Execute `ng generate component nome-do-componente` para criar um novo componente. Você também pode usuar `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Execute `ng build` para gerar o compilado do projeto. O projeto vai ser criado dentro do diretório `dist/`. Adicionar `--prod` junto comando de build para gerar minificado e pronto para o ambiente de produção.

