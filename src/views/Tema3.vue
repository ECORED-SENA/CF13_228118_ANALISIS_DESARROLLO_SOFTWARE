<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Administración de bases de datos
    .f-3-2.mn.p-5
      p.mb-5(data-aos='fade-right') Las funciones de un administrador de bases de datos (#[em Data Base Administrator], DBA), es la gestión general de la base de datos.
        br
        |Debe conocer las reglas de la tecnología particular, que en este caso sería MySQL, pero también está entre sus responsabilidades: 
      .row.justify-content-center.mb-5
        .col-lg-7.mb-lg-0.mb-3
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--morada")
            div(titulo="Validar o revisar el modelado y diseño de las bases de datos ")
              p.mb-0 Debe concentrar su interés en los requerimientos de rendimiento y administración de índices.
            div(titulo="Procesos de auditoría")
              p.mb-0 Identificar qué usuarios tienen acceso a qué tablas o recursos a insertar, actualizar o eliminar datos, y cuándo.
            div(titulo="Resguardo y recuperación de datos ")
              p.mb-0 Esto es hacer copias de seguridad periódicas de los datos, mantenerlos a salvo de la destrucción accidental o intencional. Además, diseñar, implementar y probar un plan de recuperación, considerando que pueden presentarse problemas, y validar los datos que se pueden restaurar rápidamente (que las copias generadas sean útiles). 
            div(titulo="Planificación de capacidad ")
              p.mb-0 Gestionar el volumen de datos y diseñar los planes apropiados para administrarlos, esto ya que los datos crecen rápidamente y se debe llevar un registro de la taza de este crecimiento. 
            div(titulo="Administración de cambios ")
              p.mb-0 A menudo es la responsabilidad del DBA realizar el análisis de impacto antes de generar los cambios dentro de un SGDB. 
        .col-lg-5(data-aos="fade-left"): img(src='@/assets/curso/temas/52.png', alt='')          
      .row.justify-content-center.mb-5
        .col-lg-10
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image':`url(${require('@/assets/curso/temas/53.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              p.mb-0 De las anteriores actividades, se puede decir que al validar o revisar el modelado y diseño, ya se cuenta con la competencia para hacerlo, al igual que la administración de cambios, cuando se vio operaciones de mantenimiento y actualización por el MySQL Workbench o por la interfaz línea de comandos. 
    Separador 
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.1 Copia de seguridad de base de datos con MySQL Workbench 
    p.mb-5(data-aos='fade-right') Durante todo el ciclo de vida del #[em software] (desde que se construye hasta que está en operación), se necesitan operaciones de copias y restablecimiento de las bases de datos. Es por esto que se explicará una de las formas para obtener una copia de la base de datos, tanto en estructura como de los datos: 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .p-5(style="background-color: #f2e5fd")  
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-8.mb-lg-0.mb-3
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
                  p.mb-0 Antes de cualquier cosa, se debe hacer una conexión a la base de datos si no existe dando clic en la casa y luego en el icono más “+”.
                li.d-flex
                  i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
                  p.mb-0 Posteriormente, en #[em test connection] y luego en él se escribe la contraseña del #[em root].
                li.d-flex
                  i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
                  p.mb-0 Se le da doble clic a la conexión creada.
                    br
                    |Luego, se da clic en la pestaña, administración y #[em Data Export].

              p.fw-bold.mb-3 Se debe seleccionar:
              ul.lista-ul--color.ms-4
                li.d-flex
                  i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
                  p.mb-0 La base de datos a respaldar.
                li.d-flex
                  i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
                  p.mb-0 Si se va a restaurar la estructura (metadatos) o solo los datos, o solo la estructura (se selecciona estructura y datos).
                li.d-flex
                  i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
                  p.mb-0 La copia en un solo archivo y la ruta.
                li.d-flex
                  i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
                  p.mb-0 Se crea la base de datos si no existe.
                li.d-flex
                  i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
                  p.mb-0 Finalmente, en la carpeta se generará el #[em backup.]
              ul.lista-ul--color
                li.d-flex
                  i.fas.fa-circle.fa-xs(style="color: #A854F3 ")
                  p.mb-0 El proceso termina diciendo que la copia ha terminado.
            .col-lg-4.col-7: img(src='@/assets/curso/temas/54.svg', alt='')
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Restaurar una copia de seguridad con MySQL Workbench
    p.mb-5(data-aos='fade-right') El proceso complementario de restablecer una copia de base de datos es fundamental para la instalación de un sistema o el restablecimiento de la operación, cuando el sistema falla o se quiere volver a una versión anterior de la base de datos. Es por esto que se presentará un método sencillo para restablecer la base de datos a partir de un backup en formato SQL. 
      br
      br
      |Siga los siguientes pasos luego de conectar a la base de datos con MySQL Workbench como se presenta a continuación.
    .row.justify-content-center.mb-5
      .col-lg-10
        div.px-3(style="background-color: #e3dfeb")
          .row.justify-content-center.mb-5
            .col-lg-7
              .p-3.py-5
                ol.lista-ol--cuadro
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 1
                    p.mb-0  Ingrese a la pestaña de administración.

                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 2
                    p.mb-0 Seleccione #[em Data Import/Restore].  
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 3
                    p.mb-0 Marque la opción #[em Import from Self-Contained File].
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 4
                    p.mb-0 Busque el archivo generado antes. 
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 5
                    p.mb-0 Seleccione la base de datos a restaurar.
                  li.d-flex
                    .lista-ol--cuadro__vineta
                      span 6
                    p.mb-0 Haga clic en el botón #[em Star Import].
            .col-lg-4: img(src='@/assets/curso/temas/55.svg', alt='').pt-4
    p.mb-5(data-aos='fade-right') Hasta este punto, puede tener la seguridad que está en capacidad de respaldar y restablecer la base de datos, por lo menos en un entorno de desarrollo y producción para bases pequeñas. Este proceso le puede servir para bases de datos grandes en las que debe usar la interfaz de comando “línea” con el comando #[em “source”]. Esto debido a que si la copia de seguridad es del tamaño de gigas, MySQL Workbench no podrá abrirlo y puede bloquearse, mientras que por la interfaz de línea de comando, el tamaño de la copia puede ser tan grande como se desee. 













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
