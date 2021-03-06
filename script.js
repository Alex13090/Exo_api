// call back links
const url = "https://aix-en-provence.opendatasoft.com/api/records/1.0/search/?dataset=ads-marches&q=&facet=type/";

let input = document.querySelector("input");
let section = document.querySelector("section");
let titre = document.getElementById("liste");
let para = document.getElementById("list");
// function refresh page
function refresh() {
    titre.innerHTML = "";
    para.innerHTML = "";
}
// function afficher liste des comptes
function showAllMarche() {
    // listing
    let listNbr = 0;
    // delete previous display
    refresh();
    // send request to get info from link
    fetch(url)
    // then put to json depending on response
    .then(response => response.json())
    // then draft the data
    .then(data => {
        // get info from table "records"
        data.records.map(list => {
            // insert into h2
            titre.innerHTML = "La liste des marches :";
            // insert into para
            para.innerHTML += "<p>"+ `${listNbr + 1}. <br/> Nom: <a href="#">${list.fields.lib_marche}</a> <br/> Type: ${list.fields.type} <br/> <a href="#">${list.fields.geo_point_2d}</a>` +"</p>";
            listNbr ++;
        })
    })
}
