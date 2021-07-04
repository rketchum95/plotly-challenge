
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

    var sampleData = samples[0];
    console.log(sampleData);
    buildCharts(sampleData);
    getData(sampleData);
  });
};

function optionChanged(newData) {
  getData(newData);
  buildCharts(newData);
}

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
 
// Enter demographics data into table
    Object.entries(result).forEach(([key,value]) => {
      panelData
      .append("p")
      .text(`${key}: ${value}`);
    });
    buildCharts(option);
  });
};


function buildCharts() {
  d3.json("data/samples.json").then((data) => {
    sampleData = data.samples;
    // console.log(sampleData);
    // User option selection
    let option = d3.select("#selDataset").node().value;
  
    // filter data
    var chartArrays = sampleData.filter(sampleObj =>sampleObj.id == option);
    var result = chartArrays[0];
    console.log(result);

    var sample_values = result.sample_values;
    console.log(sample_values);

    // variables
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;
    var y = otu_ids.slice(0,10).map(option_id => `OTU ${option_id}`).reverse();
  
    // bar chart
    var barChart = {
      x: sample_values.slice(0,10).reverse(),
      y: y,
      type: "bar",
      orientation: "h",
      text: otu_labels
    };
    var barData = [barChart];
    var layout = {
      title: "Top 10 Bacteria Culture Found",
    };
    Plotly.newPlot("bar", barData, layout);
    
    // bubble chart


  });
  
};

init();