function init() {
  d3.json("data/samples.json").then((data) => {
    // console.log(samples)
    var name = data.names;
    var dropdownMenu = d3.select("#selDataset");
    console.log(name);

    name.forEach((sample) =>
      dropdownMenu
      .append("idSelect")
      .text(sample)
      .property("value", sample));
  });
};

let idSelect = "940";

getData(idSelect);

d3.selectAll("#selDataset").on("change", getData);

function getData() {
  d3.json("data/samples.json").then((metaData) => {
    var ethnicity = metaData.metadata.ethnicity;
    // var gender
    // var age 
    // var location
    // var bbtype
    // var wfreq
    console.log(ethnicity);

  });
}

init();