function sum() {
  let input_1 = document.getElementById("input_1").value || 0;
  let input_2 = document.getElementById("input_2").value || 0;
  let input_3 = document.getElementById("input_3").value || 0;
  let input_4 = document.getElementById("input_4").value || 0;
  let input_5 = document.getElementById("input_5").value || 0;

  let majmua =
    parseFloat(input_1) +
    parseFloat(input_2) +
    parseFloat(input_3) +
    parseFloat(input_4) +
    parseFloat(input_5);

  document.getElementById("result").innerHTML = "Sum: " + majmua;
}
