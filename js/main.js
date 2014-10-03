var width = $(window).width();

function showTrainingPart(trainingName, trainingPartName) {
    console.log(width);
    if (width < 450) {
        $(trainingName).show();
        $(".mod-training-part").hide();
        $(trainingPartName).show();
    } else if (width > 900) {
        $(trainingName).hide();
        $(".mod-training-part").hide();
        $(trainingPartName).show();
        }
}

$(".choose-training1a").on("click",function(){
    if (width < 450) {
        showTrainingPart("training1", ".training1a");
    } else if (width > 900) {
        showTrainingPart("training2, training3", ".training1a");
    }
});

$(".choose-training1b").on("click",function(){
    if (width < 450) {
        showTrainingPart("training1", ".training1b");
    } else if (width > 900) {
        showTrainingPart("training2, training3", ".training1b");
    }
});

$(".choose-training1c").on("click",function(){
    if (width < 450) {
        showTrainingPart("training1", ".training1c");
    } else if (width > 900) {
        showTrainingPart("training2, training3", ".training1c");
    }
});

$(".choose-training2a").on("click",function(){
    if (width < 450) {
        showTrainingPart("training2", ".training2a");
    } else if (width > 900) {
        showTrainingPart("training2, training3", ".training2a");
    }
});

$(".choose-training2b").on("click",function(){
    if (width < 450) {
        showTrainingPart("training2", ".training2b");
    } else if (width > 900) {
        showTrainingPart("training2, training3", ".training2b");
    }
});

$(".choose-training2c").on("click",function(){
    if (width < 450) {
        showTrainingPart("training2", ".training2c");
    } else if (width > 900) {
        showTrainingPart("training2, training3", ".training2c");
    }
});

$(".choose-training2d").on("click",function(){
    if (width < 450) {
        showTrainingPart("training2", ".training2d");
    } else if (width > 900) {
        showTrainingPart("training2, training3", ".training2d");
    }
});

$(".choose-training3a").on("click",function(){
    if (width < 450) {
        showTrainingPart("training3", ".training3a");
    } else if (width > 900) {
        showTrainingPart("training2, training3", ".training3a");
    }
});

$(".choose-training3b").on("click",function(){
    if (width < 450) {
        showTrainingPart("training3", ".training3b");
    } else if (width > 900) {
        showTrainingPart("training2, training3", ".training3b");
    }
});

function showTraining(trainingName) {
    if (width > 900) {
        $(".mod-training").hide();
        $(".mod-training-part").hide();
        $(trainingName).show();
    }
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
