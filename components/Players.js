export function fetchPlayers(){
    const api = `https://www.balldontlie.io/api/v1/players`;

    return fetch(api)
    .then(res => res.json())
    .then(resp => resp.data)
}

export function getPlayers(players, limit=null){
    let data = (limit == null) ? players : players.slice(0, limit)
    let html = `<div class="container my-5">`

    for(let player of data){
        html += `
            <div class="w-25 my-3">
              <a id="players" href="player.html?id=${player.id}"> <span><h1> Name: ${player.first_name} ${player.last_name}</h1></span> </a>
            </div>
        `
    }

    html += `</div>`
    return html
}