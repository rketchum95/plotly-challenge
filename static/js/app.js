
function init() {
  d3.json("data/samples.json").then((data) => {
    samples = data.names;
    samples.map(samples => +samples)
    var dropdownMenu = d3.select("#selDataset");
    console.log(samples);

    samples.forEach((sample) =>
      dropdownMenu
      .append("idSelect")
      .attr("key", sample)
      .text(sample));
  });

let idSelect = "940";

getData(idSelect);

};

// let idSelect = "940";

// getData(idSelect);

d3.selectAll("#selDataset").on("change", getData);

function getData(idSelect) {
  d3.json("data/samples.json").then((metaData) => {
    console.log(metaData);
    let idSelect = "940";
    var arr = metaData.metadata.filter(sampleObj => idSelect);
    console.log(arr);
    var result = arr[0];
    var panelData = d3.select("#sample-metadata");

    Object.entries(result).forEach(([key,value]) => {
      panelData.append("div").text('${key}: ${value}');
    });

    // let gender = metaData.metadata.filter((val) => val.id == idSelect);
    // var genderid = gender[3];
    // console.log(genderid);
    // var age 
    // var location
    // var bbtype
    // var wfreq
    // console.log();

  });
};

init();