'use strict';

// let today = new Date();
// let formatDate = today.toDateString();
// let selectElement = document.getElementById('date');
// selectElement.innerHTML = formatDate;

let pagesArray = ["homeBody", "projectsBody", "aboutBody","contactBody"];

document.getElementById("projectsBody").style.display = "none";
document.getElementById("aboutBody").style.display = "none";
document.getElementById("contactBody").style.display = "none";

function clickHandler(id) {

    pagesArray.forEach(function(item, index, array) {
        if (item == id)
        {
            console.log("we clicked: " + item);
            document.getElementById(item).style.display = "block";
        }
        else
        {
            console.log("hiding: " + item);
            document.getElementById(item).style.display = "none";
        }
      })
  }

function clickHome()
{
    clickHandler("homeBody");
}

function clickProjects()
{
    clickHandler("projectsBody");
}

function clickAbout()
{
    clickHandler("aboutBody");
}

function clickContact()
{
    clickHandler("contactBody");
}