const STORE_NAME="NorthCart";const CUR="USD";
const ICON={"Outdoor & Survival":"🏕️","Tech Accessories":"🔌","Home Decor & Lighting":"💡","Phone Accessories":"📱","Automotive":"🚗","Home & Kitchen":"🍳","Home Appliances":"🌀","Gaming & Electronics":"🎮","Beauty & Personal Care":"💄","Health & Fitness":"💪","Tools & DIY":"🛠️","Smart Home":"🏠","Apparel & Outdoor":"👕","Toys & Kids":"🧸"};
const HUE=c=>{let h=0;for(const ch of c)h=(h*31+ch.charCodeAt(0))%360;return h};
const fmt=n=>"$"+Number(n).toFixed(2)+" "+CUR;
const cart={get(){return JSON.parse(localStorage.getItem("cart")||"{}")},set(c){localStorage.setItem("cart",JSON.stringify(c));cart.badge()},add(r){const c=cart.get();c[r]=(c[r]||0)+1;cart.set(c)},count(){return Object.values(cart.get()).reduce((a,b)=>a+b,0)},badge(){document.querySelectorAll(".cc").forEach(e=>e.textContent=cart.count())}};
function shell(){document.querySelectorAll(".sn").forEach(e=>e.textContent=STORE_NAME);document.title=document.title.replace("STORE",STORE_NAME);cart.badge()}
document.addEventListener("DOMContentLoaded",shell);
