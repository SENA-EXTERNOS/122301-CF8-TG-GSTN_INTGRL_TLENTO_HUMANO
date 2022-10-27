export default {
  global: {
    componenteFormativo:
      'Reclutamiento de personal idóneo, según normatividad y políticas organizacionales',
    descripcionCurso:
      'Este componente permitirá conocer el proceso de reclutamiento de forma idónea dentro de una compañía, teniendo en cuenta normatividad legal vigente, procesos y políticas organizacionales. Así mismo, se podrá reconocer diferentes fuentes de reclutamiento, metodología para realizar la convocatoria de personal y análisis correcto de hojas de vida; garantizando que todo el proceso de selección aporte a la estrategia corporativa.',
    imagenBannerPrincipal: require('@/assets/curso/banner/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner/img-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner/img-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner/img-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'element'],
      },
      {
        clases: ['banner-principal-decorativo-4-', ''],
        imagen: require('@/assets/curso/banner/img-c.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'element'],
      },
      {
        clases: ['banner-principal-decorativo-5-', ''],
        imagen: require('@/assets/curso/banner/img-c.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6', 'element'],
      },
      {
        clases: ['banner-principal-decorativo-6-', ''],
        imagen: require('@/assets/curso/banner/img-c.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7', 'element'],
      },
      {
        clases: ['banner-principal-decorativo-7-', ''],
        imagen: require('@/assets/curso/banner/img-c.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8', 'element'],
      },
      {
        clases: ['banner-principal-decorativo-8-', ''],
        imagen: require('@/assets/curso/banner/img-c.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9', 'element'],
      },
      {
        clases: ['banner-principal-decorativo-9-', ''],
        imagen: require('@/assets/curso/banner/img-c.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Políticas organizacionales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planeación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Base de datos',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Mercado laboral',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Reclutamiento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Chiavenato, I (2009),<em> Gestión del talento humano.</em> McGraw Hill.',
      link:
        'https://jgestiondeltalentohumano.files.wordpress.com/2013/11/gestion-del-talento-humano-idalberto-chiavenato-3th.pdf',
    },

    {
      referencia:
        'Saber programas. (31 de julio de 2017). <em>¿Cómo crear un diagrama de Gantt en excel</em> [ Video]. Youtube.',
      link: 'https://youtu.be/chR6kx4btDQ',
    },

    {
      referencia:
        'Ley estatutaria 1581 de 2012. Por la cual se dictan disposiciones generales para la protección de datos personales. Octubre 17 de 2012. Reglamentada por el Decreto Nacional 1377 de 2013, Reglamentada Parcialmente por el Decreto 1081 de 2015. Ver sentencia C-748 de 2011. Ver Decreto 255 de 2022.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=49981',
    },

    {
      referencia:
        'Meardon, E. (s.f). <em>Todo sobre los diagramas de Gantt. </em>Atlassian.',
      link: 'https://www.atlassian.com/es/agile/project-management/gantt-chart',
    },

    {
      referencia:
        'Norma Técnica Colombiana, (2015). <em>Sistema de Gestión de Calidad. Requisitos</em> (ISO 9001).',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Normograma/NORMA%20ISO%209001%202015.pdf',
    },

    {
      referencia:
        'Oppenheiner, A. (2010).<em> ¡Basta de historias!: La obsesión latinoamericana con el pasado y las 12 claves del futuro. </em>',
      link:
        'https://caftabusiness.com/forumeconomicus/docs/Basta_de_historias_de_andres_oppenheimer.pdf',
    },

    {
      referencia:
        'Real Academia Española. (s.f). Vacante. Diccionario de la lengua española. vacante | Definición | Diccionario de la lengua española | RAE - ASALE',
      link: 'https://dle.rae.es/vacante?m=form',
    },
    {
      referencia:
        'Weller, J. (2020).<em> La pandemia del COVID-19 y su efecto en las tendencias de los mercados laborales.</em> Revista de la educación superior.',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/45759/1/S2000387_es.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Diversidad',
      significado:
        'diferencia o distinción de personas según sus características.',
    },
    {
      termino: 'Fuentes de reclutamiento',
      significado:
        'canal de comunicación a través del cual se informa sobre la vacante a cubrir.',
    },
    {
      termino: '<em>Head hunter</em>',
      significado:
        'empresa dedicada a “cazar talento” o atraer candidatos con los requerimientos solicitado por la compañía contratante.',
    },
    {
      termino: 'Hoja de vida',
      significado:
        'documento suministrado por los candidatos para ser evaluado en el marco del proceso de reclutamiento.',
    },
    {
      termino: 'Inclusión',
      significado:
        'hace referencia a la acción donde todas las personas tienen las mismas posibilidades y pueden participar.',
    },
    {
      termino: 'Marca empleadora',
      significado:
        'propuesta de valor que una empresa ofrece a sus colaboradores presentes o futuros, reflejada en la reputación que tienen.',
    },
    {
      termino: 'PHVA',
      significado: 'ciclo de la planeación: planear, hacer, validar, actuar,',
    },
    {
      termino: 'Presupuesto',
      significado:
        'acción por la cual se proyectan los costos asociados a cierta actividad.',
    },
    {
      termino: 'Reclutamiento',
      significado:
        'proceso por el cual se realiza la atracción de personal idóneo para dar inicio al proceso de selección.',
    },
    {
      termino: 'SG-SST',
      significado: 'sistema de gestión de seguridad y salud en el trabajo.',
    },
  ],
  complementario: [
    {
      tema: 'Reclutamiento ',
      referencia:
        'Sukhwani, A. (2021) <em>¿Cómo atraer talento en entornos competitivos?</em> [Video]. Youtube. https://youtu.be/cTNQvp_gibM',
      tipo: 'Video',
      link: 'https://youtu.be/cTNQvp_gibM',
    },
    {
      tema: 'Diagrama de Gantt',
      referencia:
        'Saber programas. (31 de julio de 2017). <em>¿Cómo crear un diagrama de Gantt en excel </em>[ Video]. Youtube. https://youtu.be/chR6kx4btDQ ',
      tipo: 'Video',
      link: 'https://youtu.be/chR6kx4btDQ',
    },
    {
      tema: 'Mercado laboral',
      referencia:
        'Universidad EAFIT, (16 de noviembre, 2021)<em> La Marca Empleadora, es una experiencia construida por todos </em>  [ Video]. Youtube. https://youtu.be/QD2KldypYZc',
      tipo: 'Video',
      link: 'https://youtu.be/QD2KldypYZc',
    },
    {
      tema: 'Políticas (Diversidad e inclusión)',
      referencia:
        'Zavala, H (Productor). (2022, 29 Julio) <em>¿Por qué es importante la diversidad e inclusión en el lugar de trabajo? </em>[Audio <em>Podcast</em>] RFR. www.spotify.com',
      tipo: '<em>Podcast</em>',
      link:
        'https://open.spotify.com/episode/65ElfV8tvlsYuqgrWMUzKe?si=gzTYPPEdS_mCizW1_ql1aA',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
