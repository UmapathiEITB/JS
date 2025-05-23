async function get(r){
    try{
        const res = await fetch(r);
        const result = await res.json();
    }catch(err){
        console.error("Fetch Error:", err);
    }
}

get('https://*******');