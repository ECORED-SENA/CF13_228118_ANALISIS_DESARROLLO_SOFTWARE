<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 JavaScript 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-5(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/33.svg', alt='')
      .col-lg-11(data-aos="fade-left")
        p.mb-0 #[b JavaScript] es un lenguaje de programación que se integra en páginas web y es interpretado por los navegadores. La característica de ser “interpretado” se refiere a que el código se ejecuta de manera secuencial, línea por línea, por el intérprete del navegador, primordialmente en el lado cliente. Sin embargo, con el desarrollo de tecnologías como Node.js, JavaScript también se puede ejecutar en el lado del servidor, a diferencia de otros lenguajes de programación que requieren compilación. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-5
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6: img(src='@/assets/curso/temas/34.svg', alt='')
            .col-lg-10
              p Este lenguaje está especialmente diseñado para permitir la creación de contenido HTML de forma dinámica. Esto significa que los programas escritos en #[span.color-azul JavaScript] pueden generar y manipular etiquetas HTML automáticamente, enriqueciendo significativamente el diseño de las interfaces web.
    p.mb-5(data-aos='fade-right') Es crucial distinguir entre #[b JavaScript y Java], ya que, a pesar de la similitud en sus nombres, son lenguajes de programación completamente diferentes. Esto puede llevar a confusiones entre quienes no están familiarizados con ellos. #[b Para integrar código JavaScript en una página web, existen varias maneras, entre ellas:]
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-lg-0.mb-3
        .tarjeta(style="background-color: #f2e5fd ").p-4
          ul.lista-ul--color
            li
              i.fas.fa-circle.fa-xs(style="color:#8722E2 ")
              | Con código que se agrega dentro de la misma página. 

            li
              i.fas.fa-circle.fa-xs(style="color:#8722E2 ")
              | Con archivos independientes que se almacenan en rutas diferentes a la página. 

            li
              i.fas.fa-circle.fa-xs(style="color:#8722E2 ")
              | Con código referenciado en otras páginas web ya publicadas en la red internet. 
      .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/35.svg', alt='')
    p.mb-5(data-aos='fade-right') Explorando la integración de #[b JavaScript] en la web, esta guía visual proporciona ejemplos claros y concisos de cómo insertar código JavaScript directamente en el HTML, así como cómo incluirlo desde archivos externos, y los resultados esperados de dicha implementación. 
    .f-3-1.mn.p-5.mb-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row
            .col-lg-6.mb-4.mb-md-0
              h4: span.color-morado Código interno 
              p Aquí se incluye el código dentro del tag &lt;script&gt;&lt;/script&gt; después del tag &lt;title&gt;. Ejemplo de código interno: 
            .col-lg-6
              .tarjeta-codigo.p-5.mb-5
                pre.language-html(language="html").mt-5
                  code
                    | &lt;html&gt; 
                    | &lt;head&gt; 
                    | &lt;title&gt; 
                    | Página web con código JavaScript embebido 
                    | &lt;/title&gt; 
                    | &lt;script type=”text/javascript”&gt; insertar tag con atributo type indicando el uso del lenguaje java JavaScript alert(“Mi primer mensaje usando JavaScript”);    
                    | &lt;/script&gt;  
                    | &lt;/head&gt; 
                    | &lt;body&gt;  
                    | &lt;p&gt;Contenido de la página web&lt;/p&gt; 
                    | &lt;/body&gt; 
                    | &lt;/html&gt; 
          .row
            .col-lg-6.mb-4.mb-md-0
              h4: span.color-morado Inclusión de código 
              p Desde archivos con extensión .js en rutas diferentes a la de la página. 
                br
                br
                |Ejemplo inclusión código con extensión .js 
            .col-lg-6
              .tarjeta-codigo.p-5.mb-5
                pre.language-html(language="html").mt-5
                  code
                    |&lt;html&gt; 
                    |&lt;head&gt; 
                    |&lt;title&gt; 
                    |Página web con código JavaScript embebido desde otros archivos fuera de la página actual. 
                    |&lt;/title&gt; 
                    |&lt;script src=“static/js/miCodeUno.js”&gt;&lt;/script&gt; 
                    |&lt;script src=“static/js/miCodeDos.js”&gt;&lt;/script&gt; 
                    |&lt;script src=“static/js/miCodeTres.js”&gt;&lt;/script&gt; 
                    |&lt;/head&gt; 
                    |&lt;body&gt;  
                    |&lt;p&gt;Contenido de la página web&lt;/p&gt; 
                    |&lt;/body&gt; 
                    |&lt;/html&gt; 
          .row
            .col-lg-6.mb-4.mb-md-0
              h4: span.color-morado Resultado 
              p El resultado de la ejecución de los códigos anteriores se muestra a continuación: 
            .col-lg-6.col-7
              img(src='@/assets/curso/temas/36.svg', alt='')
          .row
            .col-lg-6.mb-4.mb-md-0
              h4: span.color-morado Ejemplo inclusión de código con URL  
              p A continuación, se presenta cómo incluir código JavaScript desde archivos externos con extensión .js, alojados en URL diferentes a la de la página: 
            .col-lg-6
              .tarjeta-codigo.p-5.mb-5
                pre.language-html(language="html").mt-5
                  code
                    | &lt;html&gt; 
                    | &lt;head&gt; 
                    | &lt;title&gt; 
                    | Página web con código JavaScript embebido desde otros archivos fuera de la página actual. 
                    | &lt;/title&gt; 
                    | &lt;script src=“https://www.sitiouno.com/developmentUno.js” crossorigin&gt;&lt;/script&gt; 
                    | &lt;/head&gt; 
                    | &lt;body&gt;  
                    | &lt;p&gt;Contenido de la página web&lt;/p&gt; 
                    | &lt;/body&gt; 
                    | &lt;/html&gt;  
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Versiones
    .f-3-2.mn.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-4.mb-lg-0.mb-3
          .p-4(style="background-color: #d6e1fd ")
            p.mb-0 El lenguaje JavaScript fue creado a mediados de la década de 1990 por Brendan Eich, con el objetivo de mejorar la experiencia del usuario. Durante esa época, la velocidad de internet era considerablemente lenta, y surgió la necesidad de un lenguaje de programación ejecutado del lado del cliente para agilizar las peticiones web. 
        .col-lg-4.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/37.svg', alt='')
        .col-lg-4
          .p-4(style="background-color: #FFEFAF ")
            p.mb-0 Al año siguiente de su creación, se reconoció la importancia de estandarizar el lenguaje, dado que cada navegador lo interpretaba de manera diferente. Esto llevó a la propuesta y adopción de un estándar conocido como ECMA-262 Edición 1, también referido como ES1 (ECMAScript 1). 
      h4.mb-4 La evolución del lenguaje se muestra en la siguiente línea de tiempo:
      img.d-none.d-lg-block(src='@/assets/curso/temas/38.svg', alt='')
      img.d-block.d-lg-none(src='@/assets/curso/temas/39.svg', alt='')
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Sintaxis
    .f-3-3.mn.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-9.mb-lg-0.mb-3
          .p-4(style="background-color: #f2e5fd")
            p.mb-0 En JavaScript, se dispone de varios elementos fundamentales para la construcción de programas, tales como variables, constantes, operadores y expresiones. Las expresiones se forman mediante la combinación de variables, constantes y operadores. También se utilizan sentencias, que organizan el flujo del programa en un orden lógico, y funciones, que agrupan conjuntos de sentencias para resolver problemas específicos. Para manejar adecuadamente estos elementos, existen ciertas reglas de sintaxis y buenas prácticas que se deben seguir al escribir el código, las cuales son:
        .col-lg-3.col-6: img(src='@/assets/curso/temas/40.svg', alt='')
      .row.justify-content-center.mb-5
        .col-lg-7(data-aos="fade-right").mb-lg-0.mb-3
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
            .p-4(titulo="Variables ")
              p.mb-4 Se definen como espacios de memoria reservada para almacenar algún dato y que se identifican con un nombre para definirlas, se debe utilizar la palabra “var” seguida del nombre, el símbolo igual y un valor finalizado con punto y coma. Ejemplo de variable: 
              pre.language-js.tarjeta(style="background-color: #110628" language="js").p-4.d-inline-block
                code var nombreVariable= 20; 
                  br
                  |var a=5; 
                  br
                  |var b=3; 
                  br
                  |var multiplicar=a*b;  
            .p-4(titulo="Las constantes ")
              p.mb-4 Como su nombre lo indica, sirven para definir valores únicos que se pueden utilizar en diferentes partes del programa; se definen con la palabra “const” seguida del nombre de variable, el símbolo igual y termina con punto y coma. Ejemplo de constante: 
              pre.language-js.tarjeta(style="background-color: #110628").p-4.d-inline-block
                code cons gravedadTierra=9.8;  
            .p-4(titulo="Los operadores ")
              p.mb-4 Se definen en tres grupos: operadores de asignación, operadores de relación y los operadores lógicos. 
              ul.lista-ul--color
                li
                  i.fas.fa-circle.fa-xs(style="color: #8722E2")
                  | Los operadores de asignación son igual =, suma +=, resta -=, multiplicación *=, división /= y módulo %. 
                li
                  i.fas.fa-circle.fa-xs(style="color: #8722E2")
                  | Los operadores de relación son mayor >, mayor igual >=, menor <, menor igual <=, igual que == y diferente de !=. 
                li
                  i.fas.fa-circle.fa-xs(style="color: #8722E2")
                  | Los operadores lógicos para evaluar verdadero o falso son AND && , OR || y NOT !.
              p #[b ¡Nota!] Las sentencias se conforman como la combinación de constantes, variables y operadores.  

              pre.language-js.tarjeta(style="background-color: #110628" ).p-4.d-inline-block
                code var nombreVariable= 20; 
                  br
                  |cons gravedadTierra=9.8; 
                  br
                  |var resultado =  nombreVariable-gravedadTierra; 
            .p-4(titulo="Las funciones ")
              p.mb-4 Permiten identificar con un nombre una acción dentro de un programa, es la combinación de sentencias, variables, constantes y expresiones; se escribe utilizando la palabra function seguida de una lista de parámetros de entrada, separados por comas, encerrados entre paréntesis (), en donde el conjunto de sentencias que operan esas entradas se encierran entre llaves {}. Ejemplo de función: 
              pre.language-js.tarjeta(style="background-color: #110628").p-4.d-inline-block
                code function sumarDatos(parametroUno, parametroDos, parametroTres) { 
                  br
                  |var a= parametroUno; 
                  br
                  |var b= parametroDos; 
                  br
                  |var c= parametroTres; 
                  br
                  |var resultadoSuma=a+b+c; 
                  br
                  |} 
        .col-lg-5.col-7: img(src='@/assets/curso/temas/41.png', alt='') 
    Separador 
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Tipos de datos
    p.mb-5(data-aos='fade-right') En JavaScript, una característica fundamental es su tipado dinámico, lo cual significa que el tipo de dato de una variable puede cambiar según el dato asignado por el usuario. Esto ocurre cuando se define una variable utilizando la palabra reservada var, let o const. 
    .f-3-4.mn.p-5.mb-5
      .tarjeta.tarjeta--gris.p-4.mb-5
        LineaTiempoC.color-acento-botones(text-small)
          .p-4(titulo="Variable de caracteres")
            p.mb-3 Permite almacenar cadenas de texto dentro de las comillas, para bajar un renglón en el texto se debe utilizar \n, para agregar un tabulador \t, para comilla simple \’, para comillas dobles \”, y para barra inclinada \\. Ejemplo de variable de caracteres: 
            pre.language-js.tarjeta(style="background-color: #110628").p-4.d-inline-block
                code var nombreApellidos=”JUAN ESTEBAN GOMEZ \n”; 
                  br
                  |var mensaje =”Este es mi primer mensaje de bienvenida \t  \’VALOR\’ ”; 
          .p-4(titulo="Variables numéricas ")
            p.mb-3 Se utilizan para definir variables enteras (integer), reales (float), hexadecimal (0x) y octal (0). Ejemplo de variable numérica: 
            pre.language-js.tarjeta(style="background-color: #110628").p-4.d-inline-block
                code var formatoEntero=45; 
                  br
                  |var formatoFlota=7845.123; 
                  br
                  |var formatoHexadecimal=0xF34; 
                  br
                  |var formatoOctal=0568; 
          .p-4(titulo="Variables tipo arreglo ")
            p.mb-3 Denominados también como matrices o vectores y se usan para definir variables que se relacionan en un mismo conjunto; se definen entre corchetes separados por coma y valores entre comillas. 
              br
              br
              |Ejemplo de variable tipo arreglo: 
            pre.language-js.tarjeta(style="background-color: #110628").p-4.d-inline-block
                code var diasSemana = [“Lunes”, “Martes”, “Miercoles”, “Jueves”, “Viernes”,”Sabado”, “Domingo”]; 
          .p-4(titulo="Variables tipo lógico ")
            p.mb-3 Permiten definir variables booleanas falso o verdadero. Ejemplo de variable de tipo lógico:
            pre.language-js.tarjeta(style="background-color: #110628").p-4.d-inline-block
                code var esCasada=true; 
                  br
                  |var tieneHijos=false; 
          .p-4(titulo="Variables tipo objeto ")
            p.mb-3 Son variables que, a diferencia de los arreglos, se definen dentro de llaves con el nombre de propiedad y su valor. Ejemplo de variable tipo objeto: 
            pre.language-js.tarjeta(style="background-color: #110628").p-4.d-inline-block
                code var miCarro={ 
                  br
                  |placa=’X45-56’, 
                  br
                  |modelo=’2015’, 
                  br
                  |marca=’HONDA’, 
                  br
                  |} ; 
                  br
                  |alert(“Esta es la placa de mi carro…”+miCarro.placa);
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2  3.4 Estructuras de control
    .f-3-5.p-5.mn.mb-5
      p.mb-5(data-aos='fade-right') programador con lenguajes de programación y la gente está codificando.En un programa JavaScript, las líneas de código se ejecutan de forma secuencial, es decir, en el orden en que aparecen: primero la primera línea, luego la segunda, la tercera, y así sucesivamente, nunca invirtiendo este orden, lo cual determina el flujo del programa. Durante este flujo, puede surgir la necesidad de tomar decisiones basadas en condiciones específicas, momento en el cual se emplean las estructuras condicionales, que pueden derivar en acciones diferentes dependiendo de si la condición evaluada resulta verdadera o falsa. Asimismo, en ciertos puntos del programa puede ser necesario iterar sobre estructuras de datos, como arreglos, para lo cual se utilizan bucles o ciclos. 
      .titulo-tres.mb-4: h3.mb-0 El condicional if
      p.mb-4(data-aos='fade-right') El más conocido de los condicionales, si se cumple la condición continúa ese camino. Se escribe entre paréntesis después de la palabra reservada if. Ejemplo con condicional if:  
      .row.justify-content-center.mb-4
        .col-lg-6
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code ar edad=17; 
                br
                |//Condicional para saber si es mayor de edad 
                br
                |if(edad > 18 ){ 
                br
                |alert(“Ya puede solicitar la cédula”); 
                br
                |} 
      .titulo-tres.mb-4: h3.mb-0 Condicional if/else 
      p.mb-4(data-aos='fade-right') Este condicional indica el camino alterno que puede seguir el programa en el caso que no se cumpla la condición de la palabra reservada if. Ejemplo con condicional if/else: 
      .row.justify-content-center.mb-4
        .col-lg-6
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code var edad=17; 
                br
                |var mensaje; 
                br
                |//Condicional para saber si es mayor de edad 
                br
                |if(edad > 18 ){ 
                br
                |mensaje=“Ya puede solicitar la cédula”; 
                br
                |}else{ 
      .titulo-tres.mb-4: h3.mb-0 Operador ternario
      p.mb-4(data-aos='fade-right')  Es una forma de escribir el condicional if/else pero de una manera más corta; se identifica con el símbolo “?”. Ejemplo con operador ternario. 
      .row.justify-content-center.mb-4
        .col-lg-6
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code var edad=17; 
                br
                |//Operador ternario: (condición ? Verdadero : Falso) 
                br
                |var mensaje = edad>18 ? ‘Cédula’: ’Tarjeta Identidad’; 
      .titulo-tres.mb-4: h3.mb-0 Condicional if múltiple
      p.mb-4(data-aos='fade-right') Sirve para evaluar múltiples condiciones conservando la estructura del condicional if y para el caso alternativo se escribe la palabra reservada if else acompañada de la nueva condición a cumplir. Ejemplo con condicional if múltiple. 
      .row.justify-content-center.mb-4
        .col-lg-6
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code var edad=17; 
                br
                |var mensaje; 
                br
                |//Condicional para saber si es mayor de edad 
                br
                |if(edad == 18 ){ 
                br
                |mensaje=“Ya puede solicitar la cédula”; 
                br
                |} if else (edad > 18 ){ 
                br
                |mensaje=“Tu cédula ya fué tramitada”; 
                br
                |} if else (edad < 18 ){ 
                br
                |mensaje=“Aún eres menor de edad”; 
                br
                |}else{ 
                br
                |mensaje=“Verifica el número de edad ingresado”; 
                br
                |} 
                br
                |alert(mensaje); 
      .titulo-tres.mb-4: h3.mb-0 Condicional switch
      p.mb-4(data-aos='fade-right') Define casos específicos a realizar en el caso de que la variable expuesta como condición sea igual a los valores que se especifican mediante los case. Ejemplo con condicional switch:  
      .row.justify-content-center.mb-4
        .col-lg-6
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code var nota = 7; 
                br
                |switch (nota) { 
                br
                |case 10: 
                br
                |calificacion = “Sobresaliente”; 
                br
                |break; 
                br
                |case 9: 
                br
                |case 8: 
                br
                |calificacion = “Notable”; 
                br
                |break; 
                br
                |case 7: 
                br
                |case 6: 
                br
                |calificacion = “Bien”; 
                br
                |break; 
                br
                |case 5: 
                br
                |calificacion = “Suficiente”; 
                br
                |break; 
                br
                |case 4: 
                br
                |case 3: 
                br
                |case 2: 
                br
                |case 1: 
                br
                |case 0: 
                br
                |calificacion = “Insuficiente”; 
                br
                |break; 
                br
                |default: 
                br
                |// Cualquier otro caso 
                br
                |calificacion = “Nota errónea”; 
                br
                |break; 
                br
                |} 
                br
                |alert(“Resultado”+calificacion); 
              
    .titulo-tres.mb-4: h3.mb-0 Bucles e iteraciones:
    p.mb-5(data-aos='fade-right') Los bucles son herramientas valiosas para automatizar tareas repetitivas, especialmente cuando se manejan grandes volúmenes de datos. Para implementar un bucle eficazmente, es crucial entender los siguientes conceptos: 
    .f-3-6.p-5.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/42.svg', alt='')
        .col-lg-9
          SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-primario.p-5
                h4.text-center: span.color-azul Iteración 
                p.text-center.text-white Representa el número de veces que el bucle ha ejecutado la condición. 
              
            .tarjeta.color-primario.p-5
                h4.text-center: span.color-azul Contador 
                p.text-center.text-white Es una variable que registra el número actual de iteraciones del bucle. 
              
            .tarjeta.color-primario.p-5
                h4.text-center: span.color-azul Incremento 
                p.text-center.text-white Es el valor que se añade al contador tras completarse un ciclo, lo cual es esencial para acercar el bucle a su condición de finalización. 
              
            .tarjeta.color-primario.p-5
                h4.text-center: span.color-azul Bucle infinito
                p.text-center.text-white Se produce cuando el incremento al contador no se realiza, llevando a que el bucle nunca finalice. Es imperativo evitar esta situación para prevenir problemas de rendimiento en el programa. 
    h5.mb-4 A continuación, se presentan varios ejemplos de bucles: 
    .titulo-tres.mb-4: h3.mb-0 Bucle while
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        .p-4(style="background-color: #f2e5fd ")
          ul.lista-ul--color
            li
              i.fas.fa-circle.fa-xs(style="color: #8722E2")
              | Antes de entrar en el bucle while, se inicializa la variable i. 
            li
              i.fas.fa-circle.fa-xs(style="color: #8722E2")
              | Antes de realizar la primera iteración del bucle, se comprueba la condición. 
            li
              i.fas.fa-circle.fa-xs(style="color: #8722E2")
              | Si la condición es verdadera, se hace lo que está dentro del bucle. 
            li
              i.fas.fa-circle.fa-xs(style="color: #8722E2")
              | Se muestra por pantalla el valor de i y luego incrementamos el valor actual de i en 1.
            li
              i.fas.fa-circle.fa-xs(style="color: #8722E2")
              | Se vuelve al inicio del bucle para hacer una nueva iteración. Se comprueba de nuevo la condición del bucle. 
            li
              i.fas.fa-circle.fa-xs(style="color: #8722E2")
              | Cuando la condición sea falsa, se sale del bucle y continúa el programa. 
      .col-lg-3.col-7: img(src='@/assets/curso/temas/43.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta-codigo.p-5.mb-5.h-100
            pre.language-html(language="html").mt-5
              code i = 0; // Inicialización de la variable contador 
                br
                |// Condición: Mientras la variable contador sea menor de 5 
                br
                |while (I < 5) { 
                br
                |console.log(“Valor de I:”, i); 
                br
                |i = i + 1; // Incrementamos el valor de i 
                br
                |} 
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta-codigo.p-5.mb-5.h-100
            pre.language-html(language="html").mt-5
              code // for (inicialización; condición; incremento) 
                br
                |for (i = 0; i < 5; i++) { 
                br
                |console.log(“Valor de I:”, i); 
                br
                |} 
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta-codigo.p-5.mb-5.h-100
            pre.language-html(language="html").mt-5
              code for (i = 0, j = 5; i < 5; i++, j—) { 
                br
                |console.log(“Valor de I y j:”, I, j); 
                br
                |} 
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta-codigo.p-5.mb-5.h-100
            pre.language-html(language="html").mt-5
              code var dato = [2, 6, 5, 1, 18, 44]; 
                br
                |var msgForNormal = ‘’; 
                br
                |var msgForIn = ‘’; 
                br
                |//for normal 
                br
                |for (var I=0; I<dato.length; I++) {  
                br
                |msgForNormal = msgForNormal + dato[i] + ‘ - ‘;  
                br
                |} 
              
              
    
    













</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
