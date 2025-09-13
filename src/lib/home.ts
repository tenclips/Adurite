const searchUrl =
  localStorage.getItem("engine") || "https://www.google.com/search?q=";
const input = document.getElementById("search") as HTMLInputElement | null;

function isUrl(val = ""): boolean {
  return /^http(s?):\/\//.test(val) || (val.includes(".") && !val.includes(" "));
}

document.addEventListener("astro:page-load", () => {
  if (input) {
    input.focus();
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        let url = input?.value || "";
        if (!isUrl(url)) {
          url = searchUrl + url;
        } else if (!(url.startsWith("https://") || url.startsWith("http://"))) {
          url = `https://${url}`;
        }
        sessionStorage.setItem("goUrl", url);
        location.replace("/tabs");
      }
    });
  }
});

// splash text
// feel free to customize
const splashes = [
  "how are you today?",
  "I'm fine?",
  "go check out the games",
  "Fast and secure!",
  "youtube ai is stupid",
  "use invidious instead",
  "Made with <3 by x8r",
  "Start using Tailwind frfr",
  "Kanye is mid",
  "woah",
  "i want a taco rn",
  "6 7 is dead",
  "ipad kid detected",
  "Over 300 games!",
  "Check out official links on the Github repo",
  "I'm thinking about renaming this"
]

const selection = Math.floor(Math.random() * splashes.length)
const splashText = splashes[selection]

const splashTextElement = document.getElementById("splashText")
if (splashTextElement) {
  splashTextElement.textContent = splashText
}
