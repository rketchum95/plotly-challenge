
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
    buildCharts(SampleData);
  });
};


getData();

d3.selectAll("#selDataset").on("change", getData);

// function objectChanged() {
//   let option = d3.select("#selDataset").node().value;
// }

function getData(option) {
  
  d3.json("data/samples.json").then((metaData) => {

    sample = metaData.metadata;
    // id selection
    let option = d3.select("#selDataset").node().value;
  // filter for demograph data
    var arr = sample.filter(sampleObj => sampleObj.id == option);
    // console.log(arr);
    var result = arr[0];
    // console.log(result);
    var panelData = d3.select("#sample-metadata");
    // clear panel for new dataset
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
    // buildCharts(option);
  });
};


function buildCharts(option) {
  d3.json("data/samples.json").then((data) => {
    sampleData = data.samples;
    // console.log(sampleData);

    let option = d3.select("#selDataset").node().value;

    var chartArrays = sampleData.filter(sampleObj =>sampleObj.id == option);
    var result = chartArrays[0];
    console.log(result);

    var sample_values = result.sample_values;
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels

    var barChart = {
      x: sample_values.slice(0,10),
      y: otu_ids,
      type: "bar",
      orientation: "h",
      text: otu_labels
    };
    var data = [barChart];
    var layout = {
      title: "Top 10 Bacteria Culture Found",
    };
    Plotly.newPlot("bar", data, layout);
  });
  
};



init();