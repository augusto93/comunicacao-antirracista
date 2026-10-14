import { asset, esc, list, site } from "../utils.js";

const link = (item) =>
  `<a href="${esc(item.url)}"${item.external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${esc(item.label)}</a>`;

const menuItem = (item) =>
  item.submenu
    ? `
              <li class="dropdown">
                ${link(item)}
                <ul class="submenu">
                  ${list(item.submenu, (sub) => `
                  <li>${link(sub)}</li>`)}
                </ul>
              </li>`
    : `
              <li>${link(item)}</li>`;

/** Topo com logo e menu (aceita um nível de submenu). No WP: header.php + wp_nav_menu(). */
export default function Header({ menu }) {
  return `
    <header>
      <div class="content">
        <div class="header">
          <img class="topo header-logo" src="${asset("img/header/topo.svg")}" alt="${esc(site.title)}">
          <img class="topoMob" src="${asset("img/header/topomob.svg")}" alt="${esc(site.title)}">
          <nav class="topo">
            <ul>
              ${list(menu, menuItem)}
            </ul>
          </nav>
        </div>
      </div>
    </header>`;
}
