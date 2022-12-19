<script>
var modal = document.getElementById("myModal");
var close = document.getElementsByClassName("close")
[0];
var button = document.getElementById("myButton");

close.onclick = function() {
    modal.style.transform = "scale(0)";
    modal.style.opacity = "0";
}

button.onclick = function() {
    modal.style.transform = "scale(1)";
    modal.style.opacity = "1";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.transform = "scale(0)"
        modal.style.opacity =  "0";
    }
}
</script>
