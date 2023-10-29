// text-selector V0.1.1 - Made by Pietro Bossolasco
// For docs -> https://github.com/PietroBossolasco/text-selector
function textselectorinit(e) {
  (s = document.createElement("div")).classList.add("text-selector-selector"),
    s.addEventListener("mouseleave", function () {
      (canc = !1),
        s.addEventListener("mouseover", () => {
          canc = !0;
        }),
        setTimeout(() => {
          if (!canc)
            try {
              $(".text-selector-selector").eq(0).fadeOut(100);
            } catch (e) {
              this.style.display = "none";
            }
          canc = !1;
        }, 500);
    }),
    document.getElementsByTagName("body")[0].appendChild(s);
  for (let l = 0; l < e.length; l++) {
    let i = l;
    Object.freeze(i),
      (t = document.getElementById(e[l].text)).classList.add(
        "text-selector-text"
      ),
      -1 !== (d = document.getElementById(e[l].data)).selectedIndex &&
        (t.innerText = d.options[d.selectedIndex].text),
      (d.style.display = "none");
    try {
      t.addEventListener("click", function () {
        if (!(d = document.getElementById(e[i].data)).disabled) {
          (t = document.getElementById(e[i].text)),
            (c = d.childNodes),
            (aus = Array.from(c)),
            (s.innerHTML = "");
          var l = document.createElement("div");
          l.classList.add("text-selector-content"),
            c.forEach(function (e) {
              e.innerText &&
                ((sel = document.createElement("div")),
                e.disabled
                  ? (sel.classList =
                      "text-selector-selection text-selector-disabled")
                  : e.selected
                  ? (sel.classList =
                      "text-selector-selection text-selector-selected")
                  : (sel.classList =
                      "text-selector-selection text-selector-normal"),
                (sel.innerText = e.innerText),
                e.disabled ||
                  sel.addEventListener("click", function () {
                    (ex = document.getElementsByClassName(
                      "text-selector-selected"
                    )),
                      null != ex[0] &&
                        (ex[0].classList =
                          "text-selector-selection text-selector-normal"),
                      (v = this.innerText),
                      (this.classList =
                        "text-selector-selection text-selector-selected"),
                      (d.selectedIndex = aus.indexOf(e) - 1),
                      (t.innerText = v);
                  }),
                l.appendChild(sel));
            }),
            (s.innerHTML = ""),
            s.appendChild(l);
          try {
            $(".text-selector-selector").eq(0).fadeIn(100);
          } catch (n) {
            s.style.display = "block";
          }
          let o = this.offsetLeft,
            r = this.offsetTop;
          r > s.offsetHeight
            ? ((s.style.paddingBottom = this.offsetHeight + 10 + "px"),
              (s.style.top = r - s.offsetHeight + this.offsetHeight + "px"),
              (s.style.paddingTop = "10px"))
            : ((s.style.paddingBottom = "10px"),
              (s.style.top = this.offsetHeight + "px"),
              (s.style.paddingTop = this.offsetHeight + 10 + "px")),
            o > s.offsetWidth / 2 + 10
              ? (s.style.left =
                  o + this.offsetWidth / 2 - s.offsetWidth / 2 + "px")
              : (s.style.left = "10px");
        }
      });
    } catch (n) {
      alert("Error in the text-selector configuration"), console.error(n);
    }
  }
}
