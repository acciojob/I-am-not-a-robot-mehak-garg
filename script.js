//your code here
let image_array = [
    "https://images.unsplash.com/photo-1761839258671-6495fdc188b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1686149811450-c55a5fa3851f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1775926235479-7e5663a1da9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    "https://plus.unsplash.com/premium_photo-1776100225062-351ad6a83300?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1776410866978-171cc3033431?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
];
window.onload = function () {
    var randomNum = Math.floor(Math.random() * 5);

    document.getElementById("img6").src = image_array[randomNum];


    let img1 = document.querySelector("#img1");
    let img2 = document.querySelector("#img2");
    let img3 = document.querySelector("#img3");
    let img4 = document.querySelector("#img4");
    let img5 = document.querySelector("#img5");
    let img6 = document.querySelector("#img6");

    let arr = new Array(6);
    for (let i = 0; i < 6; i++) {
        let item = Math.floor(Math.random() * 7);
        while (item === 0) {
            item = Math.floor(Math.random() * 7);

        }
        for (let j = 0; j < i; j++) {
            if (arr[j] !== item) {
                continue;
            }
            else {
                item = Math.floor(Math.random() * 7);
                while (item === 0) {
                    item = Math.floor(Math.random() * 7);

                }
                j = -1;
            }
        }
        arr[i] = item;
    }


    img1.style.order = arr[0];
    img1.setAttribute("src",image_array[arr[0]-1]);
    img2.style.order = arr[1];
  img2.setAttribute("src",image_array[arr[1]-1]);
    
    img3.style.order = arr[2];
 img3.setAttribute("src",image_array[arr[2]-1]);
 
    img4.style.order = arr[3];
     img4.setAttribute("src",image_array[arr[3]-1]);
 
    img5.style.order = arr[4];
 img5.setAttribute("src",image_array[arr[4]-1]);
 
 
 img6.style.order = arr[5];

 
}

let selectedimages=[];
let images = document.querySelectorAll("img");
let count = 0;
images.forEach((item, i) => {
    item.addEventListener("click", (e) => {
        count++;
        console.log(item);
     selectedimages.push(item.src);
         
        if (count === 1) {
            document.querySelector("#reset").style.visibility = "visible";
            // selectedimages[0]=item.src;
        }
        if (count === 2) {
            document.querySelector("#verify").style.visibility = "visible";
        document.querySelector("#verify").addEventListener("click",()=>{if(selectedimages[0]===selectedimages[1])
        {
            document.querySelector("#result").innerText="You are a human. Congratulations!";
            document.querySelector("#verify").style.visibility = "hidden";
			selectedimages.pop();
            selectedimages.pop();
        }
             else{
				 document.querySelector("#result").innerText="We can't verify you as a human. You selected the non-identical tiles.";
			 document.querySelector("#verify").style.visibility = "hidden";
			 }
																	   }}
         
            if (count > 2) {
                document.querySelector("#verify").style.visibility = "hidden";
            }
        })
})