async function loadHeader() {
  const headerContainer = document.querySelector("body");
  const response = await fetch("header.html");
  const headerHTML = await response.text();
  headerContainer.insertAdjacentHTML("afterbegin", headerHTML);
  updateHeaderMenu();
}

/*  logged in or not header */
function updateHeaderMenu() {
  const nav = document.querySelector("header nav");
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  nav.innerHTML = `
      <a href="index.html" class="nav-btn">Etusivu</a>
      <a href="koulutus.html" class="nav-btn">Koulutus</a>
      <a href="taidot.html" class="nav-btn">Taidot</a>
      <a href="kokemus.html" class="nav-btn">Kokemus</a>
      <a href="yhteystiedot.html" class="nav-btn">Yhteystiedot</a>
      <a href="blog.html" class="nav-btn">Blogini</a>
      <a href="projektit.html" class="nav-btn">Projektit</a>
      ${
        loggedIn
          ? `<a href="admin.html" class="nav-btn">Käyttäjä</a>
             <button id="logoutBtn" class="nav-btn">Kirjaudu ulos</button>`
          : `<a href="login.html" class="nav-btn">Kirjaudu</a>`
      }
  `;

  if (loggedIn) {
    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn?.addEventListener("click", () => {
      localStorage.removeItem("loggedIn");
      alert("Uloskirjautuminen onnistui!");
      updateHeaderMenu();
      const postSection = document.getElementById("newPostSection");
      if (postSection) postSection.style.display = "none";
    });
  }
}

loadHeader();