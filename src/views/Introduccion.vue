<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center
      .col-lg-2(data-aos="fade-right")
        figure.mb-5
          img.img-110(src="@/assets/curso/temas/img-intro.png")


      .col-lg-10(data-aos="fade-left")
        p.mb-5 Apreciado aprendiz, bienvenido a este componente formativo, donde se abordará el proceso de reclutamiento de personal, las distintas fases y los requerimientos que trae consigo la difusión de una vacante. Adicional, se realizará un recorrido por la normatividad y políticas empresariales, con las cuales debe alinearse el área de talento humano.
          br
          br
          |En el siguiente video conocerá, de forma general, la temática que se estudiará en el presente recurso educativo:


    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
  


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
