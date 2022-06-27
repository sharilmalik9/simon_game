var userClickedPattern=[];
var array=["red", "blue", "green", "yellow" ];
var gamePattern=[];
var level=0;
var first=false;

$(document).keypress(function(){
    console.log(first);
    if(!first){
    $("#level-little").text("Level " +level);
    nextsequence();
    first=true;
    }

});
$(".btn").click(function(){
    handler(this.id);
    playSound(this.id);
    animatePress(this.id);
    checkSequence(userClickedPattern.length-1);
    

});

//nextsequence();
function nextsequence(){
    level++;
    $("#level-title").text("Level " + level);
    userClickedPattern=[];
    var randomNumber=Math.floor(Math.random() * 4) ;
    var RandomChosenColor=array[randomNumber];
    gamePattern.push(RandomChosenColor);
    
        $("#" + RandomChosenColor).addClass("pressed");
        playSound(RandomChosenColor);
        setTimeout(function(){
        $("#" + RandomChosenColor).removeClass("pressed");}, 100);
   
}
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function handler(id){
    var userchosenbutton=id;
    userClickedPattern.push(userchosenbutton);


}
function animatePress(currentColor){
    $("#" +currentColor).addClass("pressed");
        setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");}, 100);


}
function GameOver(){
    
    first=false;
    gamePattern=[];
    level=0;

}
function checkSequence(level){
    if(userClickedPattern[level]==gamePattern[level]){
        if(userClickedPattern.length==gamePattern.length){
            setTimeout(function () {
                nextsequence();
              }, 1000);
            }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
          }, 200);
          GameOver();

    }
}