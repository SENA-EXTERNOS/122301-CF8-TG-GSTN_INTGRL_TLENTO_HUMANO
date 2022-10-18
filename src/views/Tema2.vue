<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fnd-t2
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Planeación
    .row.justify-content-center.align-items-center
      .col-lg-2(data-aos="fade-right")
        figure.mb-5
          img.img-110(src="@/assets/curso/temas/tema2/img-1-.svg")
      .col-lg-10(data-aos="fade-left")
        p.mb-5 Según la Norma Técnica Colombiana (2015) (p. IV) La planeación es la primera fase del ciclo PHVA (planear, hacer, validar, actuar), metodología que se implementa para generar un proceso continuo que permite a las organizaciones asegurar que sus procesos cuenten con los recursos adecuados para gestionar correctamente, determinando las oportunidades de mejora.  

    TabsC.color-acento-contenido.mb-5(data-aos="slide-right")
      .py-4.py-md-5(titulo="Fase “P”")
        .row
          .col-md-6.mb-4.mb-md-0.px-5
            figure.mb-5
              img(src="@/assets/curso/temas/tema2/img-2.svg")
          .col-md-6
            p En esta fase se debe determinar qué recursos se necesitan para realizar el reclutamiento de personal,  conocer y entender el manual de funciones y perfiles, establecer cómo se realizará la comunicación, que fuentes de reclutamiento se activarán, bajo qué indicadores o métricas se realizará la medición al proceso, adicionalmente, en ella se harán los acuerdos de nivel de servicios interno, con el fin de garantizar los tiempos de respuesta ante una solicitud de personal.         
      .py-4.py-md-5(titulo="Planeación organizacional")
        .row
          .col-md-6.mb-4.mb-md-0.px-5
            figure.mb-5
              img(src="@/assets/curso/temas/tema2/img-3.svg")
          .col-md-6
            p Así mismo, es necesario destacar que dicha planeación se desglosa, y por supuesto debe hacer parte del proceso global de la gestión del recurso humano pues este está alineado con el desarrollo corporativo.
              br
              br
              | Esta planeación es clave en cualquier proceso que se desarrolle en el marco de la gestión de personas, ya que es vital la sinergia con la estrategia corporativa para lograr los resultados que se tienen planteados y porque todo lo que se documente en las organizaciones se transmitirá en la cultura organizacional,  por ende los colaboradores deben vivirlo de la misma manera.    
      .py-4.py-md-5(titulo="Objetivos de planeación")
        .row
          .col-md-6.mb-4.mb-md-0.px-5
            figure.mb-5
              img(src="@/assets/curso/temas/tema2/img-4.svg")
          .col-md-6
            p En este orden de ideas, los objetivos de contar con una planeación para el proceso de reclutamiento son: velar por el cumplimiento normativo y políticas organizacionales, garantizar la alineación a la estrategia planteada, asegurar la disponibilidad de los recursos requeridos para que el proceso fluya de la mejor manera, evitar reprocesos, y finalmente,  que la atracción de talento genere valor.              

    p.mb-5 Como se expresó previamente, dentro de la planeación está la actividad de realizar la medición y avance del proceso, y como herramienta para llevarlo a cabo se propone el diagrama de Gantt. Antes de entrar en materia y explicar su funcionalidad y aplicabilidad, es necesario conocer un poco sobre su historia. 

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.fnd-bizq.mb-5(data-aos="zoom-out")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-5.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 A principios del siglo XX, Henry Gantt revolucionó la gestión de proyectos con los diagramas de Gantt que, por aquel entonces, se trazaban en hojas de papel. Con el uso creciente de los ordenadores en la década de los 80´s, los diagramas de Gantt se volvieron cada vez más complejos y elaborados. Hoy en día, estos diagramas siguen siendo una de las herramientas de gestión de proyectos más utilizadas. (Meardon, 2022).

    .row.justify-content-start.align-items-center.mb-5         
      .col-lg-4
        .fnd-y.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Automatización de la planeación

    .row.justify-content-center.align-items-center.mb-5(data-aos="slide-down")
      .col-lg-6
        figure.mb-5
            img(src="@/assets/curso/temas/tema2/img-6.svg")
      .col-lg-6          
        p.mb-5 Así la metodología de organización y planeación de Gantt tiene como objetivo conocer los componentes de un proyecto y aterrizar las tareas más pequeñas y gestionables. Estas tareas son programadas en líneas de tiempo junto con las personas asignadas y los hitos, permitiendo identificar la logística que requiere el  proyecto permitiendo monitorear los avances en tiempo real . Si llega a suceder un retraso (situación que puede ocurrir), automáticamente las tareas en línea cambian su fecha de entrega.
        .cajon.color-acento-contenido.p-4.mb-4.px-5
          p Al entender que el diagrama de Gantt permite monitorear los tiempos de ejecución, las personas responsables, los avances, recursos y logística necesaria para la implementación de un proyecto, se puede concluir que su mayor aporte es visualizar todos los procesos de forma global, así como garantizar que todos los ejecutores estén alineados, velar por los avances y generar planes de acción de forma oportuna.

    .row.justify-content-start.align-items-center.mb-5         
      .col-lg-4
        .fnd-y.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Diagrama de Gantt

    p.mb-5 Al entender que el diagrama de Gantt permite monitorear los tiempos de ejecución, las personas responsables, los avances, recursos y logística necesaria para la implementación de un proyecto, se puede concluir que su mayor aporte es visualizar todos los procesos de forma global, así como garantizar que todos los ejecutores estén alineados, velar por los avances y generar planes de acción de forma oportuna.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-right")
      .col-lg-12.fnd-slide
        SlyderA(tipo="b")
          .row
            .col-md-5.mb-4.mb-md-0.px-5
              p Para la creación de este diagrama, es necesario reconocer las actividades a ejecutar en el marco del proyecto (para este caso puntual el reclutamiento de personal), fecha de inicio y cuál debe ser la fecha de finalización de cada una de las fases. 
                br 
                br 
                | Como ejercicio demostrativo lo invitamos a ver el video dispuesto en el material complementario Diagrama de Gantt.
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img-7.png')
          .row
            .col-md-5.mb-4.mb-md-0.px-5
              p Este diagrama se puede realizar de manera sencilla en Excel pero, también, existen softwares mucho más completos y con más recursos que permiten medir de forma más eficiente el proyecto según sea el caso. Lo importante es que las personas puedan tener visual sobre los diferentes avances o ajustes del proyecto y monitorear todo lo referente al mismo.  
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img-8.png')
          .row
            .col-md-5.mb-4.mb-md-0.px-5
              p Al final, sin importar a partir de qué herramienta se logró, hacer uso de esta metodología y, en general aplicar la planeación, es de suma importancia ya que el proceso de reclutamiento es una pequeña parte de un gran proceso como lo es la <b>selección de personal.</b> Planear toma relevancia dentro de la estrategia de las empresas ya que es un proceso que garantiza llevar el seguimiento de las tareas, interacción entre el equipo de forma fluida, hacer uso de los recursos de una manera eficiente, aprender de los errores y, seguramente lo más importante, atraer el personal idóneo para la compañía, según cada necesidad. 
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema2/img-9.png')


    .row.justify-content-start.align-items-center.mb-4         
      .col-lg-4
        .fnd-y.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Presupuesto en talento humano 

    p.mb-5  Como parte de la planeación, en el área de recursos humanos, como en cualquier área de una compañía, se requiere un presupuesto para ejecutar sus diferentes actividades, entendiéndose ‘presupuesto’ como el dinero proyectado y provisionado para cada uno de los subprocesos en pro de la gestión de las personas en un contexto organizacional, es decir, es el dinero calculado para las actividades propias del área entre las cuales está el atraer, seleccionar y capacitar personal, realizar programas de bienestar, planear el costo de personal (la nómina), la dotación y el cumplimiento de lo establecido por el sistema de gestión de seguridad y salud en el trabajo, entre otros.     


    PasosA.color-acento-contenido.mb-5(tipo="n")(data-aos="fade-right")
      .row(titulo="")
        .col-md-6.mb-4.mb-md-0
          p De acuerdo con lo anterior, es importante tener en cuenta que al momento de activar el proceso de reclutamiento se debe tener claro el costo del colaborador a contratar. En este punto, es necesario conocer que la contratación de personal en Colombia, a través de un contrato laboral, incluye su salario pero a este hay que agregarle toda la carga prestacional, que es alrededor de un 40% del total del salario devengado. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-10.png')

      .row(titulo="")
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/img-11.png')
        .col-md-6
          p.txt-izq  Así mismo para el rubro de reclutamiento se debe tener claro el dinero autorizado e ir monitoreando durante el proceso, su gasto, lo ideal es realizar seguimiento mensual. Los gastos más comunes que se encuentran inmersos en este procesos serán las fuentes de reclutamiento y selección (portales de empleo, periódicos, headhunter-cazatalentos, redes sociales, entre otros) costo de exámenes médicos, estudios de seguridad, pruebas técnicas requeridas con un tercero, ejemplo: prueba de conducción, visita domiciliaria, entre otros. Por esto se hace sumamente importante que la aprobación de cada filtro sea válida y tener certeza que el candidato está interesado en la oferta y sea ideal para el puesto. 

      .row(titulo="")
        .col-md-6.mb-4.mb-md-0
          p De la misma manera en el marco de la proyección del presupuesto de reclutamiento, es necesario tener en cuenta que para el cierre de una vacante  debe cumplirse el proceso de selección con todos los candidatos y así escoger a quien cumpla todos los requerimientos. Es decir, se deberá presupuestar los costos durante el proceso de los candidatos sin olvidar que no todos llegarán a la fase de contratación. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/img-12.png')

      .row(titulo="")
        .col-md-6.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema2/img-13.png')
        .col-md-6
          p.txt-izq  Por esto es necesario revisar cuáles son los motivos principales de caída, garantizar que los filtros aplicados sean necesario según el perfil, que las fuentes de reclutamiento realmente están generando efectividad al proceso, con el objetivo de ser muy cuidadosos con el gasto y no generar sobrecostos.




</template>

<script>
export default {
  name: 'Tema2',
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
