class DirectionAwareShadow {
  constructor({ target = null, def = null, def2 = null, def3 = null } = {}) {
    this.target = target ? document.querySelectorAll(target) : target;
    this.def = def ? document.querySelectorAll(def) : def;
    this.def2 = def2 ? document.querySelectorAll(def2) : def2;
    this.def3 = def3 ? document.querySelectorAll(def3) : def3;
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
    const x2 = ((offsetWidth / 2 - offsetX) * 0.8) / 2 / 100;
    const y2 = ((offsetHeight / 2 - offsetY) * 0.8) / 2 / 100;

    //   this.def[0].innerHTML = `<filter id="f4" x="-2px" y="-2px" width="500%" height="500%">
    //   <feOffset id="f4bub" result="offOut" in="SourceGraphic" dx="${x}" dy="${y}"></feOffset>
    //   <feColorMatrix result="original" id="svgcolormatrix" type="matrix" values="-1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 0 1 -0.04"></feColorMatrix>
    //   <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10"></feGaussianBlur>
    //   <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
    // </filter>`;
    //     this.def2[0].innerHTML = `<filter
    //   id="innershadow"
    //   x0="-50%"
    //   y0="-50%"
    //   width="500%"
    //   height="500%"
    // >
    //   <feGaussianBlur
    //     in="SourceAlpha"
    //     stdDeviation="3"
    //     result="blur"
    //   ></feGaussianBlur>
    //   <feOffset id="offSet" dy="${y}" dx="${x}"></feOffset>
    //   <feComposite
    //     in2="SourceAlpha"
    //     operator="arithmetic"
    //     k2="-1"
    //     k3="1"
    //     result="shadowDiff"
    //   ></feComposite>

    //   <feFlood flood-color="white" flood-opacity="0.75"></feFlood>
    //   <feComposite in2="shadowDiff" operator="in"></feComposite>
    //   <feComposite
    //     in2="SourceGraphic"
    //     operator="over"
    //     result="firstfilter"
    //   ></feComposite>

    //   <feGaussianBlur
    //     in="firstfilter"
    //     stdDeviation="3"
    //     result="blur2"
    //   ></feGaussianBlur>
    //   <feOffset id="offSet" dy="${y}" dx="${x}"></feOffset>
    //   <feComposite
    //     in2="firstfilter"
    //     operator="arithmetic"
    //     k2="-1"
    //     k3="1"
    //     result="shadowDiff"
    //   ></feComposite>

    //   <feFlood flood-color="white" flood-opacity="0.75"></feFlood>
    //   <feComposite in2="shadowDiff" operator="in"></feComposite>
    //   <feComposite in2="firstfilter" operator="over"></feComposite>
    // </filter>`;
    this.def3[0].innerHTML = `<filter
    id="innershadowTwo"
    x="-50%"
    y="-50%"
    width="200%"
    height="200%"
  >
    <feGaussianBlur
      in="SourceAlpha"
      stdDeviation="1"
      result="blur"
    ></feGaussianBlur>
    <feOffset dy="${y2}" dx="${x2}"></feOffset>
    <feComposite
      in2="SourceAlpha"
      operator="arithmetic"
      k2="-1"
      k3="1"
      result="shadowDiff"
    ></feComposite>

    <feFlood flood-color="black" flood-opacity="0.25"></feFlood>
    <feComposite in2="shadowDiff" operator="in"></feComposite>
    <feComposite
      in2="SourceGraphic"
      operator="over"
      result="firstfilter"
    ></feComposite>

    <feGaussianBlur
      in="firstfilter"
      stdDeviation="3"
      result="blur2"
    ></feGaussianBlur>
    <feOffset dy="${y2}" dx="${x2}"></feOffset>
    <feComposite
      in2="firstfilter"
      operator="arithmetic"
      k2="-1"
      k3="-9"
      result="shadowDiff"
    ></feComposite>

    <feFlood flood-color="black" flood-opacity="0.25"></feFlood>
    <feComposite in2="shadowDiff" operator="in"></feComposite>
    <feComposite in2="firstfilter" operator="over"></feComposite>
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
  def: "#def",
  def2: "#deftwo",
  def3: "#defthree"
});

bub.init();
