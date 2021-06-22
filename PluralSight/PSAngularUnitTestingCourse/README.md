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