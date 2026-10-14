import { list } from "../utils.js";
import CardParticipante from "./card-participante.js";

/** Grade de participantes. Dados: data/participantes.js. */
export default function Participantes({ participantes }) {
  return `
    <section id="sec4">
      <div class="content">
        <div class="sec4">
          <h1>PARTICIPANTES</h1>
          <div class="gridParticipantes">
            ${list(participantes, CardParticipante)}
          </div>
          <div class="gridDisclaimer">
            <div>PRESERVE, RECICLE, REUTILIZE.</div>
            •
            <div>ANTIRRACISMO É PRÁTICA DIÁRIA: RESPEITO, REPARAÇÃO E AÇÃO.</div>
            •
            <div>CLASSIFICAÇÃO LIVRE</div>
          </div>
        </div>
      </div>
    </section>`;
}
