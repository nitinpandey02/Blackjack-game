
let gamestart=false;
	

function start() {
	let first= Math.floor(Math.random() * 12) + 2,second=Math.floor(Math.random() * 12) + 2;
	if (!gamestart) {
    $("#text").text(" ");
	$("#no1").text("CARDS:"+first+" "+second);
    gamestart = true;
  }
  checkanswer(first,second);
}

function again(){
	let first= Math.floor(Math.random() * 12) + 2,second=Math.floor(Math.random() * 12) + 2;
	if(gamestart)
	{
      $("#text").text(" ");
	  $("#no1").text("CARDS:"+first+" "+second);
	  checkanswer(first,second);
	}
}

function checkanswer(first,second){
	if((first+second)==21)
	{
		 $("#text").text("You’ve got Blackjack!");
		 startOver();
		 
	}
	else if((first+second)<21)
	{
		$("#text").text("Do you want to draw a new card!");
	}
	else if((first+second)>21){
		$("#text").text("You are out of the game!");
		startOver();
	}
	
}

function startOver() {
  gamestart=false;
}