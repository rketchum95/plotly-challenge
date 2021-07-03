
function init() {
  d3.json("data/samples.json").then((data) => {
    samples = data.names;
    samples.map(samples => +samples)
    var dropdownMenu = d3.select("#selDataset");
    // console.log(samples);

    samples.forEach((sample) => {
      dropdownMenu
      .append("option")
      .attr("key", sample)
      .text(sample)
    });

    var SampleData = samples[1];
    getData(SampleData);
  });
};

// let idSelect = "940";

getData();

d3.selectAll("#selDataset").on("change", getData);

// function objectChanged() {
//   let option = d3.select("#selDataset").node().value;
// }

function getData(option) {
  
  d3.json("data/samples.json").then((metaData) => {
    // console.log(metaData);
    // let option = "940";
    sample = metaData.metadata;
    // sample.map(sample => +sample);
    // console.log(sample);
    
    let option = d3.select("#selDataset").node().value;

    var arr = sample.filter(sampleObj => sampleObj.id == option);
    console.log(arr);
    var result = arr[0];
    console.log(result);
    var panelData = d3.select("#sample-metadata");

    panelData.html("");

    // function objectChanged() {
    //   let option = d3.select("#selDataset").node().value;
    // }
    
// Enter demographics data into table
    Object.entries(result).forEach(([key,value]) => {
      panelData
      .append("p")
      .text(`${key}: ${value}`);
    });

  });
};

init();