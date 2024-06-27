// Application Interface (API)
// JS is sinxron lang
// fetch then


const contaBox = document.querySelector(".contaBox");
const btnIN = document.querySelector(".increment");
const btnDEC = document.querySelector(".decrement");
const btnR = document.querySelector(".remove");
const searchInput = document.querySelector("input");

fetch('https://fakestoreapi.com/products')
.then(response => response.json())           //status 200: success 404: eror
.then((dataAll) => {

    let count = 0;

    const getAllData = (handleData)=>{  
        contaBox.innerHTML = "";      
        handleData.slice(0, 20).forEach(data => {

            contaBox.innerHTML += `
                <div class="contaBox">
                    <div class="box">
                        <div class="imgBox">
                            <img src=${data.image} alt="">
                        </div>
                            <h1>${data.category}</h1>
                            <span>${data.price}</span>
                            <p>${data.description.slice(0,50)+"..."}</p>
                        </div>
                    </div>
                </div>
            `
        });
    }

    getAllData(dataAll);


    btnIN.addEventListener("click", ()=> {
        count++;
        getAllData(dataAll);
    })


    btnDEC.addEventListener("click", ()=> {
        count--;

        if (count < 0) {
            count = 0;
        } else {
            getAllData(dataAll);
        }
    })

    btnR.addEventListener("click", ()=> {
        count = 0;
        getAllData(dataAll);
    })


    searchInput.addEventListener("input", (e)=> {
        const filter = dataAll.filter((item) => {
            return item.category.toLowerCase().includes(e.target.value.toLowerCase());
        })

        console.log(filter);
        getAllData(filter);
    })
})