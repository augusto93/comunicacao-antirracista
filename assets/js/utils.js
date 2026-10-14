/**
 * Helpers compartilhados pelos componentes.
 * No WordPress equivalem a: asset() -> get_theme_file_uri(), esc() -> esc_html()/esc_attr().
 */

export const site = {
  title: "Comunicação Antirracista",
};

/** Caminho de um arquivo dentro de /assets. */
export const asset = (path) => `assets/${path.replace(/^\//, "")}`;

/** Escapa texto para uso seguro em HTML/atributos. */
export const esc = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

/** Junta o resultado de um map() em uma única string. */
export const list = (items, render) => items.map(render).join("");
