// text-selector V1.0.0 - Made by Pietro Bossolasco
// For docs -> https://github.com/PietroBossolasco/text-selector
const textSelector = {
  s: null, // div with option
  elements: [], // created
  d: null, // select with text-selector class
  init: function () {
    this.d = document.getElementsByClassName("text-selector");
    for (let key in this.d) {
      if (this.d[key].type == "select-one") {
        try {
          if (!this.d[key].classList.contains("text-selector-initialized")) {
            let ccl = this.d[key].getAttribute("text-class");
            let ce = this.d[key].getAttribute("text-element");
            let id = this.generateId();
            ce = ce == null ? "p" : ce;
            ccl = ccl === null ? "" : ccl;
            let a = document.createElement(ce);
            a.classList = ccl + " text-selector-text";
            a.innerText = this.d[key].options[this.d[key].selectedIndex].text;
            a.setAttribute("text-selector-id", id);
            this.d[key].insertAdjacentElement("afterend", a);
            a.addEventListener("click", this.clickHandler);
            let c = document.createElement("div");
            c.classList = "text-selector-selector";
            c.setAttribute("text-selector-id", id);
            this.d[key].addEventListener("change", function () {
              console.log(this)
              a.innerText = this.options[this.selectedIndex].text;
            });
            a.insertAdjacentElement("afterend", c);
            this.elements.push({
              id: id,
              select: this.d[key],
              text: a,
              selector: c,
            });
            this.d[key].classList.add("text-selector-initialized");
            console.log(this.d[key].disabled)
            let ausKey = key;
            Object.freeze(ausKey);
            const observercallback = () => {
              if(this.d[ausKey].disabled && !a.classList.contains("text-selector-text-disabled")){
                a.classList.add("text-selector-text-disabled");
              }
              else if(!this.d[ausKey].disabled && a.classList.contains("text-selector-text-disabled")){
                a.classList.remove("text-selector-text-disabled");
              }
              console.log(ausKey)
            }
            const configObserver = { attributes: true, childList: true, subtree: true };
            const observer = new MutationObserver(observercallback);
            observer.observe(this.d[key], configObserver);
          }
        } catch (ex) {
          console.error("Error during the initialization\n", ex);
        }
      }
    }
  },
  generateId: function () {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    let ok = false;
    let length = 10;
    while (!ok) {
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
      }
      if (!this.isIdInArray(result)) {
        ok = true;
      }
    }
    return result;
  },
  isIdInArray: function (id) {
    return this.elements.some((item) => item.id === id);
  },
  findElementById: function (id) {
    return this.elements.find((item) => item.id === id);
  },
  removeAllContainers: function () {
    this.elements.forEach((item) => {
      if (item.selector.style.display != "none") {
        try {
          $(item.selector).fadeOut(100);
        } catch (ex) {
          item.selector.style.display = "none";
        }
      }
    });
  },
  mouseLeaveHandler: function (item) {
    let isMouseInside = false;

    item.addEventListener("mouseenter", () => {
      isMouseInside = true;
    });

    item.addEventListener("mouseleave", () => {
      isMouseInside = false;
      setTimeout(() => {
        if (!isMouseInside) {
          try {
            $(item).fadeOut(100);
          } catch (ex) {
            item.style.display = "none";
          }
        }
      }, 500);
    });
  },
  clickHandler: function (e) {
    textSelector.removeAllContainers();
    let data = textSelector.findElementById(
      e.target.getAttribute("text-selector-id")
    );
    if (!data.select.disabled) {
      data.selector.addEventListener(
        "mouseleave",
        textSelector.mouseLeaveHandler(data.selector)
      );
      data.selector.innerHTML = "";
      let cn = Array.from(data.select.childNodes);
      let content = document.createElement("div");
      content.classList.add("text-selector-content");
      cn.forEach((item) => {
        if (item.innerText) {
          let opt = document.createElement("div");
          if (item.disabled) {
            opt.classList = "text-selector-selection text-selector-disabled";
          } else if (item.selected) {
            opt.classList = "text-selector-selection text-selector-selected";
          } else {
            opt.classList = "text-selector-selection text-selector-normal";
          }
          opt.innerText = item.innerText;
          if (!item.disabled) {
            opt.addEventListener("click", function () {
              ex = data.selector.getElementsByClassName(
                "text-selector-selected"
              );
              if (ex[0] != null) {
                ex[0].classList =
                  "text-selector-selection text-selector-normal";
              }
              v = this.innerText;
              this.classList = "text-selector-selection text-selector-selected";
              item.selected = true;
              data.text.innerText = v;
            });
          }
          content.appendChild(opt);
        }
      });

      data.selector.appendChild(content);
      try {
        $(data.selector).fadeIn(100);
      } catch (ex) {
        data.selector.style.display = "block";
      }
      textSelector.calculatePosition(data, this);
    }
  },
  calculatePosition: function (data, element) {
    const x = element.offsetLeft;
    const y = element.offsetTop;
    if (y > data.selector.offsetHeight) {
      data.selector.style.paddingBottom = element.offsetHeight + 10 + "px";
      data.selector.style.top =
        y - data.selector.offsetHeight + element.offsetHeight + "px";
      data.selector.style.paddingTop = "10px";
    } else {
      data.selector.style.paddingBottom = "10px";
      data.selector.style.top = y + "px";
      data.selector.style.paddingTop = element.offsetHeight + 10 + "px";
    }
    if (x > data.selector.offsetWidth / 2 + 10) {
      data.selector.style.left =
        x + element.offsetWidth / 2 - data.selector.offsetWidth / 2 + "px";
    } else {
      data.selector.style.left = x + "px";
    }
  },
};
