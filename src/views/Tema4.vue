<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestores de contenido CMS
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-lg-0.mb-3(data-aos="fade-right")
        p.mb-0  Los gestores de contenidos, conocidos como #[em #[span.color-morado CMS (Content Management System)]], surgieron para simplificar la labor de los administradores de sitios web, comúnmente llamados WebMasters. Su desarrollo ha avanzado significativamente, posicionándolos como herramientas clave para publicar información y contenido propio en la web. Esto permite a los usuarios gestionar sus sitios sin la necesidad de externalizar el servicio o contratar a un profesional, evitando así costos innecesarios.
        h5.mb-5 A continuación, se presenta una figura que ilustra la integración general de un CMS en un sitio web: 
      .col-lg-3.col-7: img(src='@/assets/curso/temas/44.svg', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8.col-7
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 7.
          span Integracion general del CMS
        img.d-none.d-lg-block(src='@/assets/curso/temas/45.svg', alt='El software CMS, se integra entre la página web y un servidor con sistema operativo.')
        img.d-block.d-lg-none(src='@/assets/curso/temas/46.svg', alt='El software CMS, se integra entre la página web y un servidor con sistema operativo.')
    p.mb-5(data-aos='fade-right') Un gestvor de contenidos o CMS, es un #[em software] web diseñado para facilitar la creación, gestión y publicación de contenido en páginas web, sin requerir conocimientos avanzados en desarrollo de software o programación informática. Estas herramientas proporcionan una plataforma de administración virtual que permite a los usuarios crear, editar y publicar contenido web de manera eficiente. 
    .titulo-tres.mb-4: h3.mb-0 Funciones 
    h5.mb-4 A continuación, se describen las principales funciones que debe cumplir un CMS.
    .f-4-1.p-5.mb-5
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/47.svg' alt='AvatarTop')
          h4: span.color-azul Independencia entre código y contenido 
          p Permite separar la gestión de la estructura y funcionalidad de la web de la administración de contenidos, facilitando el trabajo de perfiles distintos: desarrolladores y creadores de contenido. 
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/48.svg' alt='AvatarTop')
          h4: span.color-azul Plantillas en diseño web 
          p Facilitan modificar la apariencia del sitio web usando plantillas para colores, tipos de letra, imágenes, etc. Hay plantillas gratuitas y profesionales disponibles. 
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/49.svg' alt='AvatarTop')
          h4: span.color-azul Extensión de capacidades 
          p Los CMS permiten añadir nuevas funcionalidades mediante plugins, cubriendo así necesidades específicas del sitio web. 
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/50.svg' alt='AvatarTop')
          h4: span.color-azul Enfocados al SEO 
          p Facilitan la implementación de estrategias de SEO para mejorar el posicionamiento en motores de búsqueda. 
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/51.svg' alt='AvatarTop')
          h4: span.color-azul Gestión de enlaces 
          p Permiten una gestión eficiente de los permalinks asociados a cada contenido, importante para técnicas SEO. 
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/52.svg' alt='AvatarTop')
          h4: span.color-azul Flujos de trabajo 
          p Posibilitan definir responsabilidades dentro del equipo de administración, con flujos de aprobación para la publicación de contenidos. 
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/53.svg' alt='AvatarTop')
          h4: span.color-azul Comentarios 
          p Incluyen sistemas de gestión de comentarios que permiten validar autores y administrar los comentarios recibidos. 
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/54.svg' alt='AvatarTop')
          h4: span.color-azul Control de versiones 
          p Permiten versionar el contenido, facilitando la recuperación de versiones anteriores y la publicación de versiones específicas. 
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/55.svg' alt='AvatarTop')
          h4: span.color-azul Múltiples idiomas 
          p Ofrecen gestión de contenido en varios idiomas, adaptándose a las preferencias del visitante. 
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/56.svg' alt='AvatarTop')
          h4: span.color-azul Múltiples sitios 
          p Permiten gestionar varios sitios o secciones desde una plataforma centralizada, optimizando el mantenimiento. 
        .tarjeta.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-4
              img(src='@/assets/curso/temas/57.svg' alt='AvatarTop')
          h4: span.color-azul Seguridad 
          p Enfocan en perfilar el contenido según el usuario y proveen protección general al sitio web. 
    .titulo-tres.mb-4: h3.mb-0 Características 
    h4.mb-4 A continuación, se presentan  las características de los gestores de contenido CMS: 
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        .tarjeta.p-4(style="background-color:#f2e5fd ")
          ul.lista-ul--color
            li
              i.fas.fa-circle.fa-xs(style="color:#8722E2 ")
              | El frontend, corresponde a la parte visible del CMS para los usuarios que acuden como invitados o usuarios registrados. 
            li
              i.fas.fa-circle.fa-xs(style="color:#8722E2 ")
              | Conformación modular para la configuración y personalización de los sitios web. 
            li
              i.fas.fa-circle.fa-xs(style="color:#8722E2 ")
              | Administración de usuarios, roles, perfiles y permisos de acceso. 
            li
              i.fas.fa-circle.fa-xs(style="color:#8722E2 ")
              | Componentes para la creación, edición, publicación de contenidos. 
            li
              i.fas.fa-circle.fa-xs(style="color:#8722E2 ")
              | Plantillas para distribuir y mantener el diseño del sitio web. 
            li
              i.fas.fa-circle.fa-xs(style="color:#8722E2 ")
              | Posibilidad de extensiones que complementan las funcionalidades en el gestor de contenidos. 
            li
              i.fas.fa-circle.fa-xs(style="color:#8722E2 ")
              | Características de manejo de internacionalización en varios idiomas.
      .col-lg-3.col-7: img(src='@/assets/curso/temas/58.svg', alt='') 
    .titulo-tres.mb-4: h3.mb-0 Clasificación CMS 
    p.mb-5(data-aos='fade-right') Se clasifican normalmente teniendo en cuenta los siguientes tres aspectos, de acuerdo al lenguaje de programación, a la distribución de la licencia y a las funcionalidades que presenta: 
      br
      br
      | #[b Teniendo en cuenta el lenguaje de programación:] 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.h-100(style="background-color: #D5FFFA ").p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/59.png', alt='Texto que describa la imagen')
          p jAPS, Liferay, DSpace, Fedora, Nuxeo EP, Magnolia, Hippo CMS, Calenco, Polopoly, IBM Lotus Web Content Management, Day Communiqué WCM, Jarimba, Vignette, etc. 
      .col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.h-100(style="background-color: #D5FFFA ").p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/60.png', alt='Texto que describa la imagen')
          p Drupal, CMS Made Simple, Joomla!, Mambo, PHP-Nuke, TikiWiki, TYPO3, aWordPress, Xoops, Zikula, Jadu, ExpressionEngine, Accrisoft Freedom, CMS 10, Dim Works CMS, Content-SORT, Prodigia Easy Site Manager, PipePS, SiteAd CMS, etc. 
      .col-lg-4.mb-lg-0.mb-3(data-aos="fade-right")
        .tarjeta.h-100(style="background-color: #D5FFFA ").p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/61.png', alt='Texto que describa la imagen')
          p DotNetNuke Community Edition, Umbraco, mojoPortal, Kentico CMS, SharePoint Server, Telligent Community, Ektron CMS400.NET, Quantum Art QP7, webControl CMS, etc.
    h4.mb-4 Teniendo como base la distribución de la licencia: 
    p.mb-5(data-aos='fade-right') #[span.color-morado De software libre (Open Source):] significa que esta herramienta no presenta costos de licencia y el código fuente es accesible para ser modificado por los desarrolladores.  El soporte técnico de este tipo de CMS es asumido por la entidad que lo implementa o por medio de comunidades online que comparten y mantienen su documentación.  
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-5.col-7: img(src='@/assets/curso/temas/62.png', alt='')
            .col-lg-7
              p.mb-0.text-white En esta categoría, algunos de los gestores más reconocidos son WordPress, Drupal, Joomla, Plone, TYPO3, OpenCMS, PHPNuke o Moodle.
    p.mb-5(data-aos='fade-right') #[span.color-morado De código privado:] presentan costos de licencia y servicio, el código fuente es propietario por tanto sólo puede ser accedido y modificado por la compañía o personas que lo desarrollaron.  En cuanto al soporte técnico es parte de la oportunidad de negocio y normalmente es de excelente calidad, así como una gran cantidad de información documental.  
    .row.justify-content-center.mb-5
      .col-lg-8
        .tarjeta.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-5.col-7: img(src='@/assets/curso/temas/63.svg', alt='')
            .col-lg-7
              p.mb-0.text-white Los gestores más destacados son CMS10, Eximius2 CMS, Contendo CMS, Jarimba, CMS HYDRAportal, OnBase, IWEB, Oracle Portal, PipePS, Paloo, Smartone CMS, Vbulletin, XCM – Xeridia Content Manager, ZWeb Publisher CMS.
    .row.justify-content-center.mb-3
      .col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in")
        .tarjeta.h-100(style="background-color: #D6E1FD ").p-4.h-100
          .row.mb-3
            .col-3
              figure
                img(src='@/assets/curso/temas/64.svg', alt='Texto que describa la imagen')
          h5 Plataformas en general 
          p Drupal, Gekko, E107, Joomla, Mambo, PHP-Nuke, TYPO3, TYPOLight, XOOPS, ZWeb Publisher CMS, ADSM Portal 2.0, 360 Web Manager Software, GTLive 
      .col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in")
        .tarjeta.h-100(style="background-color: #D6E1FD ").p-4.h-100
          .row.mb-3
            .col-3
              figure
                img(src='@/assets/curso/temas/65.svg', alt='Texto que describa la imagen')
          h5 Sitios de educación 
          p ATutor, Claroline, Dokeos, eCollege, FrogTeacher, Moodle, Sakai Project, Scholar360, Synergeia, Teleto 
      .col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in")
        .tarjeta.h-100(style="background-color: #D6E1FD ").p-4.h-100
          .row.mb-3
            .col-3
              figure
                img(src='@/assets/curso/temas/66.svg', alt='Texto que describa la imagen')
          h5 Blogs 
          p WordPress, bBlog, DotClear, Lifetype, Plone, Nucleus CMS, Blogger, Textpattern 
    .row.justify-content-center.mb-3
      .col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in")
        .tarjeta.h-100(style="background-color: #D6E1FD ").p-4.h-100
          .row.mb-3
            .col-3
              figure
                img(src='@/assets/curso/temas/67.svg', alt='Texto que describa la imagen')
          h5 Galerías 
          p Gallery, Pixelpost, Expression Engine 
      .col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in")
        .tarjeta.h-100(style="background-color: #D6E1FD ").p-4.h-100
          .row.mb-3
            .col-3
              figure
                img(src='@/assets/curso/temas/68.svg', alt='Texto que describa la imagen')
          h5 Wikis 
          p MediaWiki, TikiWiki, Twiki 
      .col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in")
        .tarjeta.h-100(style="background-color: #D6E1FD ").p-4.h-100
          .row.mb-3
            .col-3
              figure
                img(src='@/assets/curso/temas/69.svg', alt='Texto que describa la imagen')
          h5 Comercio electrónico  

          p osCommerce, Magento, Zen Cart, Drupal e-Commerce, CubeCart, OpenCart, VirtueMart 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3(data-aos="zoom-in")
        .tarjeta.h-100(style="background-color: #D6E1FD ").p-4.h-100
          .row.mb-3
            .col-3
              figure
                img(src='@/assets/curso/temas/70.svg', alt='Texto que describa la imagen')
          h5 Groupware  
          p Webcollab, eGroupWare, Group-Office 
    h4.mb-4 Como se indicó previamente, recordamos que la clasificación de los CMS se presenta de la siguiente forma:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 8.
      span Esquema de clasificación de los CMS 
    img.d-none.d-lg-block.mb-5(src='@/assets/curso/temas/71.svg', alt='Con base en el lenguaje de programación, con base en la licencia y de acuerdo con su funcionalidad.')
    img.d-block.d-lg-none.mb-5(src='@/assets/curso/temas/72.svg', alt='Con base en el lenguaje de programación, con base en la licencia y de acuerdo con su funcionalidad.')
    .titulo-tres.mb-4: h3.mb-0 Tipos CMS 
    p.mb-5(data-aos='fade-right') Los tipos de gestores de contenidos varían según los tipos de páginas web que se deseen desarrollar o crear. Para satisfacer estas necesidades, existen gestores de contenidos altamente especializados, equipados con herramientas y características diseñadas para cumplir con requerimientos específicos. A continuación, se presentan algunos de los gestores de contenidos disponibles para su uso en diferentes contextos: 
    .row.justify-content-center.mb-3.g-1
      .col-lg-2
        .tarjeta.tarjeta-iconos.p-2
          img(src='@/assets/curso/temas/73.svg', alt='')
          h5.mb-0 Blogs
      .col-lg-2
        .tarjeta.tarjeta-iconos.p-2
          img(src='@/assets/curso/temas/74.svg', alt='')
          h5.mb-0 Páginas corporativas
      .col-lg-2
        .tarjeta.tarjeta-iconos.p-2
          img(src='@/assets/curso/temas/75.svg', alt='')
          h5.mb-0 Tiendas online o ecommerce
      .col-lg-2
        .tarjeta.tarjeta-iconos.p-2
          img(src='@/assets/curso/temas/76.svg', alt='')
          h5.mb-0 Sitios de #[em e-learning]
    .row.justify-content-center.mb-5
      .col-lg-2
        .tarjeta.tarjeta-iconos.p-2
          img(src='@/assets/curso/temas/77.svg', alt='')
          h5.mb-0 Foros
      .col-lg-2
        .tarjeta.tarjeta-iconos.p-2
          img(src='@/assets/curso/temas/78.svg', alt='')
          h5.mb-0 #[em Wikis]

      

    

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
