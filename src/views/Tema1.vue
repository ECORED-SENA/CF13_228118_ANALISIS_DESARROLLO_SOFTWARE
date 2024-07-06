<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 HTML 5
    .f-1-1.p-5.mn.mb-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-5(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/4.svg', alt='')
        .col-lg-11(data-aos="fade-left")
          p.mb-0 HTML5 es la piedra angular de la creación de contenido web moderno, permitiendo a los desarrolladores y diseñadores web construir experiencias ricas e interactivas en línea. A continuación, se detalla su definición y aplicación: 
      figure.mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/ogBeRgyDD9s?si=P2yipjtdXvQOqPhq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video: Leyenda del video
      p.mb-5(data-aos='fade-right') El conjunto de características y funcionalidades de cada etiqueta, que ha evolucionado con el tiempo, se conoce como HTML. Actualmente, está en la versión 5, la cual es regulada por el Consorcio World Wide Web (W3C). 
      .row.justify-content-center.mb-4
        .col-lg-10
          .tarjeta.color-primario.p-5
            .row.justify-content-center.align-items-center
              .col-lg-1.col-6: img(src='@/assets/curso/temas/6.svg', alt='')
              .col-lg-11
                h5.mb-3: span.titulo-azul.p-2 Sabias qué ?
                p(data-aos='fade-right') El consorcio WWW en ingles: World Wide Web Consortium (W3C) es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento del World Web a largo plazo.
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Etiquetas (tags) 
    .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-5(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/7.svg', alt='')
        .col-lg-11(data-aos="fade-left")
          p.mb-0 Las etiquetas HTML representan el conjunto de funcionalidades que se pueden implementar en una página web, y poseen una sintaxis específica de escritura. Esto significa que existe una forma correcta en la que se deben escribir, cumpliendo con determinados atributos y manteniendo una interdependencia entre ellas. Por ello, algunas etiquetas dependen de otras para funcionar correctamente, a estas se les conoce como etiquetas padres. #[b A continuación, se presenta un ejemplo de las etiquetas padres mínimas requeridas en un archivo .html:] 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-right").mb-lg-0.mb-3
        .tarjeta(style="background-color: #e3dfeb").mb-1
          .row.justify-content-center.g-0 
            .col-lg-2
              .tarjeta.p-3.h-100.d-flex.align-items-center(style="background-color: #00ffdf")
                h4.mb-0 &lt; HTML &gt; 
            .col-lg-10
              .p-3
                p.mb-0 Indica el inicio del documento y que el documento está escrito en el lenguaje HTML.
        .tarjeta(style="background-color: #e3dfeb").mb-1
          .row.justify-content-center.g-0 
            .col-lg-2
              .tarjeta.p-3.h-100.d-flex.align-items-center(style="background-color: #00ffdf")
                h4.mb-0 &lt; HEAD &gt; 
            .col-lg-10
              .p-3
                p.mb-0 Es el encabezado de la página y esta información va orientada al navegador.
        .tarjeta(style="background-color: #e3dfeb").mb-1
          .row.justify-content-center.g-0 
            .col-lg-2
              .tarjeta.p-3.h-100.d-flex.align-items-center(style="background-color: #00ffdf")
                h4.mb-0 &lt; /HEAD &gt; 
            .col-lg-10
              .p-3
                p.mb-0 Indica el fin de la etiqueta  &lt; HEAD &gt;. Ambas etiquetas deben quedar dentro de la  etiqueta padre HTML. 
        .tarjeta(style="background-color: #e3dfeb").mb-1
          .row.justify-content-center.g-0 
            .col-lg-2
              .tarjeta.p-3.h-100.d-flex.align-items-center(style="background-color: #00ffdf")
                h4.mb-0 &lt; BODY &gt; 
            .col-lg-10
              .p-3
                p.mb-0 Representa el cuerpo del contenido de la información que va a visualizar el usuario.
        .tarjeta(style="background-color: #e3dfeb").mb-1
          .row.justify-content-center.g-0 
            .col-lg-2
              .tarjeta.p-3.h-100.d-flex.align-items-center(style="background-color: #00ffdf")
                h4.mb-0 &lt; /BODY &gt; 
            .col-lg-10
              .p-3
                p.mb-0 Indica el fin del cuerpo. 
        .tarjeta(style="background-color: #e3dfeb").mb-1
          .row.justify-content-center.g-0 
            .col-lg-2
              .tarjeta.p-3.h-100.d-flex.align-items-center(style="background-color: #00ffdf")
                h4.mb-0 &lt; /HTML &gt; 
            .col-lg-10
              .p-3
                p.mb-0 Indica el final del documento HTML. 
      .col-lg-5.col-7: img(src='@/assets/curso/temas/8.png', alt='')
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Textos
    .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-5(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/9.svg', alt='')
        .col-lg-11(data-aos="fade-left")
          p.mb-0 La inclusión de texto en una página web responde a la necesidad de presentar información a los visitantes. Todo texto que se añada debe estar contenido dentro de las etiquetas padres previamente mencionadas. En este contexto, se recomienda organizar el texto en párrafos, lo cual se logra mediante la utilización de la etiqueta #[span.color-morado &lt;p&gt;], seguido del texto deseado, y cerrando con la etiqueta de cierre #[span.color-morado &lt;/p&gt;]. De acuerdo con lo expuesto, se entiende que un conjunto de párrafos forma todo el documento, y los saltos de línea dentro de un texto se indican con la etiqueta #[span.color-morado &lt;br/&gt;]. Además, #[b otros elementos importantes para enriquecer el texto incluyen:] 
    .f-1-2.mn.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 1.
            span Etiquetas HTML para textos
          .tabla-a.color-acento-contenido.mb-5
            table
              caption Leyenda de la tabla
              thead(style="background-color: #3a1d71")
                tr
                  th.text-white  Etiqueta 
                  th.text-white  Descripción
                  
              tbody
                tr
                  td.fw-bold &lt;blockquote/&gt;
                  td Párrafo que en sí mismo corresponde a una cita de reseña. 
                tr
                  td.fw-bold &lt;q/&gt;
                  td Cita contenida dentro de un texto. 
                tr
                  td.fw-bold &lt;em/&gt;
                  td Enfatiza el texto de un párrafo. 
                tr
                  td.fw-bold &lt;strong/&gt;
                  td Resaltado de texto. 
      .row.justify-content-center.mb-5
        .col-lg-8
          h5.mb-4 Un ejemplo de configuración de código HTML es:  
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code
                | &lt;html&gt; 
                | &lt;head&gt; 
                | &lt;/head&gt; 
                | &lt;body&gt; 
                |Mi primer texto en una página web que no es un párrafo &lt;/br&gt; 
                |&lt;p&gt;Mi primer párrafo página web&lt;/p&gt; 
                br
                |&lt;blockquote&gt;MI PRIMER PARRAFO CITA EN UNA PAGINAWEB&lt;blockquote&gt; 
                |&lt;p&gt;Siempre se dice que este es el mejor sitio para ver videos |online  
                |&lt;q cite=“http://youtube.com/“&gt;www.youtube.com&lt;/q&gt; 
                |&lt;/p&gt; 
                br
                |En ocasiones más vale &lt;em&gt;correr lento&lt;/em&gt;pero seguro. 
                br
                br
                |&lt;p&gt;Cuando el rio suena &lt;strong&gt;piedras lleva&lt;/strong&gt;.&lt;/p&gt; 
                |&lt;/body&gt; 
                br
                |&lt;/html&gt; 
          h5.mb-4 El resultado de la ejecución del código anterior es:  
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1.
            span Resultado del código
          img(src='@/assets/curso/temas/10.svg', alt='Primera línea de texto, sin sangría: Mi primer texto en una página web que no es un párrafo. Segunda línea de texto sin sangría: Mi primer párrafo página web. Tercera línea de texto en mayúscula sostenida, con sangría: MI PRIMER PÁRRAFO CITA EN UNA PAGINA WEB. Cuarta línea con sangría, con la página web entrecomillada: Siempre se dice que este es el mejor sitio para ver videos online "www.youtube.com". Quinta línea de texto con la palabras correr, lento, pero y seguro en cursiva: En ocasiones más vale correr lento pero seguro.')
    Separador        
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Imágenes 
    .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-5(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/11.svg', alt='')
        .col-lg-11(data-aos="fade-left")
          p.mb-0 Para anexar una imagen a un documento HTML se usa la etiqueta <img> acompañada del atributo src que corresponde a la ubicación en donde se encuentra la imagen, bien sea en formato *.jpeg, *.gif, *.png, entre otros formatos. 
    .row.justify-content-center.mb-4
        .col-lg-10
          .tarjeta.color-primario.p-3.mb-5
            .row.justify-content-center.align-items-center
              .col-lg-2.col-6: img(src='@/assets/curso/temas/12.svg', alt='')
              .col-lg-10
                h5.mb-3: span.titulo-azul.p-2 ¡Importante! 
                p(data-aos='fade-right') Otros atributos importantes para la etiqueta #[span.color-azul &lt;img&gt;] son #[span.color-azul width] y #[span.color-azul height] que sirven para definir el ancho y el alto de la imagen dentro de la página web.
          h4.mb-3 Un ejemplo de configuración de código HTML es:  
    .row.justify-content-center
      .col-lg-9(data-aos="fade-right").mb-lg-0.mb-3
        .tarjeta-codigo.p-4.mb-5
            pre.language-html(language="html").mt-5
              code
                |&lt;html&gt; 
                |&lt;head&gt; 
                |&lt;/head&gt; 
                |&lt;body&gt; 
                |&lt;img src=“/misDocumentos/imagenes/2301-03.png” width=“50%” height:”40%”/&gt;
                |&lt;/body&gt; 
                |&lt;/html&gt; 
      //.col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/t13.png', alt='')
    
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Hiperenlaces

    .row.justify-content-center.align-items-center.mb-5
      .col-auto(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/12b.svg', alt='')
      .col(data-aos="fade-left")
        p.mb-0 Esta funcionalidad permite la navegación entre diferentes páginas web, es decir, facilita el desplazamiento de una página a otra cuyos contenidos HTML están almacenados en archivos de distintos nombres y, posiblemente, en carpetas diferentes. Además, habilita la navegación hacia otras páginas web ya publicadas en internet. 

    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-2.col-6: img(src='@/assets/curso/temas/12.svg', alt='')
            .col-lg-10
              h5.mb-3: span.titulo-azul.p-2 ¡Ten en cuenta!
              p(data-aos='fade-right') Para lograr un hiperenlace se debe utilizar la etiqueta #[span.color-azul &lt;a&gt;] acompañada del atributo #[span.color-azul href=“”] que indica el destino hacia la página a la que se quiere llegar y dentro de la etiqueta el texto que describe el sitio destino.

        p #[strong Un ejemplo de código para hiperenlaces es:]

        .row.justify-content-center
          .col-lg-8(data-aos="fade-right").mb-lg-0.mb-3
            .tarjeta-codigo.p-4.mb-5
                pre.language-html(language="html").mt-5
                  code
                    |&lt;html&gt; 
                    |&lt;head&gt; 
                    |&lt;/head&gt; 
                    |&lt;body&gt; 
                    |&lt;a href="http://www.google.com"&gt; http://www.google.com &lt;/a&gt; 
                    |&lt;/body&gt; 
                    |&lt;/html&gt; 
          //.col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/12.png', alt='')
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.5 Tablas
    .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-5(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/13.svg', alt='')
        .col-lg-11(data-aos="fade-left")
          p.mb-0 #[b Las tablas son elementos idóneos para estructurar contenido en una página web de manera matricial, es decir, organizado en filas y columnas.] Para crear una tabla, se utiliza la etiqueta &lt;table&gt;. A continuación, se define la cantidad de filas mediante la etiqueta &lt;tr&gt; y, dentro de ella, se especifica el número de columnas deseado utilizando la etiqueta &lt;td&gt; para cada celda que se quiera presentar. Al final, cada combinación de fila y columna forma una celda de información. 
    p.mb-5(data-aos='fade-right') El siguiente código ilustra la creación de una tabla con 2 filas y 3 columnas, donde el contenido de cada celda puede variar, incluyendo texto, hiperenlaces, imágenes, entre otros elementos. 
    .f-1-3.mn.p-5.mb-4
      .row.justify-content-center.mb-5
        .col-lg-8
          h5.mb-5 El código para una tabla de datos es: 
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code
                |&lt;html&gt; 
                |&lt;head&gt; 
                |&lt;/head&gt; 
                |&lt;body&gt; 
                |&lt;table&gt; 
                |&lt;tr&gt; 
                |&lt;td&gt;Celda Uno &lt;/td&gt; 
                |&lt;td&gt;Celda Dos &lt;a href=“http://www.google.com”&gt;www.google.com&lt;/a&gt;&lt;/td&gt; 
                |&lt;td&gt;Celda Tres &lt;/td&gt; 
                |&lt;/tr&gt; 
                |&lt;tr&gt; 
                |&lt;td&gt;Celda Cuatro&lt;/td&gt; 
                |&lt;td&gt;Celda Cinco&lt;/td&gt; 
                |&lt;td&gt;Celda Seis&lt;/td&gt; 
                |&lt;/tr&gt; 
                |&lt;/table&gt; 
                |&lt;/body&gt;
                |&lt;/body&gt; 
                |&lt;/html&gt;
          h5.mb-4 El resultado ejecución del código de la tabla es:  
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 2. 
            span Tabla de datos
          img(src='@/assets/curso/temas/14.svg', alt='El resultado es la distribución del texto configurado en el código, en un formato tabla.')
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta.color-primario.p-3.mb-5
            .row.justify-content-center.align-items-center
              .col-lg-2.col-6: img(src='@/assets/curso/temas/12.svg', alt='')
              .col-lg-10
                h5.mb-3: span.titulo-azul.p-2 ¡Importante: Divs!
                p(data-aos='fade-right').mb-0 Si bien es cierto que ya vimos el funcionamiento de las tablas, en el diseño de hoy se recomienda usar la etiqueta div que corresponde a un contenedor y permite realizar lo mismo de las tablas, pero con mayores opciones en funcionalidad y dinamismo.
      .row.justify-content-center.mb-5
        .col-lg-8
          h5.mb-4 Un ejemplo de tabla usando Div: 
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code
                |&lt;div class=“tabla”&gt; 
                |&lt;div&gt; Cabecera con el logo de la página “header” &lt;/div&gt; 
                |&lt;div&gt; 
                |&lt;div class=“columna1”&gt; Columna1 &lt;/div&gt; 
                |&lt;div class=“columna2”&gt; Columna2 &lt;/div&gt; 
                |&lt;div class=“columna3”&gt; Columna3 &lt;/div&gt; 
                |&lt;/div&gt; 
                |&lt;div&gt; Pie de página &lt;/div&gt; 
                |&lt;/div&gt; 
    Separador
    #t_1_6.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.6 Formularios 
    .row.justify-content-center.align-items-center.mb-5
        .col-lg-1.col-5(data-aos="fade-right").mb-lg-0.mb-3: img(src='@/assets/curso/temas/15.svg', alt='')
        .col-lg-11(data-aos="fade-left")
          p.mb-0 Los formularios son componentes HTML diseñados para facilitar la interacción y el intercambio de información con usuarios. Se caracterizan por agrupar elementos interactivos que permiten introducir datos de diversos tipos, como numéricos, alfanuméricos, caracteres, listas de datos, entre otros. La creación de formularios puede realizarse de manera tanto dinámica como estática. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/16.png', alt='')
      .col-lg-9
        .tarjeta.color-primario.p-4
          p.mb-0.text-white La etiqueta #[span.color-azul &lt;form&gt;] se utiliza para definir un formulario y debe incluir, como mínimo, el atributo #[span.color-azul action], que especifica el destino al que se enviarán los datos. Además, es esencial definir el método de envío de los datos, que puede ser post o get, para determinar cómo se transmitirán estos datos al servidor. 
            br
            br
            |A continuación, se describen algunos tags que comúnmente conforman un formulario, estos se deben encerrar dentro de la etiqueta principal del formulario #[span.color-azul &lt;form&gt;]:
    .f-1-4.mn.mb-5.p-5.pt-0
      .row.justify-content-center.mb-5
        .col-lg-4
          .tarjeta.p-4(style="background-color: #f7eefe ")
            h5 &lt;input&gt; 
            p Entrada de datos: estos pueden ser texto, número o alfanumérico; sus atributos más importantes son #[em type] para definir el tipo de entrada que puede ser #[em text], radio, #[em submit], #[em reset], el atributo id permite identificar de manera única el objeto en el archivo HTML, el atributo name es para darle un nombre a la entrada o variable y value para recibir el dato del componente. 
        .col-lg-4
          .tarjeta.p-4.mb-4(style="background-color: #d6e1fd")
            h5 &lt;label&gt; 
            p.mb-0 Permite la definición de un nombre para una entrada de datos. 
          .tarjeta.p-4.mb-4(style="background-color: #bcfff7")
            img(src='@/assets/curso/temas/16.svg', alt='') 
      .row.justify-content-center.mb-5
        .col-lg-8
          h5.mb-4 Un ejemplo de código de un formulario es: 
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code
                | &lt;html&gt; 
                | &lt;head&gt; 
                | &lt;/head&gt; 
                | &lt;body&gt; 
                | &lt;form action=“http://misitio.com/prog/usuarionuevo” method=“post”&gt; 
                | &lt;p&gt; 
                | &lt;label for=“nombre”&gt;Nombre:&lt;/label&gt; 
                | &lt;input type=“text” id=“nombre”&gt;&lt;br/&gt; 
                | &lt;label for=“apellido”&gt;Apellido:&lt;/label&gt; 
                | &lt;input type=“text” id=“apellido”&gt;&lt;br/&gt; 
                | &lt;label for=“email”&gt;email:&lt;/label&gt; 
                | &lt;input type=“text” id=“email”&gt;&lt;br/&gt; 
                | &lt;input type=“radio” name=“sexo” value=“Varón”&gt;Varón&lt;br/&gt; 
                | &lt;input type=“radio” name=“sexo” value=“Mujer”&gt;Mujer&lt;br/&gt; 
                | &lt;input type=“submit” value=“Enviar”&gt;&lt;input type=“reset”&gt; 
                | &lt;/p&gt; 
                | &lt;/FORM&gt; 
                | &lt;/body&gt; 
                | &lt;/html&gt; 
          h5.mb-4 El resultado del código del formulario es:
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 3. 
            span Resultado código del formulario
          img(src='@/assets/curso/temas/17.svg', alt='Formulario con los campos nombre, apellido y email con un campo en blanco para su diligenciamiento. A su vez, de los campos varón y mujer para su selección, finalizando con los botones de enviar o restablecer. ')









</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
