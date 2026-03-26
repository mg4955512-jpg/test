async function CopyElement(button){
    let parent = button.parentElement;
    let p = parent.querySelector("p");
    try{
        await window.navigator.clipboard.writeText(p.innerText);
        console.log("Content is successfully copied")
    }
    catch(error){
        console.log(error.message);
    }
}


window.navigator.clipboard.readText()