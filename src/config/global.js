export default {
  global: {
    componenteFormativo: 'Bases de datos: SQL y NoSQL',
    descripcionCurso:
      'Este componente aborda la gestión de bases de datos SQL y NoSQL, destacando sus características y aplicaciones. Incluye la configuración de entornos de trabajo con MySQL y MySQL Workbench, diseño y administración de bases de datos, y exploración de bases NoSQL como MongoDB. Los ejercicios prácticos refuerzan el aprendizaje mediante estudios de caso reales, como sistemas de facturación y gestión académica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Establecer un entorno de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Sistema gestor de bases de datos MySQL',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Sistema de diseño y gestión de bases de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Sistemas basados en MySQL',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Ejercicios de diseño e implementación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Análisis y diseño sistema de facturación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Identificación de sentencias DDL',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Generar la base de datos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Operaciones de mantenimiento y actualización',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Actualización por interfaz de línea de comandos',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Administración de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Copia de seguridad de base de datos con MySQL Workbench',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Restaurar una copia de seguridad con MySQL Workbench',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Introducción NoSQL',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Definición de NoSQL',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Cómo diferenciar NoSQL de SQL',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Tipos de bases de datos NoSQL',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Sistemas de Gestión de Bases de Datos (SGBD) NoSQL',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'NoSQL con MongoDB',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Conceptos básicos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Consola interactiva',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Crear primer documento',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Manipulación de datos con MongoDB',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228118_CF13_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Establecer un entorno de trabajo',
      referencia:
        'Bustos, H. (2019). Ejemplo introductorio DDL+DML (MySQL y Workbench) [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=xwfzw9paFwo',
    },
    {
      tema: 'NoSQL con MongoDB',
      referencia:
        'Fazt. (2019, 22 agosto). MongoDB Curso, Introducción Práctica a NoSQL [Vídeo]. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=lWMemPN9t6Q',
    },
    {
      tema: 'NoSQL con MongoDB',
      referencia:
        'Ávila, J. (2020, 15 junio). Bases de Datos NoSQL [Vídeo]. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=caS51djbuk4',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'conjunto ordenado y finito de operaciones que permite hallar la solución de un problema.',
    },
    {
      termino: 'Colección',
      significado:
        'es un compendio de documentos que comparten una relación de estructura similar, no necesariamente igual para todos los objetos.',
    },
    {
      termino: 'DBA',
      significado:
        ' <em>Data Base Administrator</em> es el rol que diseña un ingeniero responsable de las bases de datos en una organización.',
    },
    {
      termino: 'Diccionario de datos',
      significado:
        'conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.',
    },
    {
      termino: 'Documento',
      significado:
        'en bases de datos no relacionales, un documento es un objeto en formato JSON que es almacenado en binario en el motor NoSQL (BSON).',
    },
    {
      termino: 'Escalabilidad',
      significado:
        'es la capacidad que tiene un sistema de ser configurado en <em>software</em> o <em>hardware</em> para mejorar la respuesta a las exigencias o nuevas demandas de capacidad de procesamiento o almacenamiento (conservando las mismas funcionalidades).',
    },
    {
      termino: 'Metadatos',
      significado:
        'conjunto unitario de instrucciones que permite a una computadora realizar funciones diversas como el tratamiento de textos, el diseño de gráficos, la resolución de problemas matemáticos y el manejo de bancos de datos.',
    },
    {
      termino: 'Modelo conceptual',
      significado:
        'enfocado en prestar las entidades, los atributos y las relaciones entre dualidades con su multiplicidad.',
    },
    {
      termino: 'Modelo de datos',
      significado:
        'representación de la base de datos a través de un diagrama.',
    },
    {
      termino: 'NoSQL',
      significado: 'base de datos que no usa el estándar SQL.',
    },
  ],
  referencias: [
    {
      referencia:
        'Altarade, M. (2017, 20 abril). Bases de datos NoSQ: Guía definitiva. Pandorafms. ',
      link: 'https://pandorafms.com/blog/es/bases-de-datos-nosql',
    },
    {
      referencia: 'Graterol, Y. (2014). Mongo DB en español. GITHUB. ',
      link: 'https://github.com/yograterol/ebook-mongodb-basico',
    },
    {
      referencia:
        'Junta de Andalucía. (s. f.). Conceptos sobre la escalabilidad. Marco de Desarrollo de la Junta de Andalucía. ',
      link:
        'http://www.juntadeandalucia.es/servicios/madeja/contenido/recurso/220',
    },
    {
      referencia:
        'Macarrón, P. (2021, 8 marzo). Tipos de bases de datos no relacionales. Consultoría Certia. ',
      link: 'https://www.certia.net/tipos-de-bases-de-datos-no-relacionales/',
    },
    {
      referencia:
        'Microsoft. (2021, 19 mayo). Fundamentos de la normalización de bases de datos. Microsoft Docs. ',
      link:
        'https://docs.microsoft.com/es-es/office/troubleshoot/access/database-normalization-description',
    },
    {
      referencia:
        'RAE. (s. f.). base | Diccionario de la lengua española. «Diccionario de la lengua española» - Edición del Tricentenario. ',
      link: 'https://dle.rae.es/base#CiiosqO',
    },
    {
      referencia:
        'Resnick, M. (2008, 12 noviembre). Sembrando las semillas para una sociedad más creativa. Eduteka. ',
      link: 'http://eduteka.icesi.edu.co/articulos/ScratchResnickCreatividad',
    },
    {
      referencia:
        'Sudarshan, H. (2002). Fundamentos de bases de datos. McGraw-Hill.',
    },
    {
      referencia: 'Vertex42. (s.f.). Modelo de facturas gratis.',
    },
    {
      referencia:
        'Wikipedia. (2021). MariaDB. Wikipedia, la enciclopedia libre. ',
      link:
        'https://es.wikipedia.org/w/index.php?title=MariaDB&oldid=135391766',
    },
    {
      referencia:
        'Wikipedia. (2021). MySQL. Wikipedia, la enciclopedia libre. ',
      link: 'https://es.wikipedia.org/wiki/MySQL',
    },
    {
      referencia:
        'Wikipedia. (2021, 10 junio). <em>Extensible Markup Language</em>. ',
      link:
        'https://es.wikipedia.org/w/index.php?title=Extensible_Markup_Language&oldid=136233446',
    },
    {
      referencia: 'Wikipedia. (2021a, enero 17). NoSQL. ',
      link: 'https://es.wikipedia.org/w/index.php?title=NoSQL&oldid=132486305',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Eduardo Bastidas Paruma',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Peter Emerson Pinchao',
          cargo: 'Experto Temático',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
