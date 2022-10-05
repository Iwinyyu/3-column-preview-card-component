const items = [
  sedan = {
    url : "images/icon-sedans.svg",
    name : "sedans",
    description : "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    color: "var(--Bright-orange)"
  },
  suv = {
    url : "images/icon-suvs.svg",
    name : "suvs",
    description : "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    color: "var(--Dark-cyan)"

  },
  luxury = {
    url : "images/icon-luxury.svg",
    name : "luxury",
    description : "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    color: "var(--Very-dark-cyan)"

  },
]

const container = document.getElementById('container')
const temp = document.querySelector('#temp');

document.addEventListener('DOMContentLoaded', ()=>{
  items.forEach(item =>{
    const clone = temp.content.cloneNode(true);
    let img = clone.getElementById('icon');
    img.src = item.url;
    let title = clone.getElementById('title');
    title.textContent = item.name;
    let para = clone.getElementById('para'); 
    para.textContent = item.description;
    let color = clone.querySelector('#card');
    color.style.backgroundColor = item.color;
    let btn = clone.querySelector('#btn');
    btn.style.color = item.color;


    container.appendChild(clone)
  })

})