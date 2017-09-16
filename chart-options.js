return { 
  seriesDefaults: {
    // Make this a pie chart.
    renderer: $.jqplot.PieRenderer, 
    rendererOptions: {
      // Put data labels on the pie slices.
      // By default, labels show the percentage of the slice.
      showDataLabels: true
    }
  }, 
  legend: { show: true, location: 'e' }
};