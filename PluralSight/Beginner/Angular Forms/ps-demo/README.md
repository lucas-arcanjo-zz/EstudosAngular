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