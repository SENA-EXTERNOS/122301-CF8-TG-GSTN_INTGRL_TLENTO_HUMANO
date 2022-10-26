<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fnd-t3
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Base de Datos
    .row.justify-content-center.mb-5
      .col-lg-4
        figure.mb-5
          img(src="@/assets/curso/temas/tema3/img-1.svg")
      .col-lg-8     
        .cajon.color-primario.p-4.mb-4
          p En el desarrollo del proceso de reclutamiento y en sí de la gestión del recurso humano, es necesario que la organización cuente con una base de datos de los colaboradores y de los candidatos en la medida que se va a realizando la recepción de hojas de vida.

    .row.justify-content-center.align-items-stretch.mb-5(data-aos="zoom-in-left")
      .col-lg-12.fnd-slide.al-t
        SlyderA(tipo="b")
          .row.al-t
            .col-md-5.mb-4.mb-md-0.px-5
              p La gestión de bases de datos en Colombia es regulada por La ley 1581 de 2012, Por la cual se dictan disposiciones generales para la protección de datos personales, la cual define base de datos como “Conjunto organizado de datos personales que sea objeto de tratamiento” (p.1), en esta misma ley se podrá encontrar todo lo referente al responsable de la administración de los datos, las autorizaciones necesarias para ello, la clasificación de los datos, y cuáles pueden ser de manejo público, sensible o confidencial. 
          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img-2.jpg')
          .row
            .col-md-5.mb-4.mb-md-0.px-5
              p.mb-5 En este orden de ideas es necesario precisar la definición datos personales siendo estos “toda información sobre una persona física identificada o identificable: se considerará identificable toda persona cuya identidad pueda determinarse, directa o indirectamente, en parti­cular mediante un número de identificación o uno o varios elementos específicos, característicos de su identidad física, fisiológica, psíquica, económica, cultural o social” ley 1581 de 2012 En lo que refiere al proceso de reclutamiento se contarán con todos los datos del candidato aquellos que se encuentren reposados en su hoja de vida y aquellos que vaya suministrando en el transcurso del proceso de selección. Garantizar su custodia y correspondientes permisos para la administración es sumamente necesario y lo más probable que es el proceso lo lleve a cabo el área de talento humano junto con otro proceso que garantiza todo el acorde manejo de información a nivel organización.

          
            .col-md-7
              figure
                img(src='@/assets/curso/temas/tema3/img-3.jpg')                
          .row
            .col-md-6.mb-4.mb-md-0.p-5
              p.mb-5 Dado lo anterior, como se evidencia, hay normas que regulan la gestión de bases de datos y por lo cual se hace necesario validar y garantizar su cumplimiento, de esta forma enmarcar la ejecución en la normatividad legal y contar con las autorizaciones pertinentes. 
          
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/img-4.jpg')

    .row.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-4
        figure.mb-5
          img(src="@/assets/curso/temas/tema3/img-5.svg")
      .col-lg-8     
        p Contar una base de datos en el desarrollo del ejercicio de reclutamiento, permitirá conocer el histórico de postulados que han participado en el proceso, monitorear los avances de cada candidato según las etapas respectivas del proceso y contar con un repositorio de información a través del tiempo. 
          br
          br
          | Es probable que algunas compañías cuenten con <em>software</em> como ERP, donde las bases de datos se gestionan aquí mismo o a través de herramientas ofimáticas. Sin importar la forma es  necesario que se garantice que las personas que tendrán acceso a esta información hacen parte del área de talento humano y lo utilizarán para el proceso de reclutamiento, ya que la información que se encontrará es de total manejo confidencial y hasta podrá contener reportes en el marco del proceso de selección. También es recomendable que, con cierta periodicidad y según las políticas de la compañía, se depuren los datos de los candidatos no contratados, ya que muchas compañías cometen el error de no contar con la autorización de sus datos, de acuerdo a la normatividad. 
    .row.justify-content-center.mb-5
      .col-lg-10     
        .cajon.color-acento-contenido.p-4.mb-4
          p Otro hecho que promueve en uso de bases de datos en especial para la administración de las hojas de vida, que se administren en el proceso de reclutamiento, es porque en un 80% ya las compañía no reciben ni manejan hojas de vida físicas, posiblemente cuando era así si se requeria consultar una dato o validar si una persona había participado en proceso, el documento estaba de fácil acceso y su consulta era de manera sencilla. Dada el impulso de la tecnología esta opción ya es no posible, por lo cual se hace necesario poder tener el histórico de manera sistematizada



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
