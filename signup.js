function save(){
    const new_data=document.getElementById("fulln").value.trim();
    const new_data2=document.getElementById("email").value.trim();
    const new_data3=document.getElementById("usern").value.trim();
    const new_data4=document.getElementById("pass").value.trim();
        if(localStorage.getItem("data")==null){
        localStorage.setItem("data","[]");
    }
    const out_data=JSON.parse(localStorage.getItem("data"))
    out_data.push(new_data)
    out_data.push(new_data2)
    out_data.push(new_data3)
    out_data.push(new_data4);
    localStorage.setItem("data",JSON.stringify(out_data));
}