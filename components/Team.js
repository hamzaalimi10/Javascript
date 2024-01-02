export function team(value){
    return fetch(`https://www.balldontlie.io/api/v1/teams/${value}`)
    .then(data => data.json())
}

export function getTeam(teams){
    let html = `<div class="container m-5 border border-black rounded">`

    html += `
        <h3 class="my-4 text-center">Team name: <b>${teams.name}</b></h3>
        <h3 class="my-4 text-center">Abbreviation: <b>${teams.abbreviation}</b></h3>
        <h3 class="my-4 text-center">Full Team name: <b>${teams.full_name}</b></h3>
        <h3 class="my-4 text-center">City: <b>${teams.city}</b></h3>
        <h3 class="my-4 text-center">Conference: <b>${teams.conference}</b></h3>
        <h3 class="my-4 text-center">Division: <b>${teams.division}</b></h3>
    `

    html += `</div>`

    return html
}