const i = document.getElementById('t');
const c = document.getElementById('count');
i.addEventListener('input', (e)=>{
    c.textContent = e.target.value.length; 
});