import { asset, list } from "../utils.js";
import Atividade from "./atividade.js";

/** Programação em colunas por dia. Dados: data/programacao.js. */
export default function Programacao({ dias }) {
  return `
    <section id="sec3">
      <div class="content">
        <div class="sec3">
          <h1>PROGRAMAÇÃO</h1>
          <div class="schedule-people">
            ${list(dias, (dia) => `
            <div>
              <div>
                <img src="${asset(dia.imagem)}" alt="" loading="lazy" decoding="async">
              </div>
              ${list(dia.atividades, Atividade)}
            </div>`)}
          </div>
          <div class="time programa-pdf">
            <a href="${asset("docs/comunicacaoantirracista_ce_programa.pdf")}" target="_blank" rel="noopener noreferrer">
              <button>ACESSE O PROGRAMA</button>
            </a>
          </div>
        </div>
      </div>
    </section>`;
}
