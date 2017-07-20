
//function show all

function showFunction() {
  document.getElementById("canvas").innerHTML =

  d3.csv("data.csv", function(data) {
    console.log(data);

    var colornames = d3.select("svg") //select the svg on the html. It is a selection that makes one group with subgroups per data point
      .selectAll("g") //select all the groups and make one group per row of the data set
      .data(data)
      .enter()
      .append("g")
          //give each group a class
          .attr("class", "colornames");


        colornames.append("circle")
              .attr("r", function(d){return d.mentions * 10;})
              .style("fill", function(d){return d.color_code;})
              .attr("cx", function(d){return d.position_x;})
              .attr("cy", function(d){return d.position_y;});

        colornames.append("svg:text")
            .text(function(d){return d.name;})
            .attr("class", "circlestexts")
            .attr("x", function(d){return d.position_x;})
            .attr("y", function(d){return d.position_y;});

  });
}

//function show males

function malesFunction() {
  document.getElementById("canvas").innerHTML =

  d3.csv("data.csv", function(data) {

    var colornamesmales = d3.select("svg")
       .selectAll("g")
       .data(data)
       .enter()
       .append("g")
       .attr("class", "colornamesmales");

         colornamesmales.append("circle")
             .attr("r", function(d){return d.males * 10;})
             .style("fill", function(d){return d.color_code;})
             .attr("cx", function(d){return d.position_x;})
             .attr("cy", function(d){return d.position_y;});

         colornamesmales.append("svg:text")
           .text(function(d){
            if (d.males === 0) { //not working
              return " ";
            } else {
              return d.name;}
            })
           .attr("class", "circlestexts")
           .attr("x", function(d){return d.position_x;})
           .attr("y", function(d){return d.position_y;});
  });
}


//function show females

function femalesFunction() {
  document.getElementById("canvas").innerHTML =

  d3.csv("data.csv", function(data) {
    console.log(data);

    var colornamesfemales = d3.select("svg")
       .selectAll("g")
       .data(data)
       .enter()
       .append("g")
       .attr("class", "colornamesfemales");

         colornamesfemales.append("circle")
             .attr("r", function(d){return d.females * 10;})
             .style("fill", function(d){return d.color_code;})
             .attr("cx", function(d){return d.position_x;})
             .attr("cy", function(d){return d.position_y;});

         colornamesfemales.append("svg:text")
           .text(function(d){return d.name;})
           .attr("class", "circlestexts")
           .attr("x", function(d){return d.position_x;})
           .attr("y", function(d){return d.position_y;});
  });
}
