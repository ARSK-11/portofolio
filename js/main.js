

var oilCanvas = document.getElementById("oilChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var oilData = {
    labels: [
        "html5",
        "css",
        "javascript",
        "php",
        "python"
    ],
    datasets: [
        {
            data: [85.4, 78.2, 67.2, 56.6, 46.2],
            backgroundColor: [
                "#FF6384",
                "#63FF84",
                "#84FF63",
                "#8463FF",
                "#6384FF"
            ],
            borderColor: "transparent",
            borderWidth: "0"
        }]
};

var pieChart = new Chart(oilCanvas, {
  type: 'pie',
  rotation: -Math.PI,
  data: oilData,
  cutoutPercentage: 30,
  legend: {
    position: 'left'
  },
});

fetch("./json/main.json")
.then((res) => res.json())
.then((data) => {
    var output = "";
    console.log(data[0].name)
    data.forEach((user) => {
        output += `
        <div class="card ${user.activ}">
            <div style="padding: 5px 10px 5px;">
                <div style="display: inline-block; max-width: 200px;">
                    <h4>${user.name}</h4>
                    <p>${user.title}</p>
                </div>
                <div style="float: right; margin-top: 50px; display: flex;">
                    <span class="material-symbols-outlined">
                        link
                    </span>: <a style="color: whitesmoke;" href="${user.link}">${user.titlink}</a>
                </div>
            </div>
        </div>
        `;
    });
    document.getElementById("doc").innerHTML = output;
})
.catch((err) => console.log(err))




    // var xValues = [10,20,30,40,50,60,70,80,90,100];
    // var yValues = [7,8,8,9,9,9,10,11,14,14,15];
    
    // new Chart("myChart", {
    //   type: "line",
    //   data: {
    //     labels: xValues,
    //     datasets: [{
    //       fill: false,
    //       lineTension: 0,
    //       backgroundColor: "rgb(0, 128, 255)",
    //       borderColor: "whitesmoke",
    //       data: yValues,
    //       data: [10,20,30,40,50,60,70,80,90,100],
    //     }]
    //   },
    //   options: {
    //     legend: {display: false},
    //     scales: {
    //       yAxes: [{ticks: {min: 1, max:100}}],
    //     }
    //   }
    // });