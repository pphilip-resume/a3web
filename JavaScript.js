// Javascript//


// function myFunction1() {
//     var x = document.getElementById("clickbox1");
//     if (x.innerHTML === "Spatial Analysis") {
//       x.innerHTML = "Transform complex data into actionable insights with our advanced spatial analysis and custom data visualization services.";
//     } else {
//       x.innerHTML = "Spatial Analysis";
//     }
//   }


// function myFunction2() {
//     var y = document.getElementById("clickbox2");
//     if (y.innerHTML === "GIS Implementation & Integration") {
//       y.innerHTML = "Seamlessly integrate GIS technology into your existing systems to enhance productivity and streamline workflows.";
//     } else {
//       y.innerHTML = "GIS Implementation & Integration";
//     }
//   }

// function myFunction3() {
//     var z = document.getElementById("clickbox3");
//     if (z.innerHTML === "Remote Sensing & Photogrammetry") {
//       z.innerHTML = "Leverage high-resolution imagery and cutting-edge remote sensing techniques for accurate mapping and analysis.";
//     } else {
//       z.innerHTML = "Remote Sensing & Photogrammetry";
//     }
//   }


function toggleText(boxId, newText, originalText) {
  var x = document.getElementById(boxId);
  x.innerHTML = x.innerHTML === newText ? originalText : newText;
}
