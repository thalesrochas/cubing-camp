// Nav

let competidores = document.querySelector("#competidores");
let rounds = document.querySelector("#rounds");
let podios = document.querySelector("#podios");
let navtabCompetidores = document.querySelector("a[href='#competidores']");
let navtabRounds = document.querySelector("a[href='#rounds']");
let navtabPodios = document.querySelector("a[href='#podios']");
let requestedId = document.location.hash;

function selectView(show, hide) {
  show.classList.remove("d-none");
  hide.forEach(ele => {
    if (!ele.classList.contains("d-none")) {
      ele.classList.add("d-none");
    }
  });
}

function selectTab(show, hide) {
  show.classList.add("active");
  hide.forEach(ele => {
    if (ele.classList.contains("active")) {
      ele.classList.remove("active");
    }
  });
}

function checkview() {
  requestedId = document.location.hash;
  if (requestedId === "#competidores") {
    selectView(competidores, [rounds, podios]);
    selectTab(navtabCompetidores, [navtabRounds, navtabPodios]);
  } else if (requestedId === "#rounds") {
    selectView(rounds, [competidores, podios]);
    selectTab(navtabRounds, [navtabCompetidores, navtabPodios]);
  } else if (requestedId === "#podios") {
    selectView(podios, [rounds, competidores]);
    selectTab(navtabPodios, [navtabRounds, navtabCompetidores]);
  } else {
    selectView(competidores, [rounds, podios]);
    selectTab(navtabCompetidores, [navtabRounds, navtabPodios]);
  }
}

window.addEventListener("hashchange", checkview, false);

window.onload = checkview();

// Categorias e Rounds

let categories = ["222", "333", "444"];

categories.forEach(cubeCode => {
  if (document.querySelector(`#drop-${cubeCode}`)) {
    let drop = document.querySelector(`#drop-${cubeCode}`);
    let dropItems = document.querySelector(`#drop-items-${cubeCode}`);

    drop.addEventListener("click", () => {
      if (dropItems.classList.contains("d-none")) {
        dropItems.classList.remove("d-none");
      } else {
        dropItems.classList.add("d-none");
      }
    });
  }

  // Rounds
  let cubeRounds = [1, 2, 3];
  cubeRounds.forEach(roundNum => {
    if (document.querySelector(`#rd${roundNum}-${cubeCode}`)) {
      let rd = document.querySelector(`#rd${roundNum}-${cubeCode}`);
      let rdShow = document.querySelector(`#rd${roundNum}-${cubeCode}-show`);

      rd.addEventListener("click", () => {
        if (rdShow.classList.contains("d-none")) {
          rdShow.classList.remove("d-none");
        } else {
          rdShow.classList.add("d-none");
        }
      });
    }
  });
});
