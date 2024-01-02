export function teams(){
    const api = ` https://www.balldontlie.io/api/v1/teams`;

    return fetch(api)
    .then(res => res.json())
    .then(resp => resp.data)
}

export function getTeams(teams) {
    let html = `<div class="container my-5">`

    for(let data of teams){
        html += `
        <div class="w-25 my-3">
            <a id="clubs" href="team.html?id=${data.id}"> <span><h1>Name: ${data.name}</h1></span> </a>
        </div>
        `
    }

    html += `</div>` 

    return html
}