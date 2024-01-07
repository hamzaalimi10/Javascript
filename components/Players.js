export function fetchPlayers(){
    const api = `https://www.balldontlie.io/api/v1/players`;

    return fetch(api)
    .then(res => res.json())
    .then(resp => resp.data)
}

export function getPlayers(players, limit=null){
    let data = (limit == null) ? players : players.slice(0, limit)
    let html = `<div class="row my-5">`

    for(let player of data){
        html += `
        <div class="col-3 mb-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${player.first_name} ${player.last_name}</h5>
                    <p class="card-text">Team: <b>${player.team.full_name}</b></p>
                    <a href="player.html?id=${player.id}" class="btn btn-success">More <i class="fa-solid fa-circle-right fa-sm" style="color: #ffffff;"></i></a>
                </div>
            </div>
        </div>
        `
    }

    html += `</div>`
    return html
}