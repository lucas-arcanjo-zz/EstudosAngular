# Angular Forms

## (4) Data Binding in Angular Forms

### Using NgForm
A diretiva `ngForm` nos dá informações valiosas do nosso formulário de template.
O angular, utiliza essa variável de modo interno, abaixo um exeplo de como acessar-la:
Exemplo:
```
<form #form="ngForm">
...
</form>
```
é utilizado `#` junto com o nome da váriavel de referência/template, e atribuir o `ngForm` como string o na variável,
para ver todas as propriedades do `ngForm` é necessário utilizar o seguinte comando:
Exemplo:
``{{ form | json }}``
fazendo isso, apresentarar na na tela as propriedades

### Using NgModel
A diretiva `ngModel` é colocada em todos os campos que queremos que o Angular saiba, o ngModel nos ajuda a construir o objeto
de valores que vimos no exemplo anterior.
obs... o atributo `name` é obrigatório

### Two-way-data-binding
a diretiva `ngModel` sendo utilizada da forma `[(ngModel)]` consegue receber tanto as alterações do arquivo ts, como atualizar o arquivo html, duas vias 
que podem se comunicar.

# Copying Form Data
Se queremos mostrar ao usuário um formulário pre-pronto, e se ele fizer alterações, ou cancelar, ou voltar o dados que ele alterou vão apresentar no formulário, caso abra novamente, para isso, existe uma copia, que pode ser sempre usada para não perder o formulário original.
ex... 
```
  originalUserSettings: UserSettings = {
    name: 'Lucas',
    emailOffers: true,
    interfaceStyle: 'dark',
    subscriptionType: 'Annual',
    notes: 'here are some notes...'
  };

  userSettings: UserSettings = { ...this.originalUserSettings }
```
isso é uma propagação em JS, isso fez uma cópia do objeto original e armazenou me um objeto, caso queira fazer uma 
cópia mais profunda, poderia usar o utilitário como o Lodash com sua função clone profunda

## (5) Form Validation

### HTML5 Validation Attributes
Em HTML5, os principais atributos de validação são:

 - required
 - pattern

também há atributos baseados em valor, como 
 - min
 - max
 - minlegth
 - maxlength

em Angular, existe uma outra diretiva, chamada `ngNativeValidate`, essa diretiva irá permitir que o nagegador 
valide cada controle, para funcionar deve-se por na tag junto com `ngForm`, se por o atributo `required`, ele irá 
apresentar uma mensagem que o campo é obrigatório, e se colocar o atributo `pattern`, ele irá seguir um padrão, 
isso nos permite especificar uma expressão regular que pode ser usada como padrão para validar os campos, Ex:
`pattern="B.*"`
no ex acima, o a campo é necessário começar com a letra B e, 

### CSS Classes for Validation
O angular, sempre utiliza debaixo dos panos classes quando estamos utilizando 
um formulário, são elas:

`ng-untouched`, `ng-touched` => se o campo foi visitado ou não
`ng-pristine` => verifica o estado nativo dos dados pela primeira vez
`ng-dirty` => se foi modificado
`ng-valid`, `ng-invalid` => se o campo está válido, ou inválido

### ngModel Properties for Validation
examinando as propriedades ngModel para validação, e elas são baseadas nas classes sem o ng-prefix, conseguindo usar essas propriedades em expressões em nosso modelo, o que é uma alternativa para trabalhar com classes

### Styling Forms with Validation Errors
Analisando o estilo dos formulários com erros de validação, trabalhando com várias classes e propriedades para dar usuário uma boa experiência ao preencher o formulário

### Submitting Forms
entendo também como é o envio de formulários `(ngSubmit)="onSubmit()"`
alem de entender como utilizar a váriavel de template(#form) do modelo para o formulário: `form.submitted` flag, alem de ser usado em expressões

### Handling Form Control Events
alem de conhecer eventos de formulário, como o `blur=(onBlur)`(borrão, desfocado)

Essas são informações básicas sobre como estilizar seus formulários para dar ao usuário uma boa experiência, dependendo de suas preferências de design... pode 
utilizar essas classes, ou propriedades ngModel, ou outros recursos para estilizar os formulários.


## (6) HTTP Form Posting and Data Access

### Create a Data Service
no terminal coloque o comando do angular CLI: ng g s `nomeDaService`

### Form Posting Using Observables
Observables em angular é uma forma assíncrona de trabalhar com dados, bem parecido com as Promisses, em JavaScript

### HTTP Acess Using HttpClient
para utilização do httpClient, é necessário primeiro importá-lo no module da sua aplicação, importando o HttpClientModule, depois disso, utilize na sua classe de serviço.

### Post a Form Using HttpClient
Uma forma de ter um servidor funcionando, pra teste, é utilizando o site _https://putsreq.com/_, lá pode criar uma Url para sua service, e utiliza-la para ver o retorno de seu objeto.
Caso tente novamente, siga o code na parte Response Builder: 
```
var parsedBody = JSON.parse(request.body);
parsedBody.id = '1';
response.body = parsedBody;
```
depois de fazer a requição, veja no seu objeto as alterações que fez na hora do envio, também, a quantidade de request que fez.

### Handling POST Erros
Muita vezes, pode haver erros na aplicação, por isso use bem o console, e veja as mensagens apresentadas, para um 
usuário, é necessário apresentar uma mensagem a ele, por isso, existem formas de usar a mesma mensagem de error do 
servidor para o usuário, usando uma propriedade `boolean`, pra apresenta se houve erro, ou não, e uma outra 
propriedade como `string`, que aprensente a mensagem

### Retrieve Data For Select Elements
no rxjs existem formas de conseguir os dados, uma delas é utilizando o `of`, se tiver um `ngFor` em nosso html, e 
a propriedade que estamos preenchendo é do tipo observable, ou seja, ela está sendo preenchida a partir de uma 
service, podemos colocar um `| async` , para aguardar a resposta da service, a assim preenche os dados para não 
houver errors.
mensagem de error no console:
`ERROR Error: Cannot find a differ supporting object '[object Object]' of type 'object'. NgFor only supports binding to Iterables such as Arrays.` 