# ¿Cuáles serían las cualidades para un código limpio?



1.	**Debe cumplir con el principio de responsabilidad única:** Cada clase, cada método o cualquier otra entidad debería permanecer sin cambios. Dicho de otra manera, una clase debe tener una y sólo una causa por la cual pueda ser modificada.
2. **El lenguaje el elegido para escribir el código debería parecer que fue hecho para el problema:**
   No es el lenguaje lo que hace parecer simple a un problema, sino que es el desarrollador que hace que el lenguaje parezca simple.
3.	**Don't Repeat Yourself:** La modificación de un único elemento del sistema no requiere cambios en otros elementos con los que no tenga relación lógica.
4. **Comprensible y fácil de leer:** Se debe sentir que es fácil de leer por cualquier desarrollador sin pasar horas revisándolo, para lograr esto el código debe ser simple, la simplicidad tiene que ser un elemento clave del diseño, y se debe evitar la complejidad innecesaria.
5.	**Puede ser extendido fácilmente por cualquier otro desarrollador:** No escribimos código para nosotros mismos, Escribimos código para otro desarrollador. Así que hay que hacerlo simple y documentado.
6.	**Debe tener dependencias mínimas:** Mientras más dependencias tenga, más difícil va a ser mantener y cambiar en el futuro.
7.	**Pequeño es mejor:** El código debe ser mínimo. Tanto las clases como los métodos deberían ser cortos, me refiero a pocas líneas de código. Debe estar bien dividido, Mientras más este dividido, más fácil se vuelve leerlo.
8.	**Debe tener pruebas unitarias y de aceptación:** El código sin pruebas no es un código limpio, ¿cómo podríamos mantener o extender el código sin miedo a que se rompa?, ¿Cómo sabemos si nuestro código cumple con los requerimientos? La respuesta es fácil, escribiendo pruebas, esto nos ahorrara dolores de cabeza, y mucho tiempo.
9.	**Expresividad:** La expresividad del código significa que tiene nombres significativos. Estos nombres deben expresar la intención. No tienen que resultar engañosos. Tienen que ser distintivos. La expresividad hace que el código se documente a sí mismo, resultando en que sea menos importante la documentación





# ¿Cuáles serían los estándares según tú para un buen proyecto?

Para mí el estándar a seguir en un proyecto exitoso en general, es mucho antes de crear código. es entender muy bien la lógica del negocio, las necesidades que se deben resolver, teniendo estructurado bien la comprensión del negocio es necesario hacer un benchmarking de lo que ofrece el mercado para poder crear la solución a nuestra necesidad, como que benchmarking? claro tenemos que ver que lenguaje, que framework, que motor de base de datos, que proveedor de cloud se adapta de mejor manera a nuestra solución, siempre buscando el máximo provecho entre calidad, tiempo y recursos. Seguido de esto se debe tener en cuenta la arquitectura que se va usar, y los estándares de código que se tengan definidos dentro del grupo de desarrollo para siempre tener un código limpio eficiente y eficaz. Establecer y dejar claro las responsabilidades de cada integrante del equipo de desarrollo, para que siempre se esté atacando el mismo foco en la solución que se plantea.




# ¿Qué patrones conoce? ¿y Utiliza?

Hay diferentes tipos patrones, conozco dos tipos, patrones arquitectónicos y patrones de diseño, a continuación, mencionare y enumerare los que conozco y cuáles son los que uso a diario.

## Patrones arquitectónicos

### Conocidos:

1. Patrón de capas.
2. Patrón cliente servidor.
3. Patrón de filtro de tubería
4. Modelo vista controlador

### Usados diariamente:

1. Patrón cliente servidor.
2. Modelo vista controlador.

## Patrones de diseño:

### Conocidos:

- **Creacionales:** 
  1. Factory method
  2. Singleton
  3. Prototype
- **Estructurales:**
  1. Adapter
  2. Facade
- **Comportamiento:**
  1. State
  2. Iterator
  3. Chain of responsibility
  4. Observer
  5. Strategy

### Usados:
* Factory method
* Adapter
* Facade
* State
* Observer
