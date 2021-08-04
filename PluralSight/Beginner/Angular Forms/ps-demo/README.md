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

### Two-way-data-binding

a diretiva `ngModel` sendo utilizada da forma `[(ngModel)]` consegue receber tanto as alterações do arquivo ts, como atualizar o arquivo html, duas vias 
que podem se comunicar.