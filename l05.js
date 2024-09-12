
//basic selection operations

let div1 = d3.select("#div1")

let svg = div1.append("svg")

svg.attr("width", 400)
svg.attr("height", 400)

//create a single circle, note the chaining
svg.append("circle")
   .attr("cx", 50)
   .attr("cy", 50)
   .attr("r", 20)
   .style("fill", "lightgreen")


//A very un-d3-like way of initializing circles using for loops
for(let i=0; i<10; i++) {
  let circle = svg.append("circle")
  circle.attr("cx", function () { 
     return 100+Math.random()*200;
  })
  circle.attr("cy", 100+Math.random()*200);
  circle.attr("r", 5*(i+1));
  circle.style("fill", "lightblue");
  circle.style("stroke", "black");
  //Set up ids based on index in the array...in d3 we won't need to do this eventually.
  circle.attr("id", "id" + i);
}

let lastcircle = d3.select("#id9");
lastcircle.style("fill", "red");

//A few quick examples of d3 data join

let dataArray = [6,8,12,4.5,2,10,6,8,9,7]

// Bind data to circles
let circles = d3.selectAll("circle")
                .data(dataArray)

//Since there are 10 items in the data array, but 11 circles, this removes the last circle (the red one)
circles.exit().transition().duration(5000)
       .attr('r', 0)
       .remove()

//This does an update for all circles that are data bound, updating their radius to be based on the dataArray
circles.transition().duration(5000)
       .attr('r', function(d) {
          return d*5;
       })
