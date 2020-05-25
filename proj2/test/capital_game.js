// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.
var country_capital_pairs = pairs
var randomelement
var correct = new Array()
var wrong = new Array()
var all = new Array()
var firstid = 0
var tempid
var temprow

$(document).ready(function () {
    random()
});

function random() {
    randomelement = Math.floor(Math.random() * country_capital_pairs.length)
    document.getElementById("pr2__question").innerHTML = country_capital_pairs[randomelement].country
    document.getElementById("pr2__answer").focus()
}
/*function input() {
    document.getElementById("pr2__answer").value
}*/
function button(input) {
    var row = document.getElementById("tablethingy").insertRow(3);
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    cell1.innerHTML = document.getElementById("pr2__question").innerHTML
    var inputcap
    if (input == '') {
        inputcap = document.getElementById("pr2__answer").value
    } else {
        inputcap = input
    }
    var obj = {
        index: randomelement,
        input: inputcap,
        myid: firstid
    }
    var capitalname = country_capital_pairs[randomelement].capital
    cell1.className = "elements"
    cell2.className = "elements"
    cell3.className = "elements"
    all.push(obj)
    temprow = row
    if (inputcap == capitalname) {
        row.style.color = "blue"
        cell2.innerHTML = inputcap
        cell3.innerHTML = "<i class=\"fas fa-check\"></i>" + "<button id=\"pr2__submit\" onclick=\"deleteme(" + firstid + ");\">Delete</button>"
        correct.push(obj)
    } else {
        row.style.color = "red"
        cell2.innerHTML = "<strike>" + inputcap
        cell3.innerHTML = capitalname + "<button id=\"pr2__submit\" onclick=\"deleteme(" + firstid + ");\">Delete</button>"
        wrong.push(obj)
    }
    if (inputcap == capitalname && document.getElementById("wrongstuff").checked) {
        document.getElementById("allstuff").click()
    }
    if (inputcap != capitalname && document.getElementById("correctstuff").checked) {
        document.getElementById("allstuff").click()
    }
    firstid++
}

function correcto() {
    var table = document.getElementById("tablethingy");
    for (var i = table.rows.length - 1; i >= 3; i--) {
        table.deleteRow(i)
    }
    for (var i = 0; i < correct.length; i++) {
        var row = document.getElementById("tablethingy").insertRow(3);
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        row.style.color = "blue"
        cell1.className = "elements"
        cell2.className = "elements"
        cell3.className = "elements"
        cell1.innerHTML = country_capital_pairs[correct[i].index].country
        cell2.innerHTML = correct[i].input
        tempid = correct[i].myid
        cell3.innerHTML = "<i class=\"fas fa-check\"></i>" + "<button id=\"pr2__submit\" onclick=\"deleteme(" + tempid + ");\">Delete</button>"
    }
}
function wrongo() {
    var table = document.getElementById("tablethingy");
    for (var i = table.rows.length - 1; i >= 3; i--) {
        table.deleteRow(i)
    }
    for (var i = 0; i < wrong.length; i++) {
        var row = document.getElementById("tablethingy").insertRow(3);
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        row.style.color = "red"
        cell1.className = "elements"
        cell2.className = "elements"
        cell3.className = "elements"
        cell1.innerHTML = country_capital_pairs[wrong[i].index].country
        cell2.innerHTML = "<strike>" + wrong[i].input
        tempid = wrong[i].myid
        cell3.innerHTML = country_capital_pairs[wrong[i].index].capital + "<button id=\"pr2__submit\" onclick=\"deleteme(" + tempid + ");\">Delete</button>"
    }
}
function allo() {
    var table = document.getElementById("tablethingy");
    for (var i = table.rows.length - 1; i >= 3; i--) {
        table.deleteRow(i)
    }
    for (var i = 0; i < all.length; i++) {
        var row = document.getElementById("tablethingy").insertRow(3);
        var cell1 = row.insertCell(0)
        var cell2 = row.insertCell(1)
        var cell3 = row.insertCell(2)
        cell1.className = "elements"
        cell2.className = "elements"
        cell3.className = "elements"
        cell1.innerHTML = country_capital_pairs[all[i].index].country
        tempid = all[i].myid;
        if (all[i].input == country_capital_pairs[all[i].index].capital) {
            row.style.color = "blue"
            cell2.innerHTML = all[i].input
            cell3.innerHTML = "<i class=\"fas fa-check\"></i>" + "<button id=\"pr2__submit\" onclick=\"deleteme(" + tempid + ");\">Delete</button>"
        } else {
            row.style.color = "red"
            cell2.innerHTML = "<strike>" + all[i].input
            cell3.innerHTML = country_capital_pairs[all[i].index].capital + "<button id=\"pr2__submit\" onclick=\"deleteme(" + tempid + ");\">Delete</button>"
        }
    }
}
function deleteme(firstid) {
    //console.log(row.rowIndex)
    //var table = document.getElementById("tablethingy").deleteRow(row.rowIndex)
    console.log(firstid)
    for (var i = 0; i < all.length; i++) {
        if (all[i].myid == firstid) {
            all.splice(i, 1)
            i--
        }
    }
    for (var i = 0; i < correct.length; i++) {
        if (correct[i].myid == firstid) {
            correct.splice(i, 1)
            i--
        }
    }
    for (var i = 0; i < wrong.length; i++) {
        if (wrong[i].myid == firstid) {
            wrong.splice(i, 1)
            i--
        }
    }
    if (document.getElementById("wrongstuff").checked) {
        document.getElementById("wrongstuff").click()
    }
    if (document.getElementById("allstuff").checked) {
        document.getElementById("allstuff").click()
    }
    if (document.getElementById("correctstuff").checked) {
        document.getElementById("correctstuff").click()
    }
}
//implementation found on stack overflow
Array.prototype.remove = function (from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

/*function otherbutton() {
    var row = document.getElementById("tablethingy").insertRow(3);
    var cell1 = row.insertCell(0)
    var cell2 = row.insertCell(1)
    var cell3 = row.insertCell(2)
    cell1.innerHTML = document.getElementById("pr2__question").innerHTML
    var inputcap = document.getElementById("pr2__answer").value
    var capitalname = country_capital_pairs[randomelement].capital
    cell1.className = "elements"
    cell2.className = "elements"
    cell3.className = "elements"
    if (inputcap == capitalname) {
        row.style.color = "blue"
        cell2.innerHTML = inputcap
        cell3.innerHTML = "<i class=\"fas fa-check\"></i>"
    } else {
        row.style.color = "red"
        cell2.innerHTML = "<strike>" + inputcap
        cell3.innerHTML = capitalname
    }
}*/