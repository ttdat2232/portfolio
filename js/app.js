class Translator {
    constructor() {
        this._loadAttemps = 0;
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
        if (this._loadAttemps === 3) {
            throw Error("couldn't load language file");
        }
        this._loadAttemps++;
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
                });
            })
            .catch((reason) => {
                console.log(reason);
                this.load("en"); // load default
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

function closeNavbar() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(-100vh)";
}
function showNavbar() {
    const navbar = document.querySelector(".dropdown");
    navbar.style.transform = "translateY(0px)";
}
