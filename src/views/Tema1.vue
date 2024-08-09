<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Establecer un entorno de trabajo  
    .f-1-1.p-5.mn.pb-0
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-7.mb-lg-0.mb-3(data-aos="fade-right")
          .p-4(style="background-color: #f2e5fd ")
            p.mb-0 Es esencial conocer cómo obtener, instalar, configurar y probar las herramientas necesarias para realizar las operaciones de diseño. Existen muchas tecnologías para diseñar e implementar bases de datos; en este caso, se utilizará MySQL como sistema gestor de bases de datos y MySQL Workbench como herramienta de diseño. Es importante que, a medida que se presentan los contenidos, realice de forma local y en su computadora el trabajo con los ejercicios y ejemplos propuestos. 
        .col-lg-5.col-7(data-aos="fade-left"): img(src='@/assets/curso/temas/3.png', alt='')
      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 Sistema gestor de bases de datos MySQL
      p.mb-5(data-aos='fade-right') #[b MySQL] es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual. Esto significa que cuenta con una licencia pública general y/o una licencia comercial por parte de #[em  Oracle Corporation], y según medios de comunicación, es considerada la base de datos de código abierto más popular del mundo. Tener licencia dual implica que se puede usar la licencia de uso público sin incurrir en gastos; no obstante, se puede adquirir una licencia de pago que incluye paquetes que robustecen el producto y servicios de soporte técnico especializado. 
      .row.justify-content-center.mb-4
        .col-lg-10
          .tarjeta.color-primario.p-4.mb-3
            .row.justify-content-center.align-items-center
              .col-lg-2.col-6: img(src='@/assets/curso/temas/megafono.svg', alt='')
              .col-lg-8
                h5.mb-3: span.color-azul.p-2 Proceso de descarga de MySQL Server Community y MySQL Workbench 
                p(data-aos='fade-right') Lo invitamos a visitar el siguiente PDF, para conocer el proceso de descarga de MySQL Server Community y MySQL Workbench. 
              .col-auto
                a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_1.pdf')" target="_blank" type="application/pdf")
                  span Descargar 
                  i.fas.fa-file-download
        .col-lg-10
          .tarjeta.color-primario.p-4.mb-3
            .row.justify-content-center.align-items-center
              .col-lg-2.col-6: img(src='@/assets/curso/temas/megafono.svg', alt='')
              .col-lg-8
                h5.mb-3: span.color-azul.p-2 Proceso de instalación de MySQL Server Community
                p(data-aos='fade-right') Lo invitamos a visitar el siguiente PDF, para conocer el proceso de instalación de MySQL. 
              .col-auto
                a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_2.pdf')" target="_blank" type="application/pdf")
                  span Descargar 
                  i.fas.fa-file-download
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Sistema de diseño y gestión de bases de datos 
    p.mb-5(data-aos='fade-right') Es una herramienta visual unificada para arquitectos, desarrolladores y administradores de bases de datos. MySQL Workbench proporciona modelado de datos, desarrollo de SQL y herramientas de administración integrales para la configuración del servidor, administración de usuarios, respaldo y muchas otras características y, lo más importante es que es multiplataforma, lo que indica que puede descargarse para sistemas operativos Windows, Linux y Mac. 
      br
      br
      |Algunas de las características más importantes de Workbench son las siguientes: 
    .f-3-1.mn.p-5.mb-5
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row.justify-content-center.mb-5
            .col-10
              h5.color-morado Diseño 
              p.mb-0 MySQL Workbench permite a un administrador de bases de datos, desarrollador o arquitecto de datos diseñar, modelar, generar y administrar bases de datos visualmente. Incluye todo lo que un modelador de datos necesita para crear modelos ER complejos, ingeniería directa e inversa, y también ofrece características clave para realizar tareas difíciles de gestión de cambios y documentación, que normalmente, requieren mucho tiempo y esfuerzo. 
                br
                br
                |En Workbench se pueden crear nuevos modelos, lo que equivale a crear una nueva base de datos e ir agregando los objetos requeridos como tablas, atributos, tipos de datos, relaciones, entre otras.
          .row.justify-content-center.mb-5
            .col-lg-4.mb-lg-0.mb-3
              h5.color-morado Desarrollar 
              p.mb-0 MySQL Workbench ofrece herramientas visuales para crear, ejecutar y optimizar consultas SQL. El editor de SQL proporciona resaltado de sintaxis de color, autocompletado, reutilización de fragmentos de código SQL e historial de ejecución de SQL. El panel de conexiones de base de datos permite a los desarrolladores administrar fácilmente las conexiones de base de datos estándar, incluido MySQL Fabric. El explorador de objetos proporciona acceso instantáneo al esquema y los objetos de la base de datos. 
            .col-lg-6: img(src='@/assets/curso/temas/5.png', alt='')
          .row.justify-content-center.mb-5
            .col-lg-4.mb-lg-0.mb-3
              h5.color-morado Administrar 
              p.mb-0 MySQL Workbench proporciona una consola visual para administrar fácilmente los entornos MySQL y obtener una mejor visibilidad de las bases de datos. Los desarrolladores y administradores de bases de datos pueden utilizar las herramientas visuales para configurar servidores, administrar usuarios, realizar copias de seguridad y recuperación, inspeccionar datos de auditoría y ver el estado de la base de datos. 
            .col-lg-6: img(src='@/assets/curso/temas/6.png', alt='')
          .row.justify-content-center.mb-5
            .col-lg-4.mb-lg-0.mb-3
              h5.color-morado Panel de rendimiento visual 
              p.mb-0 MySQL Workbench proporciona un conjunto de herramientas para mejorar el rendimiento de las aplicaciones MySQL. Los administradores de bases de datos pueden ver rápidamente los indicadores clave de rendimiento mediante el panel de rendimiento. Los informes de rendimiento proporcionan una fácil identificación y acceso a puntos de acceso de E / S (entrada y salida), declaraciones SQL de alto costo y más. Además, con un clic, los desarrolladores pueden ver dónde optimizar su consulta con el plan #[em visual explain] mejorado y fácil de usar. 
            .col-lg-6: img(src='@/assets/curso/temas/7.png', alt='')
          .row.justify-content-center.mb-5
            .col-10
              h5.color-morado Migración de bases de datos
              p.mb-0 MySQL Workbench proporciona una solución completa y sencilla de usar para migrar Microsoft SQL Server, Microsoft Access, Sybase ASE, PostreSQL y otras tablas, objetos y datos RDBMS a MySQL. Los desarrolladores y administradores de bases de datos pueden convertir rápida y fácilmente las aplicaciones existentes para que se ejecuten en MySQL, tanto en Windows como en otras plataformas. La migración también admite la migración de versiones anteriores de MySQL a las últimas versiones.
    Separador 
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Sistemas basados en MySQL 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6(data-aos="fade-right")
        p.mb-0 El diseño de un cuestionario está directamente relacionado con el tipo de información que se desea obtener, ya sea información exploratoria o para probar una hipótesis.  Son instrumentos de investigación que consisten en conjunto de preguntas u otro tipo de indicadores que son diseñados específicamente para recolectar información del usuario encuestado. Esta técnica incluye preguntas cerradas y abiertas, que al final se traducen como herramientas de índole cualitativas o cuantitativas. 
      .col-lg-6(data-aos="fade-left"): img(src='@/assets/curso/temas/9.svg', alt='')
    .p-4.mb-5(style="background-color: #f2e5fd ")
      p.mb-0 A continuación, encontrará el PDF Manual de instalación de MariaDB en Windows. En él solo se instala el SGBD, por lo que debe instalar por aparte MySQL Workbench, para que administre las bases de datos de MariaDB. 
    .row.justify-content-center.mb-4
        .col-lg-10
          .tarjeta.color-primario.p-4.mb-3
            .row.justify-content-center.align-items-center
              .col-lg-2.col-6: img(src='@/assets/curso/temas/megafono.svg', alt='')
              .col-lg-8
                h5.mb-3: span.color-azul.p-2 Manual de instalación de MariaDB en Windows  
                p(data-aos='fade-right') Lo invitamos a visitar el siguiente PDF, para conocer el Manual de instalación de MariaDB en Windows. 
              .col-auto
                a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_3.pdf')" target="_blank" type="application/pdf")
                  span Descargar 
                  i.fas.fa-file-download

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
