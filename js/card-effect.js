$(document).ready(function(){
    $('#software-learn').mouseover(function(){
        $('#image-hover-learn').attr('src', './img/development-min.jpg');
    })
    $('#software-learn').mouseout(function(){
        $('#image-hover-learn').attr('src', './img/learn.jpg');
    })

    $('#software-strategy').mouseover(function(){
        $('#image-hover-learn').attr('src', './img/entrepreneurship-min.jpg');
    })
    $('#software-strategy').mouseout(function(){
        $('#image-hover-learn').attr('src', './img/learn.jpg');
    })

    $('#software-design').mouseover(function(){
        $('#image-hover-learn').attr('src', './img/Home-background-min.jpg');
    })
    $('#software-design').mouseout(function(){
        $('#image-hover-learn').attr('src', './img/learn.jpg');
    })

    $('#software-emprendimiento').mouseover(function(){
        $('#image-hover-learn').attr('src', './img/strategy-min.jpg');
    })
    $('#software-emprendimiento').mouseout(function(){
        $('#image-hover-learn').attr('src', './img/learn.jpg');
    })
});
