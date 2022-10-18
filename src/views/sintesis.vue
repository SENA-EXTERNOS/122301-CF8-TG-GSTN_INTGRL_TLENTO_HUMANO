<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-center 
        .col-lg-12
          .row.mb-5   
            .col-lg-8   
              .titulo-sexto.color-acento-botones.fnd-5
                h3 Gestión integral de procesos del talento humano
                p.mb-0 Síntesis: Reclutamiento de personal idóneo según normatividad y políticas organizacionales
            .col-lg-4
                figure.mb-5
                  img.img-86(src='@/assets/curso/temas/logo-sena.svg')              
    
    p.mb-5 A continuación se presenta la síntesis de este recurso educativo donde se abordó el reclutamiento del personal idóneo según normatividad y políticas organizacionales visualizando todos los componentes en el marco del proceso de reclutamiento. 

      .row.justify-content-center
        .col-lg-10.mb-5
          figure
            img(src="@/assets/curso/temas/sintesis-.svg", alt="alt")
        .col-auto
          a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
