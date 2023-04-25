function save(){
    const new_data=document.getElementById("username").value.trim();
    const new_data2=document.getElementById("password").value.trim();
        if(localStorage.getItem("data")==null){
        localStorage.setItem("data","[]");
    }
    const out_data=JSON.parse(localStorage.getItem("data"))
    out_data.push(new_data)
    out_data.push(new_data2);
    localStorage.setItem("data",JSON.stringify(out_data));
}