export function initFooter(div){
    div.innerHTML = `
    <div id='footer' class='py-5 mt-5'>
        <div class='d-flex justify-content-center align-items-center'>
            <img id="hlogo" src="../assets/images/logo.png" alt='LOGO' >
            <h1 id='footerText'>NBA STATS</h1>
        </div>
        <div class='d-flex justify-content-center align-items-center py-5'>
            <a href='#' style='margin: 0 30px;'> <i class="fa-brands fa-instagram fa-2xl" style="color: #ffff;"></i> </a>
            <a href='#' style='margin: 0 30px;'> <i class="fa-brands fa-facebook fa-2xl" style="color: #ffff;"></i> </a>
            <a href='#' style='margin: 0 30px;'> <i class="fa-brands fa-twitter fa-2xl" style="color: #ffff;"></i> </a>
        </div>
        <div class='d-flex justify-content-center align-items-center'>
            <p style='color: white'>Copyrights @2024 - NBA STATS</p>
        </div>
    </div>
    `
}