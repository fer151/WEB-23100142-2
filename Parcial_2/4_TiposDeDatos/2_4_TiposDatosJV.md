#  Tipos de datos en JavaScript

| Tipo de Dato | Categoría | Resultado de `typeof` | Ejemplo | Descripción |
|---------------|------------|-----------------------|----------|--------------|
| `number` | Primitivo | `"number"` | `42`, `3.14`, `NaN`, `Infinity` | Representa números, ya sean enteros o decimales. |
| `bigint` | Primitivo | `"bigint"` | `123n`, `BigInt(9999999999999999)` | Permite trabajar con números enteros muy grandes. |
| `string` | Primitivo | `"string"` | `"Hola"`, `'Mundo'`, `` `Template` `` | Representa texto o cadenas de caracteres. |
| `boolean` | Primitivo | `"boolean"` | `true`, `false` | Solo tiene dos valores: verdadero o falso. |
| `undefined` | Primitivo | `"undefined"` | `let x;` → `undefined` | Valor por defecto de variables no inicializadas. |
| `null` | Primitivo (sentinela) | `"object"` | `let x = null;` | Representa la ausencia intencional de valor. |
| `symbol` | Primitivo | `"symbol"` | `Symbol('id')` | Crea identificadores únicos. |
| `object` | No primitivo | `"object"` | `{ nombre: "Ana", edad: 20 }` | Colección de pares clave–valor; puede incluir arreglos y funciones. |

### Fernando Guadalupe Campos Villanueva - 23100142
---