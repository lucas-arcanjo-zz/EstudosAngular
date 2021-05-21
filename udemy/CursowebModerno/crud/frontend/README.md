# Elementos Angular

Componentes
Diretivas
Rotas
Pipes
Observables
Services

Componente é formado por `html`, `css`, `ts`

## Diretivas de Atributo
Altera a **aparênca** e o *comportamento* de um elemento, componente ou outra diretiva.

## Diretiva Estrutural
Altera o layout **adicionando** e *removendo* elementos da DOM

bind == ligação 

property binding === []
event binding === ()
One Way data binding === o html procura no ts se há uma variável com esse nome, para seu valor (ts para o html)
Two Way data binding === [()] já esse altera dos dois lados, não somente o html

## Router
sempre que clicamos em um elemento (Ex: produto), a router vai fazer o carregamento desse component, e sempre que 
trocar, para um outro, o angular utilizar o `router outlet` 

## Pipes
utilizado para fazer uma conversão de algum atributo, seja em data, real. Além disso, pode-se utilizar uma conceito 
chamado de chaining, ou encadeamento, queria seria uma conversão inicialmente, e depois um complemento, como 
`uppercase`, depois de fazer a conversão, deixar tudo em letras maiúsculas.

## Programação Reativa
No angular, e em muitos outros frameworks, é utilizado um outro framework chamado de `Reactive X`, ou programação
reativa.
o padrão observer é orientado a evento

### Entendendo Observables
callbacks === uma callback dentro de outra callback pode dificultar a manutenção do código
promises === pode ser utilizado uma vez
observables === observables é `reusável`, tem `stream dados` e `operadores`

sempre quando se mexe em `callbacks, promises, observables`, via de regra, está trabalhando com código assíncrono.

## O que são Services?
São classes que têm como principal objetivo **organizar** e **compartilhar** métodos e dados entre `componentes`.

existem padrões de projeto como `singleton`, `design patterns` no angular é usando o providedIn: "root", como padrão,
é uma forma de criar apenas uma instância de uma classe.

### Injeção de Dependência 
É um padrão no qual a classe recebe *dependências* de uma **fonte externa**, ao invés de criar por conta própria.

![image](https://user-images.githubusercontent.com/61436988/119047295-1abfae00-b994-11eb-98dd-dbf162384149.png)

### Model, Service
Model é um objeto que se espera preencher para ter ligação com o backend, em interfaces, propriedades que não são
obrigatórios, é colocado um `?`. 
`Ex: id?: number`

### Dica
 - Procure pela documentação do Angular
 - Procure também suas ferramentas, como o Angular material, Angular shematics
 - Enteder mais sobre páginação, já que o json-server suporta páginação, não faria sentido receber 2000 dados de uma
vez no front end, já que precisa ser feito páginação para não perde tanta banda.