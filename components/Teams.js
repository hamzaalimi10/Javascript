export function teams(){
    const api = ` https://www.balldontlie.io/api/v1/teams`;

    return fetch(api)
    .then(res => res.json())
    .then(resp => resp.data)
}

export function getTeams(teams) {
    let html = `<div class="row my-5">`

    for(let data of teams){
        html += `
        <div class="col-3 mb-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${data.full_name}</h5>
                    <p class="card-text">City: <b>${data.city}</b></p>
                    <a href="team.html?id=${data.id}" class="btn btn-success">More <i class="fa-solid fa-circle-right fa-sm" style="color: #ffffff;"></i></a>
                </div>
            </div>
        </div>
        `
    }

    html += `</div>` 

    return html
}