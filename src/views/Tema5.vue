<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1  NoSQL con MongoDB 
    .f-5-1.mn.p-5
      .p-5(style="background-color: #f7eefe")
        .row.justify-content-center.align-items-center
          .col-lg-9.mb-lg-0.mb-3
            p.mb-0 Como se mencionó antes, MongoDB es un sistema de bases de datos no relacionales y multiplataforma, es decir, se puede instalar en cualquier sistema operativo para servidor (Windows, Linux, BSD, MAC). El tipo de base de datos empleado es el documental, pero también se pueden administrar bases de datos clave/valor. El tipo de licencia de #[em software] libre es, específicamente, GNU AGPL v3.0. MongoDB usa el formato BSON (JSON compilado) para guardar la información. 
          .col-lg-3.col-7: img(src='@/assets/curso/temas/70.png', alt='')
      Separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 5.1  Conceptos básicos 
      p.mb-5(data-aos='fade-right') Los siguientes conceptos son clave para la asimilación de todos los elementos de este componente formativo. Para la implementación de bases de datos, conviene tener claridad acerca de lo que es un documento, una colección y a qué se hace referencia cuando se habla de creación y actualización de bases de datos, instalación de licencias, entre otros. 
      .row.justify-content-center.mb-5
        .col-lg-4.mb-lg-0.mb-3 
          .p-5(style="background-color: #3a1d71 ")
            img.d-flex.m-auto(src='@/assets/curso/temas/79.svg', alt='' style="width: 104px").mb-4
            h4(style="color: #00FFDF ") JSON – JavaScript #[em Object Notation]
            p.text-white Como la información gestionada usa el formato JSON para representar objetos según la especificación del documento RFC 46274, y como JSON es independiente del lenguaje, se ha popularizado mucho el uso del lenguaje JavaScript. JSON es usado por muchos sistemas para intercambiar datos, por lo sencillo que es, si se compara con XML. 
        .col-lg-4.mb-lg-0.mb-3 
          .p-5(style="background-color: #3a1d71 ")
            img.d-flex.m-auto(src='@/assets/curso/temas/80.svg', alt='' style="width: 104px").mb-4
            h4(style="color: #00FFDF ") Documento 
            p.text-white Un documento es un conjunto de datos estructurados, pero esta estructura no es estática, es decir, puede variar de un documento a otro. La estructura básica contiene pares clave/valor y se usa BSON (JSON Binario) como formato para almacenar los documentos dentro del SGBD. Un documento es como el equivalente a una fila dentro de una tabla de un modelo relacional. 
        .col-lg-4.mb-lg-0.mb-3 
          .p-5(style="background-color: #3a1d71 ")
            img.d-flex.m-auto(src='@/assets/curso/temas/81.svg', alt='' style="width: 104px").mb-4
            h4(style="color: #00FFDF ") Colección 
            p.text-white En este contexto, cuando se habla de colección, se está haciendo referencia a un conjunto de documentos. Se puede asemejar a una tabla en las bases de datos relacionales.
      Separador 
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 5.2 Consola interactiva

      p.mb-4 MongoDB tiene, al igual que todas las bases de datos, una interfaz de línea de comando (CLI), desde la cual se puede acceder a un API de las funcionalidades. Podemos acceder a su consola interactiva y realizar nuestras primeras interacciones con MongoDB. 
      .fondo-slyder.mn.p-5.mb-5
        .tarjeta.bg-white.p-5
          SlyderA(tipo='b')
            .row.justify-content-center.mb-5
              .col-lg-12.mb-lg-0.mb-3
                h5.color-morado Ingreso 
                p.mb-5 Para ingresar a su consola interactiva, hay que dirigirse a la carpeta donde quedó instalado MongoDB. (C:\Program Files\MongoDB\Server\4.4\bin). Se debe dar clic en el ejecutable que se llama mongo.exe. 
              .col-lg-8: img(src='@/assets/curso/temas/82.png', alt='') 
            .row.justify-content-center.mb-5
              .col-lg-12.mb-lg-0.mb-3
                h5.color-morado Instalación exitosa 
                p.mb-4 Si la vista es como se presenta a continuación, es porque la instalación fue exitosa. 
              .col-lg-12
                .tarjeta-codigo.p-5
                  pre.language-html(language="html").mt-5
                    code  MongoDB shell version v4.4.6 
                      br
                      |connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb 
                      br
                      |Implicit session: session { “id” : UUID(“e805b48a-4059-47e6-ae1f-89cb7bcb19c2”) } 
                      br
                      |MongoDB server version: 4.4.6 
                      br
                      |Welcome to the MongoDB shell. 
                      br
                      |For interactive help, type “help”. 
                      br
                      |For more comprehensive documentation, see 
                      br
                      |        https://docs.mongodb.com/ 
                      br
                      |Questions? Try the MongoDB Developer Community Forums 
                      br
                      |    https://community.mongodb.com/ 
                      br
                      |— 
                      br
                      |The server generated these startup warnings when booting: 
                      br
                      |        2021-06-21T21:35:16.749-05:00: Access control is not enabled for the database. Read and write access brto data and                    
                      |configuration is unrestricted 
                      br
                      |— 
                      br
                      |        Enable MongoDB’s free cloud-based monitoring service, which will then receive and display 
                      br
                      |metrics about your deployment (disk utilization, CPU, operation statistics, etc). 
                      br
                      |        The monitoring data will be available on a MongoDB website with a unique URL accessible to you 
                      br
                      |and anyone you share the URL with. MongoDB may use this information to make product 
                      br
                      |improvements and to suggest MongoDB deployment options to you. 
                      br
                      |        To enable free monitoring, run the following command: db.enableFreeMonitoring() 
                      br
                      |        To permanently disable this reminder, run the following command: db.disableFreeMonitoring() 
                      br
                      |— 
                      br
                      |&gt; 
            .row.justify-content-center.mb-5
              .col-lg-12.mb-lg-0.mb-3
                h5.color-morado Prueba 
                p.mb-4 Para probar que está funcionando bien, se escribe el comando help. 
              .col-lg-12
                .tarjeta-codigo.p-5
                  pre.language-html(language="html").mt-5
                    code &gt; help 
                      br
                      |db.help()                    help on db methods 
                      br
                      |db.mycoll.help()             help on collection methods 
                      br
                      |sh.help()                    sharding helpers 
                      br
                      |rs.help()                    replica set helpers 
                      br
                      |help admin                   administrative help 
                      br
                      |help connect                 connecting to a db help 
                      br
                      |help keys                    key shortcuts 
                      br
                      |help misc                    misc things to know 
                      br
                      |help mr                      mapreduce 
                      br
                      |show dbs                     show database names 
                      br
                      |show collections             show collections in current database 
                      br
                      |show users                   show users in current database 
                      br
                      |show profile                 show most recent system.profile entries with time >= 1ms 
                      br
                      |show logs                    show the accessible logger names 
                      br
                      |show log [name]              prints out the last segment of log in memory, 'global' is default 
                      br
                      |use &lt;db_name&gt;                set current database 
                      br
                      |db.mycoll.find()             list objects in collection mycoll 
                      br
                      |db.mycoll.find( { a : 1 } )  list objects in mycoll where a == 1 
                      br
                      |it                           result of the last line evaluated; use to further iterate 
                      br
                      |DBQuery.shellBatchSize = x   set default number of items to display on shell 
                      br
                      |exit                         quit the mongo shell 
            .row.justify-content-center.mb-5
              .col-lg-12.mb-lg-0.mb-3
                h5.color-morado Seleccionar base de datos 
                p.mb-5 Al igual que en bases de datos relacionales, se debe usar un comando para seleccionar una base de datos. Antes de eso, es necesario mirar qué bases de datos existen con el siguiente comando: show dbs. 
              .col-lg-8
                .tarjeta-codigo.p-5
                  pre.language-html(language="html").mt-5
                    code > show dbs; 
                      br
                      |admin   0.000GB 
                      br
                      |config  0.000GB 
                      br
                      |local   0.000GB
            .row.justify-content-center.mb-5
              .col-lg-12.mb-lg-0.mb-3
                h5.color-morado Comando de selección 
                p.mb-5 El comando para seleccionar una base de datos es use &lt;nombre base de datos>. 
              .col-lg-8
                .tarjeta-codigo.p-5.mb-5
                  pre.language-html(language="html").mt-5
                    code &gt; use local; 
                      br
                      |switched to db local 
            .row.justify-content-center.mb-5
              .col-lg-12.mb-lg-0.mb-3
                h5.color-morado Crear base de datos 
                p.mb-5 El comando #[code use] se usa también para crear una nueva base de datos. El comando sería use pruebas. 
              .col-lg-8
                .tarjeta-codigo.p-5.mb-5
                  pre.language-html(language="html").mt-5
                    code &lt; use pruebas; 
                      br
                      |switched to db pruebas 
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 5.3 Crear primer documento
      p.mb-5(data-aos='fade-right') Se creará una base de datos y una colección, y eso se hará almacenando un documento usando el objeto db. Sin embargo, primero se debe ejecutar el comando #[em use]. Un documento puede tener, en teoría, un máximo de hasta 16MB de información. 
        br
        br
        |Aprovechando el primer objeto visto, JSON, para almacenarlo en MongoDB y consultarlo, se debe tener en cuenta, dentro de la consola interactiva, usar variables para crear o modificar documentos; de esta manera, se pueden evitar accidentes con una mala manipulación directa de la base de datos. 
        br
        br
        |Ejemplo de uso: 
      .row.justify-content-center.mb-5
        .col-lg-6
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta
                span A
              p.mb-0 Ejecutar el comando #[em use] para seleccionar  o crear una base de datos: 
          .tarjeta-codigo.p-5
                  pre.language-html(language="html").mt-5
                    code use miBaseDeDatos 
      .row.justify-content-center.mb-5
        .col-lg-6
          ol.lista-ol--cuadro
            li.d-flex
              .lista-ol--cuadro__vineta
                span B
              p.mb-0 Crear una colección y almacenar un documento usando una variable: 
          .tarjeta-codigo.p-5
                  pre.language-html(language="html").mt-5
                    code var miDocumento = { 
                      br
                      |  nombre: “Juan”, 
                      br
                      |  apellidos: “Pérez”, 
                      br
                      |  edad: 30, 
                      br
                      |  correo: “juan.perez@example.com” 
                      br
                      |}; 
                      br
                      |db.miColeccion.insert(miDocumento); 
      p.mb-5(data-aos='fade-right') Este método ayuda a mantener el control sobre los datos y evita errores al manipular directamente la base de datos. 
      .titulo-tres.mb-4: h3.mb-0 Primera colección 
      p.mb-5(data-aos='fade-right') Es así como se ha creado la primera colección de nombre colección personas y nuestro primer documento. Para confirmar esto, se puede ejecutar el comando #[em show collections.] 
      .row.justify-content-center.mb-5
        .col-lg-6
          .tarjeta-codigo.p-5
            pre.language-html(language="html").mt-5
              code &lt; show collections 
                br
                |coleccion_personas 
                br
                |&gt; 
      .row.justify-content-center.mb-5
        .col-lg-6
          p.fw-bold Consulta de documentos: 
          .tarjeta-codigo.p-5
                  pre.language-html(language="html").mt-5
                    code { 
                      br
                      |  “_id”: ObjectId(“60d154ca1e0ed70729ced13d”), 
                      br
                      |  “nombres”: “JUAN CARLOS”, 
                      br
                      |  “apellidos”: “MARTINEZ”, 
                      br
                      |  “fecha_nacimiento”: “1995-05-15”, 
                      br
                      |  “edad”: 65, 
                      br
                      |  “saldo”: 987.432, 
                      br
                      |  “hobbies”: [“musica”, “futbol”, “leer”], 
                      br
                      |  “correo”: “juancho@nerss.et”, 
                      br
                      |  “pedidos”: [], 
                      br
                      |  “acreedores”: null 
                      br
                      |} 





    
</template>

<script>
export default {
  name: 'Tema5',
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
