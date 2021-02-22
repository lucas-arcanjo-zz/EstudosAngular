## Trabalhando cmo módulos e componentes

### Pontos importantes
- `{{}}` == interpolação
- `two way data binding` == quando só quer exibir o valor da propriedade
- `two way data binding` == exibi e alterar a propriedade, a medida que foi atualizando, vai 
atualizar em todo aplicação que estiver.
Para utilização do `two way data binding` ou é necessário utilizar o `[(ngModel)]="valor do atributo para linka"`

### 
CamelCase é um ponto fundamental em exportar ou importar a utilização
em todo compoenente, é necessário colocar o decorate `@Component`, para o angular entender 
que esse arquivo é um componente.

Para instalação do bootstrap no angular é necessário utilizar os comandos `npm install bootstrap`
o Angular dar um pode a mais para o HTML, que é o `*ngFor=""` e o `*ngIf=""`

###
Sempre ao utilizar uma image dentro de uma variável, é necessário utilizar 
`<img [src]="variável.imagem">`

o Angular, por padrão utiliza o onInit, de forma assíncrona
o @input faz com que adicione um atributo na tag, e sempre utilizado usando `[]`

### O que é Injeção de Dependência?
Injeção de dependência é um serviço que complementa o home da página inicial, pode haver diversos, para instanciar qualquer parte da aplicação.

### Tratando eventos com data binding
um ponto importante para realizar filtros dentro de uma tabela, ordenação, entre outros 
pontos, importante a utilização do bootstrap, acerca de classes etc, para melhor desenvolvimento.

### Transformando datas com Pipes
sempre quanto vir a palavra Pipes, é uma forma querer alterar alguma propriedade no template.
um dos `pipes` padrão no angular é:
    {{ blabla.ble `| date: 'dd/MM/yyyy'`
    {{ blabla.ble`| lowercase`}}
Muito imporante para alteração.

###

`RouterModule.forRoot([])` sempre espera um array
a partir do momento que você faz uma rota, você não precisa mais do selector, que cria um tag
html, já que a própria rota faz o caminh

o Agular precisa saber onde está sendo feito o swich, a troca de componentes
por isso é necessário utilizar o `<router-outlet></router-outlet>`

rotas padrão do angular
`path: '**'` quando não encontrar a rota
`path ''` quando está na raiz da aplicação

### Ativando Rotas para acessar Componentes
Podemos ativar rotas acessando componentes, utiilzar no html o `[routerLink]=""`e após isso, 
colocar essa rota no TS.
`routerLinkActive`

### Trabalhando com formulários e templates
pode-se criar variavel de template utilizando `#nomedavariavel` sempre utilizando `[]`

###
Por padrão, o `HttpClient` sempre retorna um `Observable<>`

### Segregando aplicações em módulos
Pipes padrões do angular são importados por meio no `FormsModule`
todo componente criado em determinado módulo, deve ficar separado no app Module raiz, por 
uma questão de organização

### Conhecendo a pasta shared
É sempre bom separar pastas com componentes e modulos específicos que talvez seja utilizado 
em nossa aplicação, arquivos genéricos, leves

### Conhecendo a pasta core
Já a pasta de core são arquivos mais pesados, mais carregados que tenha regra de negócios, etc

### Tratando com erros com Angular