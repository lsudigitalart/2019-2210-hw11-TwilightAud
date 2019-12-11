var money;
var yNum = 0;
var sNum = 0;

function preload() {
  parks = loadTable("Legacy_City-Parish_Emplpoyee_Annual_Salaries.csv");
}

function setup() {
  createCanvas(800, 600);
  background(100);
  // print("number of jobs in 2014", YEAR.getRowCount());
  // print("amount of money", salary.getColumnCount());

  for (var i = 1; i < YEAR.getRowCount(); i++) {
    if (YEAR.get(i, 1) = "2014") {
      yNum = int(YEAR.get(i, 1)) + yNum;
    }

    if (TOTAL BASE PAY.get(i, 10) = "number") {
      sNum = int(TOTAL BASE PAY.get(i, 10)) + sNum;
    }
  }

  print(pNum);
  print(sNum);

  //playgrouds
  circle(200, height / 2, pNum * 2);

  //swimming pools
  circle(550, height / 2, sNum * 2);

}

function draw() {


}
