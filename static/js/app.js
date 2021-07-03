
function init() {
  d3.json("data/samples.json").then((data) => {
    samples = data.names;
    samples.map(samples => +samples)
    var dropdownMenu = d3.select("#selDataset");
    console.log(samples);

    samples.forEach((sample) => {
      dropdownMenu
      .append("option")
      .attr("key", sample)
      .text(sample)
    });
  // let idSelect = "940";
  // getData(option);
  });
};

// let idSelect = "940";

getData();

d3.selectAll("#selDataset").on("change", getData);

function getData(option) {
  d3.json("data/samples.json").then((metaData) => {
    console.log(metaData);
    let option = "940";
    
    var arr = metaData.metadata.filter(sampleObj =>option);
    console.log(arr);
    var result = arr[0];
    console.log(result);
    var panelData = d3.select("#sample-metadata");

    panelData.html("");

    Object.entries(result).forEach(([key,value]) => {
      panelData
      .append("p")
      .text(`${key}: ${value}`);
    });

  });
};

init();