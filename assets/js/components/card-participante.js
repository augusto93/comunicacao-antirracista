import { asset, esc } from "../utils.js";

/**
 * Card com foto; a bio aparece no hover/foco.
 * @param {{slug: string, nome: string, foto: string, bio: string}} participante
 */
export default function CardParticipante(participante) {
  return `
            <div class="card" tabindex="0">
              <img src="${asset(participante.foto)}" alt="${esc(participante.nome)}" loading="lazy" decoding="async">
              <div class="gridPartiTexto card-content">
                <div>${esc(participante.nome)}</div>
                <div>${esc(participante.bio)}</div>
              </div>
            </div>`;
}
