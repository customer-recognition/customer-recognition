// var canvas = document.querySelector('canvas')

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var ctx = canvas.getContext('2d');

// ctx.fillStyle = "black";
// ctx.strokeStyle = "lightgray";
// ctx.lineWidth = 2;

function tables(elem, event, area, func){
    // area is relative to page :
    // var area = {
    //     x0: 60,
    //     y0: 60,
    //     x1: 100,
    //     y1: 100
    // }    
    elem.addEventListener(event, function(e){
        var page = {
            x: e.pageX,
            y: e.pageY
        }
        if(page.x >= area.x0 && page.x <= area.x1 && page.y >= area.y0 && page.y <= area.y1){
            func();
        }
    });
}

tables(
    document.getElementById('t1'), 'click',
    {
        x0: 60,
        x1: 100,
        y0: 60,
        y1: 100
    
    },
    function() {
        alert('Testing!');
        console.log('testing table 1')
    }
);

tables (
    document.getElementById('t2'), 'click', {
        x0: 60,
        x1: 100,
        y0: 60,
        y1: 100
    },
    function() {
        alert('Testing2!');
        console.log('testing table 2')
    }
)