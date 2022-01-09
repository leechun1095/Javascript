var totalPrice = Number(24000); 
var checkbox = document.querySelectorAll(".checkbx");
var total = document.querySelector("#total");


for(var i=0; i<checkbox.length; i++){
    checkbox[i].onclick = function(){
        // console.log(this)
        if(this.checked == true) {
            totalPrice += Number(this.value);
            console.log(totalPrice);
        } else {
            totalPrice -= Number(this.value);
            console.log(totalPrice);
        }
        total.value = totalPrice + "원";
    }
}