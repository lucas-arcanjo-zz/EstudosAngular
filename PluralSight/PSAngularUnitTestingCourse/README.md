## Testes automatizados 
Existem 3 tipos de testes automatizados

1 - Testes unitários (Unit testing)
2 - teste de ponta a ponta (End to end testing)
3 - Integração ou teste funcionais (Integration or functional testing)

### teste de ponta a ponta (End to end testing)

O teste de ponta a ponta é o tipo de teste feito em um aplicativo ativo e em execução, 
isso significa que o aplicativo completo com um banco de dados ao vivo, servidor ao vivo, front-end ao vivo.
Então escrevemos testes que exercitam esse aplicativo ao vivo.

O Benefício do teste de ponta a ponta é que você pode validar o aplicativo como um todo

### Testes unitários (Unit testing)

O teste unitário é feito contra uma únida unidade de código, geralmente, a unidade do código é uma 
classe única

### Integração ou teste funcionais (Integration or functional testing)

A integração e o teste funcional são definidos como mais de uma unidade

### Mocking

Mockings são muito importantes para teste unitários, já que ele faz uma simulação que se parece com a real,
a diferença é que podemos controlar o que ela faz

### tipos de mock

1 - Dummies
2 - Stubs
3 - Spies

Tipos de testes unitários em angular

- Isolated
- Integration
 - Shallow
 - Deep

### Tools of Unit Testing with Angular

- Karma
- Jasmine

## Karma
Karma é o executor de testes em um navegador

## Jasmine
Jasmine já é a ferramenta que usamos para criar mocks

Existem outras ferramentas para test,  como o `Jest`, também tem o `Mocha`, `Chai` que podem substituir o Jasmine.
também há o `Sinon`, `TestDouble`, `wallaby`, `cypress`.

# Mão Na Massa

`describe()` recebe dois parâmetros: uma `string`, e uma `função callback` que estará os testes

`beforeEach()` apenas recebe o retorno da chamada do describe(), é uma boa pratica iniciar uma variável no 
describe(), e fazer ela retonar vazio no beforeEach(), para não ter problemas testando outros testes.

`it()` assim como o describe, é usado dois parâmetros: uma `string`, do que deve ser feito, em geral, é iniciado com a 
palavra 'deve' inicialmente. e o segundo é uma `callback`

`expect()` espera um determinado resultado

`toBe()` afirma que é true;

Para executar tests, pode usar o comando `ng test`, ou `npm test`, em seguida irá abrir uma página do karma.

### Writing good Unit Testing

Existem alguns princípios de escrever bons testes de unidade.

Uma delas, é primeiro saber como estrutura um teste. Testes de estruturação seguem o que é chamado de padrão AAA.

1 - _Arrange_ todas as pré-condições e entrada necessárias.
2 - _Act_(Action) no objeto ou classe sob teste.
3 - _Asserts_ que os resultados esperados ocorreram.

`DRY` (don't repeat yourself)

O DRY, ou não se repita, é um conceito comum usado em programação, quando seguimos o princípio do DRY:
    - Removemos a duplicação de código
Porém, bons testes operam sob um princípio diferente, chamado `DAMP`.

`DAMP`

Segue os princípios do `DRY`, mas o código é repetido, sí necessário  

### Teste isolado

Teste isolado é testar apenas a classe do component/pipe/service, não necessáriamente testar decorators, apenas
a classe. Isso é um teste isolado

### Teste de integração

`Testbed` é o que nos permite testar o componente e seu modelo juntos.
`NO_ERRORS_SCHEMA` usado para ocultar problemas, mas tem seus perigos, sempre que usar tenha total certeza do que 
deseja, pois pode ocultar erros importantes.
`fixture` usado para acessar um component já existente, um wrapper(embrulho) em torno de outra coisa.
o fixture, alem de ter a propriedade nativeElement, ele possui também o debugElement, que assim como o nativeElement, 
tem acesso DOM, mas seu acesso é como um wrapper(embrulho) em torno do nó do DOM real.
Quando queremos encontrar um elemento específico, podemos usar o `nativeElement.querySelector('tagX')`, ou 
o `debugElement.query(By.css('tagX'))`
o `debugElement` é usado da mesma forma que o `fixture`, ele faz um wrapper, por exemplo de um routerLink, e pode lidar
com diversos componentes.

`detectChanges()` usado para detectatar mudança em um component, muito usado para tag html que recebem 
um valor `{{value}}`
