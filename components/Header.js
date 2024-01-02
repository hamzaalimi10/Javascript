export function initHeader(div){
    div.innerHTML = `
    <nav class="navbar navbar-expand-lg">
    <div class="container-fluid d-flex justify-content-between">
        <div class="img w-25">
            <a href="index.html"><img id="hlogo" src="./assets/images/logo.png" alt="LOGO"></a>
        </div>
        <div class="text w-25">
            <a style="text-decoration: none;" href="index.html">
                <h1 id="title" class="text-center mb-0">NBA STATS</h1>
            </a>
        </div>
        <div class="w-25" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-center">
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="games.html">Games</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="teams.html">Teams</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="players.html">Players</a>
                </li>
            </ul>
        </div>
    </div>
    </nav>
  `
}