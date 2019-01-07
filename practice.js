// some random oop practice


function League(){
  this.teams = [];
  this.nfcSouth = [];
  this.afcEast = [];
}

var NFL = new League();

League.prototype.findConference = function(){
  this.teams.map((team)=>{

    if(team.conference === "NFC" && team.division === "South"){
      this.nfcSouth.push(team.teamName);
      // console.log(this.nfcSouth);
    }
    else if(team.conference === "AFC" && team.division === "East"){
      this.afcEast.push(team.teamName);
    }
  })
}

function Team(teamName, city, division, conference){
  this.city = city;
  this.teamName = teamName;
  this.division = division;
  this.conference = conference;
  this.wins = 0;
  this.losses = 0;
  this.players = [];


}



Team.prototype.record = function(){
  return "The " + this.city + " " + this.teamName + " are " + this.wins + " and " + this.losses;
}


var Saints = new Team("Saints", "New Orleans", "South", "NFC");
Saints.wins = 13;
Saints.losses = 3;

var Patriots = new Team("Patriots", "New England", "East", "AFC");
Patriots.wins = 11;
Patriots.losses = 5;


NFL.teams.push(Saints, Patriots);

NFL.findConference();


for(let i = 0; i < 2; i++){


  console.log(NFL.teams[i].teamName);
}

console.log(Saints.record(), Patriots.record());

function addDolphinsName() {
  document.getElementById("dolphins").innerHTML = "The dolphins don't!";
}