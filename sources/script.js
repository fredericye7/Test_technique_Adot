// Function changePage(no argument)
// When called Disable div0 and activate div1
function skipPage() {
    document.getElementById('div0').style.display = "none";
    document.getElementById('div1').style.display = "flex";
}

// Function changePage(no argument)
// When called Disable div1 and activate div2
function changePage() {
    document.getElementById('div1').style.display = "none";
    document.getElementById('div2').style.display = "flex";
}

