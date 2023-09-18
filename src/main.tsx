import ReactDOM from "react-dom/client";
import { Webcomponent } from "./Webcomponent";
import style from "./index.css?inline";

class MyWebcomponent extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    const mountPoint = document.createElement("span");
    mountPoint.setAttribute("id", "wb_026fea4a");
    shadowRoot.appendChild(mountPoint);

    const initialCount = this.getAttribute("initialCount");
    ReactDOM.createRoot(mountPoint).render(
      <>
        <style type="text/css">{style}</style>
        <Webcomponent initialCount={initialCount ?? "0"} />
      </>
    );
  }
}

customElements.define("web-component", MyWebcomponent);
