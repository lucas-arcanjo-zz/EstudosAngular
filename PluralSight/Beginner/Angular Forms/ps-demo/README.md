## Form Template

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

### HTML5 Validation Attributes

Em HTML5, os principais atributos de validação são:

 - required
 - pattern

também há atributos baseados em valor, como min, max, minlegth, maxlength.
em Angular, existe uma outra diretiva, chamada `ngNativeValidate`, essa diretiva irá permitir que o nagegador 
valide cada controle, para funcionar deve-se por na tag junto com `ngForm`, se por o atributo `required`, ele irá 
apresentar uma mensagem que o campo é obrigatório, e se colocar o atributo `pattern`, ele irá seguir um padrão, 
isso nos permite especificar uma expressão regular que pode ser usada como padrão para validar os campos, Ex:
`pattern="B.*"`
no ex acima, o a campo é necessário começar com a letra B e, 

