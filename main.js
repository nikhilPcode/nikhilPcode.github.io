$("#Home").on("click", clickHome);

function clickHome(){
    
    
}
function clickCharities(){
    window.location = "http://stackoverflow.com";
    console.log("HI I PRESSED CHARITIES");
    alert('button clicked');
}
$("#Charities").on("click", clickCharities);
<script>
    function visitPage(){
        window.location='Home.html';
    }
</script>
<button onclick="visitPage();">Visit Page Now</button>





