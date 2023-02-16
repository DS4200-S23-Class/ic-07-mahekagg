
// defining constants
const points = [55000, 48000, 27000, 66000, 90000];
const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};


const FRAME1 =
    d3.select("#vis1")
        .append("svg")
        .attr("height", FRAME_HEIGHT)
        .attr("width", FRAME_WIDTH)
        .attr("class", "frame");


FRAME1.selectAll("points")
    .data(points)
    .enter()
    .append("circle")
    .attr("cx", (d) => {
        return ((d) + MARGINS.left)
    })
    .attr("cy", MARGINS.top)
    .attr("r", 10)
    .attr("class", "point");