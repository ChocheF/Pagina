var plyConfig = {
  responsive: true,
  showLink: false,
  locale: "es",
  displaylogo: false,
  displayModeBar: false,
};

var Plotly = window.Plotly || {};
window.addEventListener("load", function () {
  console.log("Iniciando Plotly");
  showEuro();
  showDolar();
  showBit();
});


function unpack(rows, key) {
  return rows.map(function (row) {
    return row[key]
  });
}

function showEuro() {
  Plotly.d3.csv("euro.csv", function (err, rows) {
    if (err) {
      console.log("Error en CSV", err);
      return;
    }

    var valores_euro = {
      type: "scatter",
      mode: 'lines',
      x: unpack(rows, "DATE"),
      y: unpack(rows, "QTY"),
    };

    var data = [valores_euro];

    var layout = {
      title: "Variación del Euro por día",
      font: { size: 18 },
    };

    Plotly.newPlot("my-euro", data, layout, plyConfig);
  })
}

function showDolar() {
  Plotly.d3.csv("dolar.csv", function (err, rows) {
    if (err) {
      console.log("Error en CSV", err);
      return;
    }

    var valores_dolar = {
      type: "scatter",
      mode: 'lines',
      x: unpack(rows, "DATE"),
      y: unpack(rows, "QTY"),
    };

    var data = [valores_dolar];

    var layout = {
      title: "Variación del Dólar por día",
      font: { size: 18 },
    };

    Plotly.newPlot("my-usd", data, layout, plyConfig);
  })
}
function showBit() {
  Plotly.d3.csv("bitcoin.csv", function (err, rows) {
    if (err) {
      console.log("Error en CSV", err);
      return;
    }

    var valores_bit = {
      type: "scatter",
      mode: 'lines',
      x: unpack(rows, "DATE"),
      y: unpack(rows, "QTY"),
    };

    var data = [valores_bit];

    var layout = {
      title: "Variación del Bitcoin por día",
      font: { size: 18 },
    };

    Plotly.newPlot("my-bitcoin", data, layout, plyConfig);
  })
}
