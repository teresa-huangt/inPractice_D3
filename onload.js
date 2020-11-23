function init_canvas(w, h) {
  // Init canvas with w: width, h: height
  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("style", "background: pink; padding: 10px");
  return svg;
}

function add_bars(svg, dataSet, xScale, h, yScale) {
  // Add bars into [svg],
  // DataSet: dataset to be added,
  // xScale, yScale: Scale method,
  // h: height of svg
  svg
    .selectAll("rect")
    .data(dataSet)
    .enter()
    .append("rect")
    .attr("x", function (d, i) {
      return xScale(i);
    })
    .attr("y", function (d, i) {
      return h - yScale(d);
    })
    .attr("width", function (d, i) {
      return xScale.bandwidth(); //!
    })
    .attr("height", function (d, i) {
      return yScale(d);
    })
    .attr("fill", function (d, i) {
      return "rgb(0,0," + Math.random() * 255 + ")";
    }) // 没加d，i也可以
    .attr("opacity", 1); // former opacity in rect
}
