// മാച്ചിന്റെ തീയതിയും സമയവും ഇവിടെ നൽകുക
var countDownDate = new Date("July 8, 2026 1:30:00").getTime(); 

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // സമയം കഴിഞ്ഞോ എന്ന് പരിശോധിക്കുന്നു
    if (distance <= 0) {
        clearInterval(x); // ടൈമർ ഇവിടെ നിർത്തുന്നു
        document.getElementById("timer").innerHTML = "MATCH KICKED OFF!"; 
    } else {
        // ബാക്കിയുള്ള സമയം കണക്കാക്കുന്നു
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // ടൈമർ ബോക്സിൽ കാണിക്കുന്നു
        document.getElementById("timer").innerHTML = hours + "h " + minutes + "m " + seconds + "s  ⏰ " ;
    }
}, 1000);

function toggleTheme() {
    // ബോഡിയിൽ ഡാർക്ക്-മോഡ് ക്ലാസ് ഉണ്ടോ എന്ന് പരിശോധിക്കുന്നു
    document.body.classList.toggle("dark-mode");

    // ലോഗ് ചെയ്ത് നോക്കാൻ (ഇത് അത്യാവശ്യമില്ല, പക്ഷെ എറർ ഉണ്ടോ എന്ന് അറിയാൻ സഹായിക്കും)
    if (document.body.classList.contains("dark-mode")) {
        console.log("Dark Mode Enabled");
    } else {
        console.log("Light Mode Enabled");
    }
}
let pVotes = 0;
let cVotes = 0;

function vote(team) {
    if(team === 'portugal') pVotes++;
    else cVotes++;
    
    let total = pVotes + cVotes;
    let pPercent = (pVotes / total) * 100;
    let cPercent = (cVotes / total) * 100;
    
    document.getElementById("portugal-bar").style.width = pPercent + "%";
    document.getElementById("croatia-bar").style.width = cPercent + "%";
}

// പേജ് ലോഡ് ആകുമ്പോൾ 3 സെക്കൻഡിന് ശേഷം പോപ്പ് അപ്പ് വരുന്നു
window.onload = function() {
    
        document.getElementById("whatsappModal").style.display = "block";
    
};

// ക്ലോസ് ബട്ടൺ ഫംഗ്ഷൻ
function closeModal() {
    document.getElementById("whatsappModal").style.display = "none";
}