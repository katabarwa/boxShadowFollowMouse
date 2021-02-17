class DirectionAwareShadow {
  constructor({ target = null, def = null } = {}) {
    this.target = target ? document.querySelectorAll(target) : target;
    this.def = def ? document.querySelectorAll(def) : def;
  }

  move() {
    this.target.forEach(t =>
      t.addEventListener("mousemove", e => this.calc(e))
    );
  }

  calc(e) {
    const { currentTarget, offsetX, offsetY } = e;
    const { offsetHeight, offsetWidth } = currentTarget;

    const x = ((offsetWidth / 2 - offsetX) * 0.8) / 2 / 10;
    const y = ((offsetHeight / 2 - offsetY) * 0.8) / 2 / 10;

    this.def[0].innerHTML = `<filter id="f4" x="-2px" y="-2px" width="500%" height="500%">
    <feOffset id="f4bub" result="offOut" in="SourceGraphic" dx="${x}" dy="${y}"></feOffset>
    <feColorMatrix result="original" id="svgcolormatrix" type="matrix" values="-1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 0 1 -0.04"></feColorMatrix>
    <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10"></feGaussianBlur>
    <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
  </filter>`;
  }

  init() {
    if (!this.target) {
      console.error("[direction-aware shadow] • you should add a target");
      return;
    }

    this.move();
  }
}

const bub = new DirectionAwareShadow({
  target: "#container",
  svg: "#mark",
  filter: "#f4",
  feOffset: "#f4bub",
  def: "#def"
});

bub.init();
