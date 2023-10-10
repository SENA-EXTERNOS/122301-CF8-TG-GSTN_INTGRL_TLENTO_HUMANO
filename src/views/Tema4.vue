<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.fnd-t4
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Mercado laboral 
    .row.justify-content-center.align-items-center
      .col-lg-2(data-aos="fade-right")
        figure.mb-5
          img.img-110(src="@/assets/curso/temas/tema4/img-1-.svg")


      .col-lg-10(data-aos="fade-left")
        p.mb-5 Teniendo claro lo anterior, en materia de base de datos, es fundamental entender que el mercado laboral es el medio que permite que la oferta de vacantes sea clara y concisa para quien desea acceder a una oportunidad de empleo, y para la persona encargada del proceso de reclutamiento es el canal para realizar adecuadamente su función.
    p.mb-5 A continuación, se citarán algunos autores para entender qué es el mercado laboral:
    TabsC.color-acento-contenido.mb-5(data-aos="zoom-out")
      .py-4.py-md-5(titulo="Chiavenato (2009)")
        .row
          .col-md-6.mb-4.mb-md-0.px-5
            figure.mb-5
              img(src="@/assets/curso/temas/tema4/img-2.jpg")
          .col-md-6
            p Según Chiavenato (2009), establece que el mercado es el lugar donde tienen lugar las transacciones y las relaciones. Mercado significa el espacio de transacciones, el contexto de los trueques y los intercambios entre quienes ofrecen un producto o servicio. El mecanismo de oferta y demanda es la característica principal de todo mercado (p. 106). Aterrizando en el contexto del recurso humano, el mercado laboral es el terreno donde tienen lugar las relaciones teniendo en cuenta la oferta y la demanda presentada.
              br
              br
              | De acuerdo a lo anterior es importante resaltar que para el proceso de reclutamiento la demanda es la cantidad de personal que se encuentra en el mercado y la oferta es la posibilidad de candidatos para seleccionar según cada una de las vacantes.  Esta dinámica es volátil y dependerá del momento político o económico del país, así como del perfil que se requiere suplir. Adicionalmente, en este proceso interactúan las políticas regulatorias del país, las cuales, muchas veces, desafían el proceso y lo ponen a prueba, ya que estas políticas exigen registrar el proceso, imponen el costo de carga laboral que se debe cumplir y la competencia en sí misma del mercado laboral. 
      .py-4.py-md-5(titulo="Weller, J.(2020)")
        .row
          .col-md-6.mb-4.mb-md-0.px-5
            figure.mb-5
              img(src="@/assets/curso/temas/tema4/img-3.jpg")
          .col-md-6
            p Sin duda, hablar sobre la situación laboral hace necesario traer acotación los cambios de los últimos tiempos que ha vivido la sociedad en todos los sentidos, y de forma precisa en la manera de trabajar y las tendencias laborales. 
              br
              br
              | Como lo expresó Weller, J. (2020), en La pandemia del COVID-19 y su efecto en las tendencias de los mercados laborales (p.5), posiblemente el cambio de mayor impacto ha sido la digitalización. Se evidenció que estar confinados por varios meses generó el reto de mantener la economía viva, sin salir de casa ni tener contacto con otros. 
            p Por lo cual, muchos trabajos que requerían una oficina o realizar de forma manual se trasladaron a un computador desde casa o cualquier lugar del mundo, desencadenando la sustitución de la mano de obra, la transformación de empleos ya existentes y la creación de nuevos trabajos.
      .py-4.py-md-5(titulo="Oppenhainer, A. (2010)")
        .row
          .col-md-6.mb-4.mb-md-0.px-5
            figure.mb-5
              img(src="@/assets/curso/temas/tema4/img-4.jpg")
          .col-md-6
            p Dados los cambios en el mercado a causa de la pandemia, cabe mencionar la  preocupación en aspectos de educación, pues las tareas operativas o manuales han sido reemplazadas por máquinas con mayor velocidad, y en el mercado laboral son más apetecidos las personas altamente capacitadas y actualizadas.
              br
              br
              | Como lo menciona Oppenhainer, A. (2010) en ¡BASTA DE HISTORIAS! La obsesión latinoamericana con el pasado y las 12 claves del futuro, realiza la comparación del mercado laboral en Latinoamérica frente a otros lugares del mundo, y puntualmente explica la fórmula como Finlandia logró dejar de ser un país agrícola que explotaba madera a ser un país que exporta y la respuesta es bastante sencilla: educación (p. 3).

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-out-up")
      .col-lg-4
        figure.mb-5
          img(src="@/assets/curso/temas/tema4/img-5.png")
      .col-lg-8     
        .cajon.color-acento-contenido.p-4.mb-4
          p Con la suma de estos dos factores: digitalización más educación, el mercado laboral se mueve con mayor fuerza a tener personal capacitado y competente para desarrollar actividades de análisis, interpretación, sentido crítico, y así poseer la capacidad de acompañar los retos de las organizaciones y estar a la vanguardia día a día.
        p.mb-5 Sin embargo, el reto no es únicamente para el candidato, en términos de capacitación, formación, preparación o adaptación a las nuevas tendencias laborales. Como hemos visto, el mercado laboral para las empresas, es retador, y reformula permanentemente su estrategia, para ser más competitivos. Hoy en día, la elección de los candidatos y en que empresa quieren trabajar, va mucho más allá de la remuneración que podrían recibir. Hay detalles que se evalúan como: clima laboral, beneficios extralegales (beneficios para estudiar, flexibilidad de tiempo, reconocimiento, ayudas para los hijos/familiares), posibilidades de crecimiento y desarrollo y la estabilidad de la compañía; todo lo anterior se podría resumir en marca empleadora. En este orden de ideas, todas las medidas internas que se ejecuten, no solo beneficiarán al personal contratado, sino que marcarán un diferencial en el mercado laboral, facilitando el proceso de reclutamiento y evitando una rotación temprana.

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
