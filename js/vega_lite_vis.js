var spec2 = "js/death_world_map.json";
  vegaEmbed('#map_overview', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);