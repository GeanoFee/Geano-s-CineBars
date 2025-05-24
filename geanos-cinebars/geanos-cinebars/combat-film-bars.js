
function createFilmBars() {
  if (document.getElementById("film-bar-top")) return;

  const topBar = document.createElement("div");
  topBar.id = "film-bar-top";
  topBar.style.position = "fixed";
  topBar.style.top = "0";
  topBar.style.left = "0";
  topBar.style.width = "100%";
  topBar.style.height = "10%";
  topBar.style.backgroundColor = "black";
  topBar.style.zIndex = "10";
  topBar.style.transition = "top 0.5s";

  const bottomBar = document.createElement("div");
  bottomBar.id = "film-bar-bottom";
  bottomBar.style.position = "fixed";
  bottomBar.style.bottom = "0";
  bottomBar.style.left = "0";
  bottomBar.style.width = "100%";
  bottomBar.style.height = "10%";
  bottomBar.style.backgroundColor = "black";
  bottomBar.style.zIndex = "10";
  bottomBar.style.transition = "bottom 0.5s";

  document.body.appendChild(topBar);
  document.body.appendChild(bottomBar);
}

function removeFilmBars() {
  const topBar = document.getElementById("film-bar-top");
  const bottomBar = document.getElementById("film-bar-bottom");
  if (topBar) topBar.remove();
  if (bottomBar) bottomBar.remove();
}

Hooks.on("ready", () => {
  if (!game.user.isGM) return;
  
  Hooks.on("combatStart", () => {
    createFilmBars();
  });

  Hooks.on("combatEnd", () => {
    removeFilmBars();
  });
});
