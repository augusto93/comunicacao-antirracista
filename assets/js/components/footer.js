import { asset, esc, list } from "../utils.js";

const social = [
  { label: "facebook", icon: "img/icons/icoface.webp", url: "https://www.facebook.com/people/Comunica%C3%A7%C3%A3o-Antirracista-Consci%C3%AAncia-Resist%C3%AAncia-A%C3%A7%C3%A3o/61572668699678/?sk=about" },
  { label: "instagram", icon: "img/icons/icoinsta.webp", url: "https://www.instagram.com/comunicacao_antirracista/" },
  { label: "youtube", icon: "img/icons/icoyou.webp", url: "https://www.youtube.com/@ComunicacaoAntirracista" },
];

/** Rodapé. No WP: footer.php. */
export default function Footer() {
  return `
    <footer id="footer" class="footer">
      <div class="fooContent">
        <div class="wid5">
          <div class="footer-acessibilidade">
            <div class="footer-acessibilidade__inner">
              <img class="footer-acessibilidade__icon" src="${asset("img/icons/acess.webp")}" alt="icone de acessibilidade" loading="lazy">
              <p>
                ACESSIBILIDADE<br>
                • O evento contará com o recurso de interpretação em Libras.<br>
                • O local tem acesso apropriado e assentos para pessoas com deficiência, obesas e/ou com mobilidade reduzida.<br>
              </p>
            </div>
          </div>
          <img class="footer-logo" src="${asset("img/logos/com.webp")}" alt="Comunicação Antirracista" loading="lazy">
          <div class="footer-contato">
            Idealização e Curadoria: Davi de Carvalho <br>
            Contato: contato@comunicacaoantirracista.com.br
            <div class="footer-social">
              ${list(social, (rede) => `
              <a href="${esc(rede.url)}" target="_blank" rel="noopener noreferrer"><img src="${asset(rede.icon)}" alt="${esc(rede.label)}" loading="lazy"></a>`)}
            </div>
          </div>
        </div>
        <div class="wid4">
          <p class="footer-apoio">
            Acreditamos no poder da comunicação como ferramenta de transformação social.
            Apoiar este projeto é reafirmar nosso compromisso com a equidade racial e com
            a construção de um país mais justo.
          </p>
          <img class="footer-patrocinio" src="${asset("img/logos/logos.svg")}" alt="Régua de Patrocínio" loading="lazy">
        </div>
      </div>
    </footer>`;
}
