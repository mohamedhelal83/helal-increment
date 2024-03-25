var counter =0;
function increment(){
    counter++;
    document.getElementById("lion").innerHTML = counter;
}
function decrement(){
    counter--;
    document.getElementById("lion").innerHTML = counter;
}