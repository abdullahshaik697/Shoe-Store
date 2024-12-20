let wrapper = document.querySelector(".sliderWrapper")
let menuItems = document.querySelectorAll(".menuItem")

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.transform = `translateX(${-100*index}vw)`
    });
});


let payButton = document.querySelector(".payButton")
let payment = document.querySelector(".payment")
let close = document.querySelector(".close")

payButton.addEventListener("click",()=>{
    payment.style="display:flex"
})

close.addEventListener("click",()=>{
    payment.style="display:none"
})















// https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/78b1c276-1a6e-4048-a5c8-6f8d1747e837/PEGASUS+PLUS.png     gray
// https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d6c435e3-f6f6-451a-9052-160531612392/PEGASUS+PLUS.png     black
// https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/87149d3e-7d59-42b3-86ce-4e81184f8dd8/PEGASUS+PLUS.png     purple
// https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b9161a78-4d1f-4f11-99c3-3eb5ede79ded/PEGASUS+PLUS.png     khaki