<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .fondo-intro.p-5.mn.pt-0
        p.mb-5(data-aos='fade-right') En el mundo actual, la gestión eficiente de datos es fundamental para el éxito de cualquier organización. Este componente está diseñado para proporcionar una comprensión integral de las bases de datos SQL y NoSQL, destacando sus características, diferencias y aplicaciones prácticas. 
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.col-7.mb-lg-0.mb-3(data-aos="fade-right"): img(src='@/assets/curso/temas/1.svg', alt='')
          .col-lg-8(data-aos="fade-left")
            .tarjeta.p-5(data-aos="zoom-in" style="background-color: #debefb ").mb-5
              p.mb-0 Las bases de datos SQL, como MySQL, se caracterizan por su estructura relacional y el uso del lenguaje SQL para la gestión de datos. MySQL es uno de los sistemas de gestión de bases de datos más populares, conocido por su robustez, flexibilidad y facilidad de uso. Este componente cubre desde la configuración del entorno de trabajo hasta el diseño y administración de bases de datos utilizando MySQL y MySQL Workbench. Los usuarios aprenderán a diseñar modelos de datos, ejecutar consultas SQL, y realizar tareas administrativas esenciales para la gestión de bases de datos.
        .row.justify-content-center.mb-5
          .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
            .p-4(style="background-color: #f2e5fd ")
              p.mb-0 Por otro lado, las bases de datos NoSQL surgieron para abordar las limitaciones de escalabilidad y flexibilidad de las bases de datos relacionales tradicionales. Estas bases de datos no utilizan SQL como su principal lenguaje de consultas y se adaptan mejor a grandes volúmenes de datos y aplicaciones en tiempo real. Este componente explora los diferentes tipos de bases de datos NoSQL, como las basadas en clave-valor, orientadas a documentos y de grafos, destacando sus ventajas y casos de uso. 
          .col-lg-3.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/2.png', alt='')
        p.mb-5(data-aos='fade-right') A lo largo del componente, los usuarios tendrán la oportunidad de aplicar los conceptos aprendidos mediante ejercicios prácticos y estudios de caso, como el diseño de un sistema de facturación y la gestión de matrículas en un instituto de formación técnica. Esto permitirá consolidar los conocimientos y desarrollar habilidades prácticas en el manejo de bases de datos SQL y NoSQL.
        
                
  
      
  </template>

<script>
export default {
  name: 'Tema1',
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
