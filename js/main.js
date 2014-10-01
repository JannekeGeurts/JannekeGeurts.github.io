function showTraining(trainingName){
    $(".mod-training").hide();
    $(".mod-training-part").hide();
    $(trainingName).show();
}

$(".button-training1").on("click",function(){
    showTraining(".training1");
});

$(".button-training2").on("click",function(){
    showTraining(".training2");
});

$(".button-training3").on("click",function(){
    showTraining(".training3");
});

function showTrainingPart(trainingName, trainingPartName){
    $(trainingName).hide();
    $(".mod-training-part").hide();
    $(trainingPartName).show();
}

$(".choose-training1a").on("click",function(){
    showTrainingPart(".training2, .training3", ".training1a");
});

$(".choose-training1b").on("click",function(){
    showTrainingPart(".training2, .training3", ".training1b");
});

$(".choose-training1c").on("click",function(){
    showTrainingPart(".training2, .training3", ".training1c");
});

$(".choose-training2a").on("click",function(){
    showTrainingPart(".training1, .training3", ".training2a");
});

$(".choose-training2b").on("click",function(){
    showTrainingPart(".training1, .training3", ".training2b");
});

$(".choose-training2c").on("click",function(){
    showTrainingPart(".training1, .training3", ".training2c");
});

$(".choose-training2d").on("click",function(){
    showTrainingPart(".training1, .training3", ".training2d");
});

$(".choose-training3a").on("click",function(){
    showTrainingPart(".training1, .training2", ".training3a");
});

$(".choose-training3b").on("click",function(){
    showTrainingPart(".training1, .training2", ".training3b");
});
