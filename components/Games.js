export function games(){
    const api = `https://www.balldontlie.io/api/v1/games`;

    return fetch(api)
    .then(res => res.json())
    .then(resp => resp.data)
}

export function getGames(games, limit=null){
    let data = (limit == null) ? games : games.slice(0, limit)
    let html = `<div class="container">`

    for(let game of data){
        html += `
        <div id="border" class="my-5 border border-black rounded">
            <div class="date d-flex justify-content-center">
            <div>${game.date}</div>
            </div>

            <div class="match d-flex justify-content-between">
                <div class="home w-25">
                <h3 class='text-center'>${game.home_team.full_name}</h3>
                <h4 class='text-center'>${game.home_team_score}</h4>
                </div>
                <div class="vs w-25 d-flex align-items-center justify-content-center">
                <h3 class='text-center mb-0'>VS</h3>
                </div>
                <div class="away w-25">
                    <h3 class='text-center'>${game.visitor_team.full_name}</h3>
                    <h4 class='text-center'>${game.visitor_team_score}</h4>
                </div>
            </div>
            
            <div class="season">
                <div class="d-flex justify-content-center">${game.season}</div>
            </div>
        </div>
        `
    }

    html += `</div>`
    return html
}