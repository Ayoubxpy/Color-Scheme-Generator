document.getElementById("get-color-btn").addEventListener("click",() => {
    let seedColor = document.getElementById("seed-color").value
    seedColor = seedColor.slice(1)
    const scheme = document.getElementById("scheme").value 
    fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${scheme.toLowerCase()}`)
    .then(res => res.json())
    .then(data=>{
        dataArray = data.colors
        handleGetColorClick()
    })
function handleGetColorClick(){
    
       const htmlArray = dataArray.map((item)=>{
            return  `
            <div>
            <div class="color-palette" style="background-color:${item.hex.value};"></div>
            <p id="hex-value"> ${item.hex.value} </p>
            </div>
            `
        }).join("")
    document.getElementById("color-palette").innerHTML = htmlArray
}
})
