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


