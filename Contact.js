let cake = document.getElementById("cake");
var times =0;
var positions=[{x:1,y:1},{x:3,y:3},{x:3,y:1},{x:1,y:3}];

let move = function(){
	cake.setAttribute("style",`grid-column-start:${positions[times].x} ;grid-row-start:${positions[times].y}`);
	times++;
	if(times===4) {times=0;}
}


cake.addEventListener("mouseenter",function(){
move();	
})

// *---- 1-1     ------*	1 3 ---- 3-3     -------	3 1 

// -----		 -------   		----*		  *------