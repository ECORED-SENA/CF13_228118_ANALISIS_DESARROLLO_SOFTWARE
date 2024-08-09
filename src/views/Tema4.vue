<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Introducción de NoSQL
    .f-4-1.mn.p-5.pt-0
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          .p-4(style="background-color: #f2e5fd ")
            p.mb-0 NoSQL (“no SQL”) comprende una amplia clase de sistemas de gestión de bases de datos que difieren del modelo clásico de SGBDR (Sistema de Gestión de Bases de Datos Relacionales) en aspectos importantes, siendo el más destacado que no usan SQL como lenguaje principal de consultas.  Los datos almacenados no requieren estructuras fijas, como tablas; normalmente, no soportan operaciones JOIN ni garantizan completamente ACID (atomicidad, consistencia, aislamiento y durabilidad), y, habitualmente, escalan bien horizontalmente, es decir, pueden aumentar la estructura de manera sencilla. Los sistemas NoSQL se denominan, a veces, “no solo SQL” para subrayar el hecho de que también pueden soportar lenguajes de consulta de tipo SQL. 
        .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/56.png', alt='')

    
    Separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1 Definición de NoSQL 
    p.mb-5(data-aos='fade-right') La web 2.0 (donde quienes suministran el contenido son los usuarios) trajo consigo grandes necesidades de datos e infraestructura tecnológica, principalmente para empresas como Google, Amazon y Facebook. Estas empresas tuvieron que buscar soluciones propias a estos problemas, enfocándose en la gran cantidad de almacenamiento y el crecimiento de sistemas web con acceso a información en tiempo real. Surgió la necesidad de proporcionar información gestionada y procesada desde grandes volúmenes de datos. Dado que las bases de datos relacionales no respondían de forma adecuada a esta necesidad, especialmente en tiempos de alta demanda, nacen las bases de datos NoSQL. 


    .fondo-slyder.mn.p-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center.mb-5
            .col-lg-4.mb-lg-0.mb-3
              h5.color-morado Escalabilidad
              p.mb-0 Es la capacidad que tiene un sistema de ser configurado en #[em software] o #[em hardware], para mejorar la respuesta a las exigencias o nuevas demandas de capacidad de procesamiento o almacenamiento (conservando las mismas funcionalidades). Actualmente, se usa mucho el término ‘escalabilidad vertical’, para referirse a este tipo de escalabilidad.
            .col-lg-6: img(src='@/assets/curso/temas/57.png', alt='')
          .row.justify-content-center.mb-5
            .col-lg-4.mb-lg-0.mb-3
              h5.color-morado Escalabilidad horizontal
              p.mb-0 Consiste en potenciar el rendimiento del sistema desde un aspecto de mejora global, a diferencia de aumentar la potencia de una única parte del mismo. Este tipo de escalabilidad se basa en la modularidad de su funcionalidad (Junta de Andalucía, s. f.), es decir, que las funcionalidades se puedan extender con la misma facilidad con la que mejoran el rendimiento y capacidad.
            .col-lg-6: img(src='@/assets/curso/temas/58.png', alt='')
          .row.justify-content-center.mb-5
            .col-lg-4.mb-lg-0.mb-3
              h5.color-morado Escalabilidad vertical y horizontal
              p.mb-0 Las bases de datos no relacionales están diseñadas para ofrecer sistemas con altas capacidades de escalabilidad vertical y horizontal.
            .col-lg-6: img(src='@/assets/curso/temas/59.png', alt='')
    Separador
    .f-4-2.mn.p-5.pt-0
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.2 Cómo diferenciar NoSQL de SQL
      p.mb-5(data-aos='fade-right') Al utilizar el término NoSQL no se hace referencia a una base de datos específica o a un tipo particular de base de datos, sino que define un conjunto de tipos de bases de datos que son diferentes a las bases de datos convencionales (relacionales). La principal diferencia entre las bases de datos NoSQL y las bases de datos relacionales tradicionales es que las NoSQL emplean una forma de almacenamiento no estructurado o estructuras diferentes a tablas. Simplificando la estructura de almacenamiento, las NoSQL pueden concentrarse en procesar grandes volúmenes de datos. 
        br
        br
        |A continuación, se presenta una comparación rápida de las funciones de NoSQL con las bases de datos relacionales. 
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 3.
            span Comparación de las funciones de NoSQL 
          .tabla-a.color-acento-botones.mb-5
            table
              thead
                tr.border-0(style="background-color: #00ffdf")
                  th Característica 
                  th Base de datos NoSQL 
                  th Precio Unitario 
              tbody
                tr(style="background-color: #ecf2ff ")
                  td Desempeño 
                  td Alto 
                  td Bajo
                tr(style="background-color: #ecf2ff ")
                  td Fiabilidad 
                  td Pobre 
                  td Buena 
                tr(style="background-color: #ecf2ff ")
                  td Disponibilidad 
                  td Buena 
                  td Buena 
                tr(style="background-color: #ecf2ff ")
                  td Consistencia 
                  td Pobre 
                  td Buena 
                tr(style="background-color: #ecf2ff ")
                  td Almacenamiento de datos 
                  td Optimizado para muchos datos 
                  td Mediano o grande 
                tr(style="background-color: #ecf2ff ")
                  td Estabilidad 
                  td Alta 
                  td Alta (pero más costosa) 
      p.mb-5(data-aos='fade-right').fw-bold A continuación, se presentan algunas ventajas y desventajas que tiene cada uno de estos tipos de bases de datos: 
      .row.justify-content-center.mb-5
        .col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
          .p-5(style="background-color: #8722e2 ").h-100 
            img.d-flex.m-auto(src='@/assets/curso/temas/60.svg', alt='' style="width: 60px ").mb-3
            h4.mb-5.text-white Ventajas
            p.text-white Contrario a las bases de datos relacionales, las NoSQL están basadas en key-value pairs (clave valor).
            p.text-white Las NoSQL tienen diferentes tipos de almacenamiento, como el almacén de columnas, documentos, claves, valor de gráficos (capas), objetos, en formato XML y otros modos de tipos de datos. Las bases de datos NoSQL de código abierto tienen una implementación rentable económicamente, al no requerir licencias ni #[em hardware] de precio alto.
            p.text-white.mb-0 Trabajando con bases de datos NoSQL, la expansión de funcionalidades es más fácil y económica que usando bases de datos relacionales.
        .col-lg-5.mb-lg-0.mb-3(data-aos="fade-right")
          .p-5(style="background-color: #00ffdf ").h-100 
            img.d-flex.m-auto(src='@/assets/curso/temas/61.svg', alt='' style="width: 60px ").mb-3
            h4.mb-5 Desventajas
            p Casi todas las bases NoSQL no admiten funciones de fiabilidad o integridad de los datos, mientras que las bases de datos relacionales, sí. Las bases NoSQL no soportan las funcionalidades o restricciones de consistencia en los datos. Para garantizar la integridad, es responsabilidad de los desarrolladores implementar con código propio, lo que agrega más complejidad al sistema.
            p.mb-0 La falta de integridad referencial en los datos hace que no sean fiables para realizar transacciones seguras, como en los sistemas bancarios, donde la integridad de los datos es primordial. Otras formas de complejidad encontradas en la mayoría de las bases de datos NoSQL incluyen la incompatibilidad con consultas SQL; se necesita un lenguaje de consulta manual, haciendo los procesos mucho más lentos y complejos.
    Separador 
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.3 Tipos de bases de datos NoSQL 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/62.svg', alt='')
      .col-lg-11
        p.mb-0 Dentro de las bases de datos no relacionales, se encuentran distintos modelos o tipos de implementaciones. Este grupo de bases de datos no relacionales NoSQL desempeña funciones para diferentes ambientes y con necesidades variadas. Existen algunos tipos más comunes que otros, ya que están orientadas a documentos por permitir mejor escalabilidad horizontal (Macarrón, 2021)
    .titulo-tres.mb-4: h3.mb-0 Bases de datos basadas en clave-valor
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-5(data-aos='fade-right') Las bases de datos basadas en clave-valor son un tipo de base de datos NoSQL sencillo, que sirve para insertar y consultar datos. El concepto de ‘clave-valor’ significa que los datos se almacenan como una colección de pares clave-valor; la clave identifica de forma única la colección y el valor contiene los datos, los cuales se ordenan según la clave.
          br
          br
          |#[b Ejemplo]
          br
          br
          |Supóngase que se quieren almacenar datos de una persona, como su cédula, nombres, apellidos, correo y varios números de teléfono, y que, por ejemplo, necesita guardar los datos para las siguientes personas:
      .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/63.png', alt='')
    .f-4-3.mn.p-5
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3
          .p-5(style="background-color: #3a1d71 ") 
            .row.justify-content-center.mb-5
              .col-lg-6.mb-lg-0.mb-3
                p.text-white Cédula: 1029283762
                  br
                  |Nombre: JUAN CARLOS
                  br
                  |Apellidos: MARTÍNEZ
                  br
                  |Correo: juancho@nerss.et
                  br
                  |Teléfono: 3150817273
                  br
                  |Teléfono: 3168272372 
              .col-lg-6.mb-lg-0.mb-3
                p.text-white Cédula: 98765322
                  br
                  |Nombre: DANIELA
                  br
                  |Apellidos: VÉLEZ LEMOS
                  br
                  |Correo: dnala@nerss.et
        .col-lg-5.mb-lg-0.mb-3
          .tarjeta.h-100.p-4(style="background-color: #f2e5fd")
            img.d-flex.m-auto(src='@/assets/curso/temas/64.svg', alt='' style="width: 60px ").mb-3
            p.mb-0 Se toma la cédula como una especie de llave para identificar a una persona, es decir, la cédula es el identificador único para cada persona y no hay dos personas con la misma cédula.
      p.mb-5(data-aos='fade-right') #[b Más posibilidades ]
        br
        br
        |En la misma base de datos, se necesita guardar datos de carros, siendo la placa lo que permite identificar al vehículo; entonces, los datos a guardar serían: 
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-auto.mb-xl-0.mb-4
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta
                span a
              p.mb-0 
                span.listado Placa: MSR-13 
        .col-lg-auto.mb-xl-0.mb-4
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta
                span b
              p.mb-0 
                span.listado Modelo: 2015
        .col-lg-auto.mb-xl-0.mb-4
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta
                span c
              p.mb-0 
                span.listado Marca: MAZDA 
        .col-lg-auto.mb-xl-0.mb-4
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta
                span d
              p.mb-0 
                span.listado Tipo: SEDAN 
      p.fw-bold.mb-5 La base de datos sería: 

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 4. 
        span Ejemplo 2 de base de datos
      .tabla-a.color-acento-botones.mb-5
            table
              thead.border-0
                tr(style="background-color: #00ffdf")
                  th Clave
                  th Valor
              tbody
                tr(style="background-color: #ecf2ff ")
                  td persona/cédula
                  td 1029283762

                tr(style="background-color: #ecf2ff ")
                  td persona/1029283762/nombres
                  td JUAN CARLOS
                tr(style="background-color: #ecf2ff ")
                  td persona/1029283762/apellidos
                  td MARTÍNEZ
                tr(style="background-color: #ecf2ff ")
                  td persona/1029283762/correo
                  td juancho@nerss.et
                tr(style="background-color: #ecf2ff ")
                  td persona/1029283762/teléfono
                  td 3150817273
                tr(style="background-color: #ecf2ff ")
                  td persona/1029283762/teléfono
                  td 3150817273
                tr(style="background-color: #ecf2ff ")
                  td carro/placa
                  td MSR-13
                tr(style="background-color: #ecf2ff ")
                  td carro/MSR-13/modelo
                  td 2015
                tr(style="background-color: #ecf2ff ")
                  td carro/MSR-13/marca
                  td MAZDA
                tr(style="background-color: #ecf2ff ")
                  td carro/MSR-13/tipo
                  td SENAN
                tr(style="background-color: #ecf2ff ")
                  td persona/cédula
                  td 98765322
                tr(style="background-color: #ecf2ff ")
                  td persona/98765322/nombres
                  td DANIELA
                tr(style="background-color: #ecf2ff ")
                  td persona/98765322/apellidos
                  td VÉLEZ LEMOS
                tr(style="background-color: #ecf2ff ")
                  td persona/98765322/correo
                  td dnala@nerss.et
      p.mb-5(data-aos='fade-right') Estas bases de datos son óptimas para consultas en ambientes de respuesta rápida y para aplicaciones en tiempo real, como sistemas de telefonía IP o sistemas de chat. 
      .titulo-tres.mb-4: h3.mb-0 Bases de datos orientadas a documentos
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-2.mb-lg-0.mb-3: img(src='@/assets/curso/temas/65.svg', alt='')
        .col-lg-11
          p.mb-0 Los SGBD con estas características son denominados bases de datos documentales y funcionan en el marco de la definición de un “documento”. La mayoría de estos SGBD coinciden en cómo se almacena la información, empleando un formato estándar. Los formatos estándares más comunes o populares son JSON, BSON y XML. Este último tipo de formato es uno de los más utilizados en la actualidad.
      h4.color-morado Formato XML
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-11.col-2.mb-lg-0.mb-3
          p.mb-0 XML, sigla en inglés de #[em eXtensible Markup Language], traducido como “Lenguaje de Marcado Extensible” o “Lenguaje de Marcas Extensible”, es un metalenguaje que permite definir lenguajes de marcas. Desarrollado por el World Wide Web Consortium (W3C), se utiliza para almacenar datos en forma legible. Proviene del lenguaje SGML y permite definir la gramática de lenguajes específicos (de la misma manera que HTML es un lenguaje definido por SGML) para estructurar documentos grandes. A diferencia de otros lenguajes, XML da soporte a bases de datos, siendo útil cuando varias aplicaciones deben comunicarse entre sí o integrar información. 
        .col-lg-1: img(src='@/assets/curso/temas/66.svg', alt='')
      h4.color-morado Modelar información 
      p.mb-5(data-aos='fade-right') Suponga que se desea modelar la información contenida en un mensaje de correo electrónico.
      .row.justify-content-center.mb-5
        .col-lg-9 
          .tarjeta-codigo.p-5
            pre.language-html(language="html").mt-5
              code &lt;Edit_Mensaje&gt; 
                br
                |&lt;Mensaje&gt; 
                br
                |    &lt;Remitente&gt; 
                br
                |      &lt;Nombre&gt;Nombre del remitente&lt;/Nombre&gt; 
                br
                |      &lt;Mail&gt;Correo del remitente&lt;/Mail&gt; 
                br
                |    &lt;/Remitente&gt; 
                br
                |    &lt;Destinatario&gt; 
                br
                |      &lt;Nombre&gt;Nombre del destinatario&lt;/Nombre&gt; 
                br
                |      &lt;Mail&gt;Correo del destinatario&lt;/Mail&gt; 
                br
                |    &lt;/Destinatario&gt; 
                br
                |    &lt;Texto&gt; 
                br
                |      &lt;Asunto&gt; 
                br
                |        Este es mi documento con una estructura muy sencilla no contiene atributos ni entidades… 
                br
                |      &lt;/Asunto&gt; 
                br
                |      &lt;Parrafo&gt; 
                br
                |        Este es mi documento con una estructura muy sencilla no contiene atributos ni entidades... 
                br
                |      &lt;/Parrafo&gt; 
                br
                |    &lt;/Texto&gt; 
                br
                |  &lt;/Mensaje&gt; 
                br
                |&lt;/Edit_Mensaje&gt;  
    
    .titulo-tres.mb-5: h3.mb-0 En base de datos relacional 
    .f-4-4.mn.p-5.pt-0
      p.mb-5(data-aos='fade-right') Si se quisiera modelar esto en una base de datos relacional, seguramente se definiría una tabla para personas (con atributos nombre y correo) y una tabla para los correos, con dos relaciones a la tabla persona: una para el remitente y otra para el destinatario. 
      .row.justify-content-center.mb-5
        .col-lg-3.mb-lg-0.mb-3
          .tarjeta.p-4(style="background-color: #beb4d0 ")
            p.mb-0 1. Persona: (nombres, correo) 
              br
              |2. Correo: (asuntos y texto)  
        .col-lg-7.mb-lg-0.mb-3
          .tarjeta.p-4(style="background-color: #d6e1fd ")
            p.mb-0 Sin embargo, en XML, en lugar de tener filas en las tablas, cada correo es un archivo con la estructura dada en el ejemplo. 
      h4.color-morado Formato JSON 
      p.mb-5(data-aos='fade-right') JSON (acrónimo de JavaScript #[em Object Notation], «notación de objeto de JavaScript») es un formato de texto sencillo para el intercambio de datos. Se trata de un subconjunto de la notación literal de objetos de JavaScript, aunque, debido a su amplia adopción como alternativa a XML, se considera (año 2019) un formato independiente del lenguaje. 
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 5.
        span Tipos de datos en JSON
      .tabla-a.color-acento-botones.mb-5
            table
              thead.border-0
                tr(style="background-color: #00ffdf")
                  th(width="25%") Datos
                  th Definición  
              tbody
                tr(style="background-color: #ecf2ff ")
                  td Cadenas de texto
                  td Al ser una secuencia de ninguno o más caracteres, se ponen entre doble comilla, como en lenguaje JavaScript. Ejemplo: “Hola Mundo”.
                tr(style="background-color: #ecf2ff ")
                  td Números
                  td Se permiten números negativos y positivos, que también pueden contener parte no entera separada por puntos. Ejemplo: 654.321.
                tr(style="background-color: #ecf2ff ")
                  td Arreglos
                  td Representan una lista con ninguno o más valores, los cuales pueden ser todos del mismo o de diferente tipo. Los valores separados por comas y el vector, entre llaves ([]). Ejemplo: [“Luis”, “Carlos”, “Julian”, 99].
                tr(style="background-color: #ecf2ff ")
                  td Booleanos
                  td Representan valores booleanos y pueden tener dos valores: true y false.
                tr(style="background-color: #ecf2ff ")
                  td Valores nulos
                    br
                    | Objetos 
                  td Representan el valor nulo (null).
                    br
                    br
                    |Son colecciones no ordenadas de pares de la forma &lt;nombre&gt;:&lt;valor&gt;, donde el nombre debe ser separado por comas y puestos entre corchetes ({}). 
      .titulo-tres.mb-5: h3.mb-0 Bases de datos no relacionales documentales 
      p.mb-5(data-aos='fade-right') Las bases de datos no relacionales documentales utilizan el concepto de guardar la información con el modelo clave/valor. Por esta razón, los documentos más comunes son en formato JSON. La diferencia radica en que un documento se almacena en una clave. Esta definición puede parecer abstracta, pero se explica mejor con un ejemplo: 
      .row.justify-content-center.mb-5
        .col-lg-9 
          .tarjeta-codigo.p-5
            pre.language-html(language="html").mt-5
              code { 
                br
                |    “nombres”: “JUAN CARLOS”, 
                br
                |    “apellidos”: “MARTINEZ”, 
                br
                |    “fecha_nacimiento”: “1995-05-15”, 
                br
                |    “edad”: 65, 
                br
                |    “saldo”: 9876.134, 
                br
                |    “hobbies”: [“música”, “futbol”, “leer”], 
                br
                |    “correo”: “juancho@nerss.et”, 
                br
                |    “pedidos”: [], 
                br
                |    “acreedores”: null 
                br
                |} 
      p.mb-5(data-aos='fade-right') Note cómo “nombres” es la clave y “JUAN CARLOS” es el valor. De la misma forma, “edad” es la clave y 65 el valor. 
      p.mb-5 #[b Ejemplo] 
        br
        |Suponga que necesita modelar un menú de una aplicación como se presenta a continuación: 
      .row.justify-content-center.mb-5
        .col-lg-4
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 14. 
            span  Ejemplo
          img(src='@/assets/curso/temas/67.png', alt='Menú desplegable que muestra las opciones "Nuevo," "Abrir," "Cerrar," y "Guardar" bajo la categoría "Archivo."')
      h4.color-morado Representación en formato BSON 
      p.mb-5(data-aos='fade-right') La representación de JSON que se presenta en esta tabla es una representación en formato texto, pero también se puede representar en formato binario (unos y ceros). A esta otra representación equivalente en binario se le llama BSON. Es una cadena de unos y ceros sin nada que la caracterice de más, excepto que al convertirla en cadenas de texto se presenta como se observó en el ejemplo anterior.
      .row.justify-content-center.mb-5
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              h4(style="color: #18fbdf ") Xml 
              code &lt;menu id="file" value="Archivo"&gt; 
                br
                |&lt;popup&gt; 
                br
                |  &lt;menuitem value="Nuevo" onclick="CreateNewDoc()" /&gt; 
                br
                |  &lt;menuitem value="Abrir" onclick="OpenDoc()" /&gt; 
                br
                |  &lt;menuitem value="Cerrar" onclick="CloseDoc()" /&gt; 
                br
                |  &lt;menuitem value="Guardar" onclick="SaveDoc()" /&gt; 
                br
                |&lt;/popup&gt; 
                br
                |&lt;/menu&gt; 
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              h4(style="color: #18fbdf ") json 
              code { 
                br
                |  “menu”: { 
                br
                |    “id”: “file”, 
                br
                |    “value”: “Archivo”, 
                br
                |    “popup”: { 
                br
                |      “menuitems”: [ 
                br
                |        { 
                br
                |          “value”: “Nuevo”, 
                br
                |          “onclick”: “CreateNewDoc()” 
                br
                |        }, 
                br
                |        { 
                br
                |          “value”: “Abrir”, 
                br
                |          “onclick”: “OpenDoc()” 
                br
                |        }, 
                br
                |        { 
                br
                |          “value”: “Cerrar”, 
                br
                |          “onclick”: “CloseDoc()” 
                br
                |        }, 
                br
                |        { 
                br
                |          “value”: “Guardar”, 
                br
                |          “onclick”: “SaveDoc()” 
                br
                |        } 
                br
                |      ] 
                br
                |    } 
                br
                |  } 
                br
                |}
      .titulo-tres.mb-5: h3.mb-0 Bases de datos orientadas a grafos
      p.mb-5(data-aos='fade-right') Este tipo de base de datos es muy diferente a los anteriores; maneja la información de una manera particular, empleando grafos y teoría de grafos. Cada nodo solo debe contener una sola columna, por lo tanto, se deben normalizar completamente las bases de datos. Solo aplica para grafos de tipo binario; cada nodo solo se puede relacionar con otros dos nodos como máximo. Las ventajas de este tipo de bases de datos se enfocan en la integridad de los datos y la optimización de consultas. 
      .row.justify-content-center.mb-5
        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 15.
            span Grafos
          img(src='@/assets/curso/temas/68.png', alt='Diagrama que representa un grafo compuesto por nodos y aristas, donde los nodos son los círculos y las aristas son las líneas que los conectan.')
      Separador

      #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right').mb-4
        h2 4.4 Sistemas de Gestión de Bases de Datos (SGBD) NoSQL

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-11.col-2.mb-lg-0.mb-3
          p.mb-0 Como se sabe, la base de datos solo sirve si existe un sistema que la gestione, un SGBD. En NoSQL, hay varios SGBD y la mayoría son de código libre o de libre distribución. A continuación, se presentan algunos de los más populares, con sus respectivas características. Es necesario tener en cuenta que, no obstante, pueden existir otros SGBD menos populares pero que pueden ser una buena opción para trabajar con #[em Big Data]. 

        .col-lg-1: img(src='@/assets/curso/temas/69.svg', alt='') 
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 6. 
        span Sistemas de gestión de bases de datos            
      .tabla-a.color-acento-botones.mb-5
        table
          thead.border-0
            tr.border-0(style="background-color: #00ffdf")
              th Tipo
              th Logotipo
              th Nombre
              th Lanzamiento
              th Licencia
          tbody
            tr(style="background-color: #ecf2ff ")
              td Documental
              td
                img(src='@/assets/curso/temas/70.png', alt='')             
              td MongoDB            
              td 2008             
              td Apache License 2.0             
            tr(style="background-color: #ecf2ff ")
              td Documental
              td
                img(src='@/assets/curso/temas/71.png', alt='')             
              td CouchDB              
              td 2005             
              td Apache License 2.0             
            tr(style="background-color: #ecf2ff ")
              td Documental
              td
                img(src='@/assets/curso/temas/72.png', alt='')             
              td Raven DB              
              td 2010             
              td GNU AGPL v3.0             
            tr(style="background-color: #ecf2ff ")
              td Clave/Valor
              td
                img(src='@/assets/curso/temas/73.png', alt='')             
              td Apache Cassandra              
              td 2010             
              td Apache License 2.0              
            tr(style="background-color: #ecf2ff ")
              td Clave/Valor 
              td
                img(src='@/assets/curso/temas/74.png', alt='')             
              td Riak              
              td 2009             
              td Apache License 2.0              
            tr(style="background-color: #ecf2ff ")
              td Grafos 
              td 
                img(src='@/assets/curso/temas/75.png', alt='')             
              td Redis            
              td 2009              
              td Licencia: BSD             
            tr(style="background-color: #ecf2ff ")
              td Grafos 
              td
                img(src='@/assets/curso/temas/76.png', alt='')             
              td Neo4j              
              td 2009             
              td GNU AGPL v3.0              
            tr(style="background-color: #ecf2ff ")
              td Grafos 
              td
                img(src='@/assets/curso/temas/77.png', alt='')             
              td Dex              
              td 2008             
              td Comercial             
            tr(style="background-color: #ecf2ff ")
              td Grafos 
              td
                img(src='@/assets/curso/temas/78.png', alt='')             
              td Sones GraphDB              
              td 2012             
              td GNU AGPL v3.0 y comercial              
</template>

<script>
export default {
  name: 'Tema4',
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
