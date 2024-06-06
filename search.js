const searchwrapper = document.querySelector(".wrapper")
const inputbox = document.querySelector(".search-inp")
const suggbox = document.querySelector(".autocom-box")

inputbox.onkeyup = (e)=>{
    let userdata = e.target.value;
    let emptyArray = [];
    if(userdata){
        emptyArray = suggestion.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase());
     });
     emptyArray = emptyArray.map((data)=> {
        return data = '<li>' + data +'</li>';
     });
     console.log(emptyArray);
     searchwrapper.classList.add("active")   
     showsuggestions(emptyArray);
     let alllist = suggbox.querySelectorAll("li")
     for (let i = 0; i < alllist.length; i++){
        alllist[i].setAttribute("onclick", "select(this)")
     }
    }else{
        searchwrapper.classList.remove("active")
    }
}
function select(element){
    let selectuserdata = element.textContent;
    inputbox.value = selectuserdata;
}
function showsuggestions(list){
    let listdata;
    if(!list.length){
        uservalue = inputbox.value;
        listdata = '<li>'+ uservalue + '</li>';
    }
    else{
        listdata = list.join('');
    }
    suggbox.innerHTML = listdata;
}