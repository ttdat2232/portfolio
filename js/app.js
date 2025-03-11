class Translator {
    constructor() {
        this._loadAttempts = 0;
        this._lang = this.getLanguage();
        this._elements = document.querySelectorAll("[data-i18n]");
    }

    getLanguage() {
        const lang = navigator.languages
            ? navigator.languages[0]
            : navigator.language;
        return lang.substring(0, 2);
    }

    load(lang = null) {
        if (this._loadAttempts === 3) {
            throw Error("couldn't load language file");
        }
        this._loadAttempts++;
        if (lang) {
            this._lang = lang;
        }
        let url = `https://raw.githubusercontent.com/ttdat2232/portfolio/refs/heads/main/i18n/${this._lang}.json`;
        fetch(url)
            .then((res) => res.json())
            .then((translation) => {
                this._elements.forEach((element) => {
                    let keys = element.dataset.i18n.split(".");
                    try {
                        let text = keys.reduce((obj, i) => obj[i], translation);
                        if (text) {
                            element.innerHTML = text;
                        } else {
                            element.innerHTML = keys[keys.length - 1];
                        }
                    } catch {
                        element.innerHTML = keys[keys.length - 1];
                    }
                    this._loadAttempts = 0;
                });
            })
            .catch((reason) => {
                console.log(reason);
                this.load("en"); // load default
                this._loadAttempts = 0;
            });
    }

    toggleLangTag() {
        if (document.documentElement.lang !== this._lang) {
            document.documentElement.lang = this._lang;
        }
    }
}

const translator = new Translator();
translator.load("en");

let isNavOpen = false;

function closeNavbar() {
    if (isNavOpen) {
        const navbar = document.querySelector(".dropdown");
        navbar.style.transform = "translateY(-100vh)";
    }
    isNavOpen = false;
}
function showNavbar() {
    if (!isNavOpen) {
        const navbar = document.querySelector(".dropdown");
        navbar.style.transform = "translateY(0px)";
    }
    isNavOpen = true;
}

let navLinkContainerElements = document.querySelectorAll("div.links");

Array.from(navLinkContainerElements).forEach((element) => {
    element.addEventListener(
        "click",
        () => {
            closeNavbar();
        },
        false
    );
});

let downloadBtn = document.getElementById("download-cv");
downloadBtn.onclick = async () => {
    downloadBtn.classList.add("btn-downloading");
    let downloadUrl =
        "https://raw.githubusercontent.com/ttdat2232/portfolio/main/resources/files/TruongTienDat_BackendDeveloper.pdf";
    let filename = "TurongTienDat_BackendDeveloper.pdf";
    fetch(downloadUrl)
        .then((res) => res.blob())
        .then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = filename;
            link.click();
            URL.revokeObjectURL(blob);
        })
        .finally(() => {
            downloadBtn.classList.remove("btn-downloading");
        });
};

let selectedItemEle = document.querySelector(".selected-item");
let isLanguageSelectSectionShow = false;
selectedItemEle.addEventListener("click", (e) => {
    if (!isLanguageSelectSectionShow) {
        document.querySelectorAll(".language").forEach((ele) => {
            ele.style.opacity = 1;
            ele.style.transform = "translateX(0)";
        });
    } else {
        document.querySelectorAll(".language").forEach((ele) => {
            ele.style.opacity = 0;
            ele.style.transform = "translateX(-5vw)";
        });
    }
    isLanguageSelectSectionShow = !isLanguageSelectSectionShow;
});

document.querySelectorAll(".language").forEach((ele) => {
    ele.addEventListener("click", (e) => {
        selectedItemEle.innerHTML = ele.innerHTML;
        translator.load(ele.dataset.lang);
        translator.toggleLangTag();
        hideLangauge();
    });
});

function hideLangauge() {
    isLanguageSelectSectionShow = false;
    document.querySelectorAll(".language").forEach((ele) => {
        ele.style.opacity = 0;
        ele.style.transform = "translateX(-5vw)";
    });
}
