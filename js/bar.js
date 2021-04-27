window.addEventListener('load', setup1);

async function setup1() {
  const ctx = document.getElementById('bar-chartcanvas').getContext('2d');
  const dataTemps = await getData1();
  const myChart = new Chart(ctx, {
	type: 'line',
	data: {
	  labels: dataTemps.classes,
	  datasets: [
		{
		  label: 'precision',
		  data: dataTemps.precision,
		  fill: false,
		  borderColor: 'rgba(255, 99, 132, 1)',
		  backgroundColor: 'rgba(255, 99, 132, 0.5)',
		  borderWidth: 1
		},
		{
		  label: 'recall',
		  data: dataTemps.recall,
		  fill: false,
		  borderColor: 'rgba(99, 132, 255, 1)',
		  backgroundColor: 'rgba(99, 132, 255, 0.5)',
		  borderWidth: 1
		},
		{
		  label: 'fi_score',
		  data: dataTemps.f1_score,
		  fill: false,
		  borderColor: 'rgba(99, 255, 132, 1)',
		  backgroundColor: 'rgba(99, 255, 132, 0.5)',
		  borderWidth: 1
		}
	  ]
	},
	options: {}
  });
}

async function getData1() {
  // const response = await fetch('testdata.csv');
  const response = await fetch('tweetresult.csv');
  const data = await response.text();
  const classes = [];
  const precision = [];
  const recall = [];
  const f1_score = [];
//   const support = [];

  const rows = data.split('\n').slice(1);
  rows.forEach(row => {
	const cols = row.split(',');
	classes.push(cols[0]);
	precision.push(cols[1]);
	recall.push(cols[2]);
	f1_score.push(cols[3]);
	// support.push(cols[4]);
  });
  return { classes, precision, recall, f1_score };
}