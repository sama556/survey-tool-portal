const spanElement = document.querySelector('.rotate-text');

  let textIndex = 0;
  const texts = ['Minds', 'Business','people'];

  setInterval(() => {
    spanElement.classList.add('rotate');
    setTimeout(() => {
      spanElement.querySelector('span').textContent = texts[textIndex];
      spanElement.classList.remove('rotate');
      textIndex = (textIndex + 1) % texts.length;
    }, 750);
  }, 3000);





// Define the toggleImages function
function toggleImages() {
  var g1Image = document.querySelector('.g1');
  var g2Image = document.querySelector('.g2');
  var g3Image = document.querySelector('.g3');

  g1Image.classList.toggle('hidden');
  g2Image.classList.toggle('hidden');
  g3Image.classList.toggle('hidden');
  g1Image.classList.toggle('visible');
  g2Image.classList.toggle('visible');
  g3Image.classList.toggle('visible');
}
document.getElementById('secDiv').addEventListener('click', toggleImages);



function updateProgress(event) {
  const progressBar = document.getElementById('progressBar');
  const rect = progressBar.getBoundingClientRect();
 
  const successWidth = 60;
  const warningWidth = 25;
  const dangerWidth = 15;

  
  const successBar = progressBar.querySelector('.success');
  const warningBar = progressBar.querySelector('.warning');
  const dangerBar = progressBar.querySelector('.danger');

  successBar.style.width = successWidth + '%' ;
  warningBar.style.width = warningWidth + '%';
  dangerBar.style.width = dangerWidth + '%';
  const img1= document.querySelector('.img1');
  img1.style.opacity = 1;
  const img2= document.querySelector('.img2');
  img2.style.opacity = 1;
  const img3= document.querySelector('.img3');
  img3.style.opacity = 1;
}

document.addEventListener('DOMContentLoaded', function() {
 
  const queThree = document.querySelector('.que-three');


  queThree.addEventListener('click', function() {
  
    const progressBar1 = document.querySelector('#progress-bar1');
    progressBar1.style.width = '30%';

    const progressBar2 = document.querySelector('#progress-bar2');
    progressBar2.style.width = '70%';
    const star = document.querySelector('.star');
    star.style.opacity = 1;

    const progressBar3 = document.querySelector('#progress-bar3');
    progressBar3.style.width = '40%';

    const progressBar4 = document.querySelector('#progress-bar4');
    progressBar4.style.width = '20%';

    const progressBar5 = document.querySelector('#progress-bar5');
    progressBar5.style.width = '50%';
  });
});

document.addEventListener('DOMContentLoaded', function() {
 
  const que4 = document.querySelector('.que4');


  que4.addEventListener('click', function() {
  
    const an1 = document.querySelector('.an1');
    an1.style.opacity = 1;
    

    const an2 = document.querySelector('.an2');
    an2.style.opacity = 1;
    const an3 = document.querySelector('.an3');
    an3.style.opacity = 1;
  });
});









var xValues = ["answer 80", "answer 10"];
  var yValues = [70, 30];
  var barColors = [ 'rgba(98, 0, 238, 0.3)',
                    'rgba(0, 201, 189, 0.3)'];
  
  var myChart = new Chart("myChart", {
      type: "pie", 
      data: {
          labels: xValues, 
          datasets: [{
              backgroundColor: barColors, 
              data: yValues 
          }]
      }
  });
  document.getElementById("myChart").onclick = function(evt) {
    barColors.forEach(function(color, index) {
        barColors[index] = color.replace('0.3', '1');
    });
    myChart.data.datasets[0].backgroundColor = barColors;
    myChart.update();
};



  var x = ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"];
  var y = [20, 55, 30, 10, 70];
  var bar = ["#759BE4", "#6200EE", "#85CF88", "#F7A66B", "#CEB0FA"];

  new Chart("Chart", {
      type: "bar",
      data: {
          labels: x,
          datasets: [{
              backgroundColor: bar,
              data: y
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      min: 0,
                      max: 100,
                      stepSize: 10,
                      callback: function(value) {
                          return value + "%";
                      }
                  }
              }],
              xAxes: [{
                  categoryPercentage: 1.0,
                  barPercentage: 0.7,
                  barThickness: 30
              }]
          }
      }
  });


  function changeContent(buttonIndex) {
    const image = document.querySelector('.bank-two img');
    const p1 = document.querySelector('.bank-p1');
  
    
    if (buttonIndex === 1) {
   
      image.src = "../image/Frame 1000005109 (1).png";
      p1.textContent = "Question Bank";
      
    } else if (buttonIndex === 2) {
      
      image.src = "../image/mult.png";
      p1.textContent = "Multi Languages";
      
    }}