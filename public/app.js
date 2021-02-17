class DirectionAwareShadow {
  constructor({
    target = null,
    svg = null,
    filter = null,
    feOffset = null,
    filterOuterHTML = null,
    def = null,
    // blur = 0,
    // spread = 0,
    // inset = false,
    // reverse = false,
    // color = "currentColor",
    offset = 1,
    dy = 1,
    dx = 1
  } = {}) {
    this.target = target ? document.querySelectorAll(target) : target;
    this.svg = svg ? document.querySelectorAll(svg) : svg;
    this.filter = filter ? document.querySelectorAll(filter) : filter;
    this.feOffset = feOffset ? document.querySelectorAll(feOffset) : feOffset;
    this.filterOuterHTML = filterOuterHTML
      ? filterOuterHTML
      : this.filter[0].outerHTML;
    this.def = def ? document.querySelectorAll(def) : def;
    // this.blur = blur;
    // this.inset = inset;
    // this.spread = spread;
    // this.reverse = reverse;
    // this.color = color;
    this.offset = offset;
    this.dy = dy;
    this.dx = dx;
    // console.log(this.target);
    // console.log("svg", this.svg);
    // console.log("filter", this.filter);
    // console.log("feOffset", this.feOffset);
    // console.log("filterOuterHtml", this.filter[0].outerHTML);
    // console.log("filterOuterHTML2", this.filterOuterHTML);
    // console.log("def", this.def);
  }

  move() {
    this.target.forEach(t =>
      t.addEventListener("mousemove", e => this.calc(e))
    );
    // console.log("moveE", e);
    // console.log("insideMove");
  }

  // px(val) {
  //   return `${val}px`;
  // }

  calc(e) {
    // console.log("inside calc");
    const { currentTarget, offsetX, offsetY } = e;
    // console.log("currentTarget1", currentTarget);
    const event = e;
    // console.log("event", event);
    console.log("eventClientX", event.clientX);
    console.log("eventClientY", event.clientY);
    // console.log("inside calc() filterOuterHTML", this.filterOuterHTML);
    // console.log("filter inside calc", this.filter[0]);
    const { offsetHeight, offsetWidth } = currentTarget;
    // const { color, reverse, offset } = this;

    // const blur = this.px(this.blur);
    // const spread = this.px(this.spread);
    // const inset = this.inset ? "inset" : "";

    const x = ((offsetWidth / 2 - offsetX) * 0.8) / 2 / 10;
    const y = ((offsetHeight / 2 - offsetY) * 0.8) / 2 / 10;
    console.log("x", x);
    console.log("y", y);
    this.def[0].innerHTML = `<filter id="f4" x="-2px" y="-2px" width="500%" height="500%">
    <feOffset id="f4bub" result="offOut" in="SourceGraphic" dx="${x}" dy="${y}"></feOffset>
    <feColorMatrix result="original" id="svgcolormatrix" type="matrix" values="-1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 -1 0 0 0 1 -0.04"></feColorMatrix>
    <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10"></feGaussianBlur>
    <feBlend in="SourceGraphic" in2="blurOut" mode="normal"></feBlend>
  </filter>`;
    // const h = this.px(!reverse ? x : x * -1);
    // const v = this.px(!reverse ? y : y * -1);
    // console.log("currentTarget2", currentTarget);
    // currentTarget.style.boxShadow = `${h} ${v} ${blur} ${spread} ${color} ${inset}`;
  }

  init() {
    // console.log("insideInit");
    if (!this.target) {
      console.error("[direction-aware shadow] • you should add a target");
      return;
    }

    this.move();
    // console.log("afterMove");
  }
}

const bub = new DirectionAwareShadow({
  target: "#container",
  svg: "#mark",
  filter: "#f4",
  feOffset: "#f4bub",
  def: "#def",
  // blur: 30,
  // spread: 0,
  offset: 0.8
  // color: "rgba(79, 1, 119, 0.36)",
  // inset: false,
  // reverse: false
});

bub.init();
