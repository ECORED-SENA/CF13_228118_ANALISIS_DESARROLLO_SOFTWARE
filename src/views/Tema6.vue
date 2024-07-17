<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Manipulación de datos con MongoDB 
    .f-6-1.mn.p-5
      .p-5(style="background-color: #f7eefe").mb-5
        .row.justify-content-center.align-items-center
          .col-lg-9.mb-lg-0.mb-3
            p.mb-0 Las bases de datos deben poder manipular la información de varias maneras, ya que los procesos en los sistemas informáticos necesitan de esas operaciones básicas: crear datos, consultarlos, actualizarlos y, en algún punto, eliminarlos (#[em Create, Read, Update, and Delete] - CRUD). Por tanto, queda establecido que almacenarla o contenerla no es su mera y única función básica. 
          .col-lg-3.col-7: img(src='@/assets/curso/temas/70.png', alt='') 
      .titulo-tres.mb-4: h3.mb-0 Crear documentos
      p.mb-5(data-aos='fade-right') Es la primera de cuatro funciones elementales a la hora de utilizar bases de datos. Crear documentos permite insertar unidades de información; en el caso de MongoDB, a través de documentos en colecciones de datos.  
      ol.lista-ol--cuadro
        li.d-flex
          .lista-ol--cuadro__vineta
            span 1
          p.mb-0 Crear un documento: Para poder crear un documento, MongoDB posee los métodos .insert(), .save() y, de una manera especial, .update()   
      .tarjeta-codigo.p-5.mb-5
        pre.language-html(language="html").mt-5
          code documento = { 
            br
            |  “titulo”: “Titulo Libro”, 
            br
            |  “Autores”: [“Peter”, “Johnathan”] 
            br
            |} 
            br
            |{ 
            br
            |  “titulo”: “Titulo Libro”, 
            br
            |  “Autores”: [“Peter”, “Johnathan”] 
            br
            |} 
            br
            |db.libros.insert(documento) 
            br
            |WriteResult({ “nInserted”: 1 }) 
      ol.lista-ol--cuadro
        li.d-flex
          .lista-ol--cuadro__vineta
            span 2
          p.mb-0 Insertar varios documentos simultáneamente: Se pueden insertar varios documentos a la vez.
      .tarjeta-codigo.p-5.mb-5
        pre.language-html(language="html").mt-5
          code documentos = [{ 
            br
            |  “titulo”: “Otro Libro”, 
            br
            |  “Autores”: [“Peter”, “Yolima”] 
            br
            |}, { 
            br
            |  “titulo”: “Nuevo Libro”, 
            br
            |  “Autores”: [“Zulema”] 
            br
            |}] 
            br
            |[{ 
            br
            |  “titulo”: “Otro Libro”, 
            br
            |  “Autores”: [“Peter”, “Yolima”] 
            br
            |}, { 
            br
            |  “titulo”: “Nuevo Libro”, 
            br
            |  “Autores”: [“Zulema”] 
            br
            |}] 
            br
            |db.libros.insert(documentos) = [{ 
            br
            |  BulkWriteResult({ 
            br
            |    “writeErrors”: [], 
            br
            |    “writeConcernErrors”: [], 
            br
            |    “nInserted”: 2, 
            br
            |    “nUpserted”: 0, 
            br
            |    “nMatched”: 0, 
            br
            |    “nModified”: 0, 
            br
            |    “nRemoved”: 0, 
            br
            |    “upserted”: [] 
            br
            |  }) 
            br
            |}] 
      ol.lista-ol--cuadro
        li.d-flex
          .lista-ol--cuadro__vineta
            span 3 
          p.mb-0 Actualizar un documento: Este método tiene todas las funciones de .insert(), pero además permite actualizar un documento si ya existe el _id de dicho documento. En ese caso, .insert() mostraría una excepción. 
      
      .titulo-tres.my-5: h3.mb-0 Leer y consultar colecciones 
      
      p.mb-5(data-aos='fade-right') Para leer y consultar la información, la forma básica consiste en usar el método find() de la colección, tal como se mencionó anteriormente en este componente formativo.
      ol.lista-ol--cuadro
        li.d-flex
          .lista-ol--cuadro__vineta
            span A 
          p.mb-0 Leer y consultar colecciones 
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code > db.libros.find() 
                br
                |{ “_id” : ObjectId(“60d159461e0ed70729ced13e”), “titulo” : “Titulo Libro”, “Autores” : [ “Peter”, “Johnathan” ] } 
                br
                |{ “_id” : ObjectId(“60d159df1e0ed70729ced13f”), “titulo” : “Otro Libro”, “Autores” : [ “Peter”, “Yolima” ] } 
                br
                |{ “_id” : ObjectId(“60d159df1e0ed70729ced140”), “titulo” : “Nuevo Libro”, “Autores” : [ “Zulema” ] }        
      ol.lista-ol--cuadro
        li.d-flex
          .lista-ol--cuadro__vineta
            span B
          p.mb-0 Función pretty(): otra forma de mejor visualización es aplicar la función pretty().  
      .row.justify-content-center.mb-5
        .col-lg-6
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code > db.libros.find().pretty() 
                br
                |{ 
                br
                |  “_id”: ObjectId(“60d159461e0ed70729ced13e”), 
                br
                |  “titulo”: “Titulo Libro”, 
                br
                |  “Autores”: [“Peter”, “Johnathan”] 
                br
                |}, 
                br
                |{ 
                br
                |  “_id”: ObjectId(“60d159df1e0ed70729ced13f”), 
                br
                |  “titulo”: “Otro Libro”, 
                br
                |  “Autores”: [“Peter”, “Yolima”] 
                br
                |}, 
                br
                |{ 
                br
                |  “_id”: ObjectId(“60d159df1e0ed70729ced140”), 
                br
                |  “titulo”: “Nuevo Libro”, 
                br
                |  “Autores”: [“Zulema”] 
                br
                |}         
      .titulo-tres.mb-4: h3.mb-0 Actualizar documentos  
      p.mb-5(data-aos='fade-right') Es momento de conocer  un ejemplo de cómo se actualiza la información en la base de datos, conociendo el contenido del atributo _id del documento a actualizar. Preste atención a la siguiente estructura: 
      .row.justify-content-center.mb-5
        .col-lg-6
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code db.collection.update( 
                br
                |  { consulta - criterios }, 
                br
                |  { documento modificado }, 
                br
                |  { upsert: true | false, multi : true | false } 
                br
                |)        
      p.mb-5(data-aos='fade-right') La opción upsert permite agregar un documento si no existe, siempre y cuando esta opción esté activada.
      .row.justify-content-center.mb-5
        .col-lg-6
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code &gt; db.libros.update({ “_id”: ObjectId(“60d159df1e0ed70729ced13f”) }, { “titulo”: “Titulo Modificado” }) 
                br
                |WriteResult({ “nMatched”: 1, “nUpserted”: 0, “nModified”: 1 }) 
                br
                |&gt;  
      .titulo-tres.mb-4: h3.mb-0 Borrar documentos
      p.mb-5(data-aos='fade-right') El método remove() elimina uno o más documentos de una colección. Recibe parámetros para realizar una eliminación selectiva; si no se le pasa ningún parámetro, elimina todos los documentos de la colección (Graterol, 2014). Esto nos lleva a concluir que las bases de datos no relacionales son más sencillas de administrar, al no tener que hacer uso de estructuras complejas e interrelacionadas.       
      .row.justify-content-center.mb-5
        .col-lg-6
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code &gt; db.libros.remove({ “_id”: ObjectId(“60d159df1e0ed70729ced13f”) }) 
                br
                |WriteResult({ “nRemoved”: 1 })  
      p.mb-5(data-aos='fade-right') La función drop() elimina toda una colección y es la más recomendable a la hora de realizar esta tarea, ya que utiliza menos recursos que remove() (Yohan D, 2014). 
      .row.justify-content-center.mb-5
        .col-lg-6
          .tarjeta-codigo.p-5.mb-5
            pre.language-html(language="html").mt-5
              code  &lt; db.libros.drop(); 
                br
                |true 
                br
                |&lt; show collections 
                br
                |coleccion_personas 
                br
                |&lt; 













</template>

<script>
export default {
  name: 'Tema6',
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
