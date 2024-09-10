
let Home = document.getElementById("home_score")
let Guest = document.getElementById("guest_score")
let score1 = 0
let score2 = 0

function incrementhome1(){
score1 += 1
Home.textContent = score1
}
function incrementhome2(){
    score1 += 2
    Home.textContent = score1
}
function incrementhome3(){
    score1 += 3
    Home.textContent = score1
}

function incrementguest1(){
    score2 += 1
    Guest.textContent = score2
    }
    function incrementguest2(){
        score2 += 2
        Guest.textContent = score2
    }
    function incrementguest3(){
        score2 += 3
        Guest.textContent = score2
    }