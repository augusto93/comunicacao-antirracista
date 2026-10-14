import { asset } from "../utils.js";

const TOTAL_SLIDES = 20;

/**
 * Sobre o projeto + galeria de fotos.
 * No WP: o texto vira o conteúdo de uma página (the_content()) e as fotos uma galeria.
 */
export default function Sobre() {
  const slides = Array.from({ length: TOTAL_SLIDES }, (_, i) => i + 1);

  return `
    <section id="sec2">
      <div class="content">
        <div class="sec2">
          <div>
            <h1>SOBRE O PROJETO</h1>
            <div>
              <p>
                <b>Depois da edição de Brasília abrir caminhos para o debate e da edição do Rio de Janeiro ampliar vozes, o Nordeste chama.</b>
                <br><br>
                O <b>Comunicação Antirracista</b> chega a Fortaleza para afirmar o Nordeste como território de pensamento, cultura, crítica e produção de sentido. Nesta 3ª edição, o evento reúne pesquisadores, comunicadores, lideranças sociais, artistas e representantes institucionais em uma programação dedicada à disputa de narrativas, ao enfrentamento dos apagamentos históricos e à construção de práticas comunicacionais comprometidas com justiça, presença e transformação.
                <br><br>
                O Comunicação Antirracista nasceu da urgência de transformar o debate público e as práticas de comunicação no Brasil, partindo do entendimento de que comunicar também é um ato de justiça, reparação e presença.
                <br><br>
                Desde sua primeira edição, realizada em Brasília, no Museu Nacional da República, o evento vem reunindo pensamento crítico, arte, formação e incidência pública em torno de temas como equidade racial, democracia, memória, representação e responsabilidade coletiva. A segunda edição, realizada no Rio de Janeiro, na Casa Museu Eva Klabin, deu continuidade a esse percurso ao destacar o protagonismo de mulheres negras e indígenas na construção de narrativas, políticas e futuros possíveis.
                <br><br>
                Em 2026, o Comunicação Antirracista chega a Fortaleza com o tema <b>Nordeste em Voz Alta.</b> A 3ª edição propõe um encontro entre comunicação, cultura, território e políticas públicas, afirmando o Nordeste como centro de produção de conhecimento, linguagem, crítica e imaginação política.
                <br><br>
                A programação parte do entendimento de que o racismo não se sustenta apenas por estruturas econômicas e institucionais, mas também pelas imagens que circulam, pelas histórias que são contadas, pelas vozes que são legitimadas e pelos territórios que são reconhecidos ou silenciados.
                <br><br>
                Ao reunir pesquisadores, comunicadores, lideranças sociais, artistas e representantes institucionais, o evento propõe refletir sobre apagamentos históricos, responsabilidade ética na comunicação, racismo recreativo, políticas públicas, presença negra e indígena, produção de conhecimento, jornalismo, literatura, diversidade institucional e oportunidades no Nordeste.
                <br><br>
                Realizada no <b>Centro Dragão do Mar de Arte e Cultura, em Fortaleza,</b> esta edição reafirma o Comunicação Antirracista como uma plataforma de encontro entre pensamento, escuta pública, formação e circulação cultural. Mais do que uma programação pontual, o evento busca fortalecer práticas comunicacionais comprometidas com memória, justiça, cuidado e transformação social.
              </p>
            </div>
          </div>
          <div class="slide-container" data-slider data-slider-duration="1" data-slider-delay="4" data-slider-ease="power1.out">
            ${slides.map((n) => `
            <img ${n === 1 ? `src="${asset(`img/sobre/sec2-${n}.webp`)}" loading="lazy"` : `data-src="${asset(`img/sobre/sec2-${n}.webp`)}"`} alt="Slide ${n}" class="slide${n === 1 ? " active" : ""}">`).join("")}
          </div>
        </div>
      </div>
    </section>`;
}
