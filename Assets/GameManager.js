#pragma strict

static var playerScore01 : int = 0;
static var playerScore02 : int = 0;

var theSkin : GUISkin;
var theBall : Transform;
function Start(){
	theBall = GameObject.FindGameObjectWithTag ("Ball").transform;
	
}

static function Score(wallName : String){
	Debug.Log("Wall : " + wallName);
	
	if(wallName == "_rightWall"){
	
		playerScore01 = playerScore01 + 1;
	}
	
	else if (wallName == "_leftWall") {
	
		playerScore02 = playerScore02 + 1;
	}
	
	Debug.Log("Player 1 : " + playerScore01);
	Debug.Log("Player 2 : " + playerScore02);
}

function OnGUI (){
	GUI.skin = theSkin;
	GUI.Label (new Rect (Screen.width/2 - 150-18, 25, 100, 100), ""+ playerScore01);
	GUI.Label (new Rect (Screen.width/2 + 150-18, 25, 100, 100), ""+ playerScore02);
	
	if(GUI.Button (new Rect (Screen.width/2 - 121/2, 35, 121, 53), "RESET")) {
		playerScore01 = 0;
		playerScore02 = 0;
		
		theBall.gameObject.SendMessage("ResetBall");
		
	}
}