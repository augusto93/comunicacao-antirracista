import { esc } from "../utils.js";

/**
 * Item da programação. "tipo" e "titulo" aceitam <br>.
 * "espacoInferior" (px) é ajustado à mão para alinhar as colunas dos dois dias.
 * "video" (opcional): link da gravação; quando preenchido, mostra o botão "assistir".
 * @param {{hora: string, tipo: string, titulo: string, participantes: ?string, descricao: string, espacoInferior?: number, video?: string}} atividade
 */
export default function Atividade(atividade) {
  return `
              <div class="time wid1">
                <h6>${esc(atividade.hora)}</h6>
                <h1>${atividade.tipo}</h1>
                <h2>${atividade.titulo}</h2>
                ${atividade.participantes ? `<p>${esc(atividade.participantes)}</p>` : "<br>"}
                <div class="time-descricao"${atividade.espacoInferior ? ` style="margin-bottom: ${Number(atividade.espacoInferior)}px;"` : ""}>
                  ${esc(atividade.descricao)}
                </div>
                ${atividade.video ? `
                <a href="${esc(atividade.video)}" target="_blank" rel="noopener noreferrer">
                  <button>assistir</button>
                </a>` : ""}
              </div>`;
}
