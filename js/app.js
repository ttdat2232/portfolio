let isNavOpen = false;
let navLinkContainerElements = document.querySelectorAll("div.links");
let downloadBtn = document.getElementById("download-cv");
let selectedItemEle = document.querySelector(".selected-item");
let clickCount = 0;
let timeout = null;
let isLanguageSelectSectionShow = false;

class Translator {
    constructor() {
        this._loadAttempts = 0;
        this._lang = this.getLanguage();
        this._elements = document.querySelectorAll("[data-i18n]");
        this._jsonData = null;
    }

    getLanguage() {
        const lang = navigator.languages
            ? navigator.languages[0]
            : navigator.language;
        return lang.substring(0, 2);
    }

    getContent(keys) {
        try {
            let text = keys.reduce((obj, i) => obj[i], this._jsonData);
            if (text) {
                return text;
            } else {
                return keys[keys.length - 1];
            }
        } catch {
            return keys[keys.length - 1];
        }
    }

    async load(lang = null) {
        if (this._loadAttempts === 3) {
            throw Error("couldn't load language file");
        }
        this._loadAttempts++;
        if (lang) {
            this._lang = lang;
        }
        try {
            let localFile = `http://localhost:5500/i18n/${this._lang}.json`;
            const response = await fetch(localFile);
            this._jsonData = await response.json();
            this._elements.forEach((element) => {
                let keys = element.dataset.i18n.split(".");
                element.innerHTML = this.getContent(keys);
                this._loadAttempts = 0;
            });
            return;
        } catch (e) {
            console.error(e);
        }

        try {
            let url = `https://raw.githubusercontent.com/ttdat2232/portfolio/refs/heads/main/i18n/${this._lang}.json`;
            const response = await fetch(url);
            this._jsonData = await response.json();
            this._elements.forEach((element) => {
                let keys = element.dataset.i18n.split(".");
                element.innerHTML = this.getContent(keys);
                this._loadAttempts = 0;
            });
            return;
        } catch (e) {
            console.log(e);
            await this.load("en"); // load default
            this._loadAttempts = 0;
        }
    }

    toggleLangTag() {
        if (document.documentElement.lang !== this._lang) {
            document.documentElement.lang = this._lang;
        }
    }
}

const translator = new Translator();

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

Array.from(navLinkContainerElements).forEach((element) => {
    element.addEventListener(
        "click",
        () => {
            closeNavbar();
        },
        false
    );
});

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
    ele.addEventListener("click", async (e) => {
        selectedItemEle.innerHTML = ele.innerHTML;
        await translator.load(ele.dataset.lang);
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

document.addEventListener("DOMContentLoaded", () => {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    document.body.appendChild(tooltip);
    document.querySelectorAll("[data-tooltip]").forEach((ele) => {
        ele.addEventListener("mouseenter", () => {
            let rect = ele.getBoundingClientRect();
            let keys = ele.dataset.tooltip.split(".");
            tooltip.innerHTML = translator.getContent(keys);
            tooltip.style.left = rect.left + window.screenX + "px";
            tooltip.style.top = rect.bottom + window.screenY + "px";
            tooltip.style.opacity = 1;
        });
        ele.addEventListener("mouseleave", () => {
            tooltip.style.opacity = 0;
        });
    });
});

document.querySelector("#email-logo").addEventListener("click", (e) => {
    clickCount++;
    timeout = setTimeout(async () => {
        if (clickCount >= 2) {
            await navigator.clipboard.writeText("truongdat2232@gmail.com");
            toastr.success(translator.getContent(["tooltips", "copySuccess"]));
        } else if (clickCount < 2) {
            let tempTag = document.createElement("a");
            tempTag.setAttribute("href", "mailto:truongdat2232@gmail.com");
            tempTag.click();
        }
        clearTimeout(timeout);
        clickCount = 0;
    }, 400);
});

async function setupPage() {
    let defaultLang = document.querySelector(".language");
    selectedItemEle.innerHTML = defaultLang.innerHTML;
    await translator.load(defaultLang.dataset.lang);
    toastr.options.showDuration = true;
    toastr.options.closeDuration = 1000;
    toastr.options.closeEasing = "swing";
}

setupPage();
