benefits of angular
architecture
varioues tools 
tips, tickes, and gotchas

O angular é baseado em padrões
é mais moderno, utilizando paradigmas mais modernos
melhor desempenho

app da web progressivo?
lazy loading

advanced features - angular 
server-side rendering
mobile
angular language service
ngUpgrade

### Pontos importantes
- No angular, em um componente, o decorator que define os metadados.(selector, template, etc)
já em um modulo, dentro do decorador `ngModule`, as propriedades são matrizes

- Uma interface é um especificação que identifica um conjunto relacionado de propriedades e métodos

existe 2 formas de usar uma interface
exemplo 1:
```
export interface IProduct {
    product: number;
    productName: string;
}
```
As a type
`products: IProduct[] = [];`

exemplo 2:
```
export interface DoTiming {
    count: number
    stop(): void;
}
```
As feature set

export class myComponent `_implements_` DoTiming {
    count....
    strop()...
}
