const $ = document.querySelector.bind(document);
const header = $(".header");
const banner = $(".banner");
const categories = $(".categories");
const modelClose = $(".model-close");
const model = $(".model");
const layer = $(".layer");
const modelAd = $(".model-ad");
const modelAdClose = $(".model-ad-close");

// xu ly lan chuot header
function handleScroll() {
  window.onscroll = function () {
    if (window.pageYOffset > 0) {
      header.classList.add("header-mobile");
    } else {
      header.classList.remove("header-mobile");
    }
  };
}
// xu ly model
function handleCloseModel() {
  modelClose.onclick = () => {
    model.classList.add("active");
    layer.classList.add("active");
    modelAd.classList.add("active");
    handleHideModelAd();
  };
  layer.onclick = () => {
    model.classList.add("active");
    layer.classList.add("active");
    modelAd.classList.add("active");
    handleHideModelAd();
  };
}
function handleClickCloseModelAd() {
  modelAdClose.onclick = () => {
    modelAd.classList.remove("active");
  };
}

function handleHideModelAd() {
  let hide = setTimeout(() => {
    modelAd.classList.remove("active");
  }, 10000);
  return hide;
}

function app() {
  handleScroll();
  handleCloseModel();
  handleClickCloseModelAd();
}

app();
