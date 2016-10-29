var holst = document.querySelector('canvas');
var holst2D = holst.getContext('2d');

holst2D.beginPath();
holst2D.moveTo(0,0);
holst2D.lineTo(200,200);
holst2D.lineTo(200,0);
holst2D.strokeStyle = 'yellow';

holst2D.stroke();

holst2D.moveTo(30,30);
holst2D.lineTo(50,50);
holst2D.strokeStyle = 'red';

holst2D.stroke();