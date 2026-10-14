import { esc, list } from "../utils.js";

/** Linha do tempo das edições. Dados: data/linha-do-tempo.js ("tema" aceita <br>). */
export default function LinhaDoTempo({ edicoes }) {
  return `
    <section id="sec2Linha">
      <div class="content">
        <div class="sec2Linha">
          <div>LINHA DO TEMPO</div>
          <div class="infoLinha">
            ${list(edicoes, (edicao) => `
            <div>
              <time>${esc(edicao.ano)}</time>
              <h5>${esc(edicao.cidade)}</h5>
              <p>${edicao.tema}</p>
            </div>`)}
          </div>
        </div>
      </div>
    </section>`;
}
