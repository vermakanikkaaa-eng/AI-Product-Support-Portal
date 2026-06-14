const searchInput=document.querySelector(".search-bar");
searchInput.addEventListener("keyup",function()
{
    let searchValue=searchInput.value.toLowerCase();
    let cards=document.querySelectorAll(".card");
    cards.forEach(function(card)
{
    let productName=card.querySelector("h2").textContent.toLowerCase();
    if(productName.includes(searchValue)){
        card.style.display="block";

    }
    else{
        card.style.display="none";
    }
});
});
function showIssues(){

let product = document.getElementById("assistantProduct").value;
let issueArea = document.getElementById("issueArea");

if(product === "activa"){

issueArea.innerHTML = `
<h2>Select Issue</h2>

<button onclick="hornIssue()">Horn Not Working</button>

<button onclick="batteryIssue()">Battery Issue</button>

<button onclick="engineIssue()">Engine Not Starting</button>
`;

}

else if(product === "ac"){

issueArea.innerHTML = `
<h2>Select Issue</h2>

<button onclick="acCooling()">Not Cooling</button>

<button onclick="acLeak()">Water Leakage</button>
`;

}

else if(product === "ro"){

issueArea.innerHTML = `
<h2>Select Issue</h2>

<button onclick="roWater()">No Water Flow</button>

<button onclick="roTaste()">Bad Taste</button>
`;

}

else if(product === "wm"){

issueArea.innerHTML = `
<h2>Select Issue</h2>

<button onclick="wmStart()">Machine Not Starting</button>

<button onclick="wmDrain()">Water Not Draining</button>
`;

}

else if(product === "laptop"){

issueArea.innerHTML = `
<h2>Select Issue</h2>

<button onclick="lapCharge()">Not Charging</button>

<button onclick="lapHeat()">Overheating</button>
`;

}

}
function hornIssue(){

document.getElementById("questionArea").innerHTML = `
<h3>Are headlights working?</h3>

<button onclick="hornResult()">Yes</button>

<button onclick="batteryIssue()">No</button>
`;

}

function hornResult(){

document.getElementById("questionArea").innerHTML = `
<h2>Diagnosis Result</h2>

<p><strong>Possible Cause:</strong> Fuse F3 may be blown.</p>

<p><strong>Recommended Action:</strong> Check Fuse F3 under front panel.</p>

<p><strong>Reference:</strong> Service Manual Section 4.2</p>
`;

}

function batteryIssue(){

document.getElementById("questionArea").innerHTML = `
<h2>Diagnosis Result</h2>

<p>Battery voltage may be low.</p>

<p>Inspect battery and terminals.</p>
`;

}

function engineIssue(){

document.getElementById("questionArea").innerHTML = `
<h2>Diagnosis Result</h2>

<p>Possible fuel supply issue.</p>

<p>Check fuel level and spark plug.</p>
`;

}
function acCooling(){

document.getElementById("questionArea").innerHTML = `
<h2>Diagnosis Result</h2>

<p>Possible Cause: Dirty air filters.</p>

<p>Clean filters and check cooling mode.</p>
`;

}

function acLeak(){

document.getElementById("questionArea").innerHTML = `
<h2>Diagnosis Result</h2>

<p>Drain pipe may be blocked.</p>

<p>Inspect drainage line.</p>
`;

}
function roWater(){

document.getElementById("questionArea").innerHTML = `
<h2>Diagnosis Result</h2>

<p>Filters may be clogged.</p>

<p>Replace filters.</p>
`;

}

function roTaste(){

document.getElementById("questionArea").innerHTML = `
<h2>Diagnosis Result</h2>

<p>RO membrane may need replacement.</p>

<p>Schedule maintenance.</p>
`;

}
function wmStart(){

document.getElementById("questionArea").innerHTML = `
<h2>Diagnosis Result</h2>

<p>Power supply issue detected.</p>

<p>Check power connection.</p>
`;

}

function wmDrain(){

document.getElementById("questionArea").innerHTML = `
<h2>Diagnosis Result</h2>

<p>Drain filter may be blocked.</p>

<p>Clean drain filter.</p>
`;

}
function lapCharge(){

document.getElementById("questionArea").innerHTML = `
<h2>Diagnosis Result</h2>

<p>Adapter or charging port issue.</p>

<p>Inspect charger and port.</p>
`;

}

function lapHeat(){

document.getElementById("questionArea").innerHTML = `
<h2>Diagnosis Result</h2>

<p>Cooling vents may be blocked.</p>

<p>Clean vents and reduce background apps.</p>
`;

}
