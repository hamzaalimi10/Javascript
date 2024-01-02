export function getPlayer(value){
    return fetch(`https://www.balldontlie.io/api/v1/players/${value}`)
    .then(data => data.json())
}

export function takePlayer(player){
    let html = `<div class="container m-5 border border-black rounded">`

    html += `
        <h3 class="my-4 text-center">Player first name: <b>${player.first_name}</b></h3>
        <h3 class="my-4 text-center">Player last name: <b>${player.last_name}</b></h3>
        <h3 class="my-4 text-center">Player position: <b>${(player.position == '' || player.position == null ) ? 'NO INFO!' : player.position}</b></h3>
        <h3 class="my-4 text-center">Player height(inches): <b>${(player.height_inches == '' || player.height_inches == null ) ? 'NO INFO!' : player.height_inches}</b></h3>
        <h3 class="my-4 text-center">Player team name: <b>${player.team.name}</b></h3>
    `

    html += `</div>`

    return html
}