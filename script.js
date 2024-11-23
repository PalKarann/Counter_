let count = 1; 

function Counter() {
  document.getElementById("counter").value = count;
}
document.getElementById("increment").onclick = function () {
  count++;
  Counter();
};
document.getElementById("decrement").onclick = function () {
  if (count > 0) count--; 
  Counter();
};

function reset(){
    count=0;
    document.getElementById("counter").value = count;
}
