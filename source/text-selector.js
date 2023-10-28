// text-selector V0.1.0 - Made by Pietro Bossolasco
function textselectorinit(p) {
  s = document.createElement("div");
  s.classList.add("text-selector-selector");
  s.addEventListener("mouseleave", function () {
    canc = false;
    s.addEventListener("mouseover", () => {
      canc = true;
    });
    setTimeout(() => {
      if (!canc) {
        try {
          $(".text-selector-selector").eq(0).fadeOut(100);
        } catch (ex) {
          this.style.display = "none";
        }
      }
      canc = false;
    }, 500);
  });
  document.getElementsByTagName("body")[0].appendChild(s);
  for (i = 0; i < p.length; i++) {
    t = document.getElementById(p[i].text);
    d = document.getElementById(p[i].data);
    if (d.selectedIndex !== -1) {
      t.innerText = d.options[d.selectedIndex].text;
    }
    d.style.display = "none";
    try {
      t.addEventListener("click", function () {
        if (!d.disabled) {
          c = d.childNodes;
          aus = Array.from(c);
          s.innerHTML = "";
          content = document.createElement("div");
          content.classList.add("text-selector-content");
          c.forEach((e) => {
            if (e.innerText) {
              sel = document.createElement("div");
              if (e.disabled) {
                sel.classList =
                  "text-selector-selection text-selector-disabled";
              } else if (e.selected) {
                sel.classList =
                  "text-selector-selection text-selector-selected";
              } else {
                sel.classList = "text-selector-selection text-selector-normal";
              }
              sel.innerText = e.innerText;
              if (!e.disabled) {
                sel.addEventListener("click", function () {
                  ex = document.getElementsByClassName(
                    "text-selector-selected"
                  );
                  if (ex[0] != null) {
                    ex[0].classList =
                      "text-selector-selection text-selector-normal";
                  }
                  v = this.innerText;
                  this.classList =
                    "text-selector-selection text-selector-selected";
                  e.selected = true;
                  t.innerText = v;
                });
              }
              content.appendChild(sel);
            }
          });
          s.appendChild(content);
          try {
            $(".text-selector-selector").eq(0).fadeIn(100);
          } catch (ex) {
            s.style.display = "block";
          }
          const x = this.offsetLeft;
          const y = this.offsetTop;
          if (y > s.offsetHeight) {
            s.style.paddingBottom = this.offsetHeight + 10 + "px";
            s.style.top = (y - (s.offsetHeight + this.offsetHeight)) + "px";
            s.style.paddingTop = "10px";
          } else {
            s.style.paddingBottom = "10px";
            s.style.top = this.offsetHeight + "px";
            s.style.paddingTop = (this.offsetHeight + 10) + "px";
          }
          if (x > s.offsetWidth / 2 + 10) {
            s.style.left = (x + (this.offsetWidth / 2) - (s.offsetWidth / 2)) + "px";
          } else {
            s.style.left = "10px";
          }
        }
      });
    } catch (ex) {
      alert("Error in the text-selector configuration");
      console.error(ex);
    }
  }
}
