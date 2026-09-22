

function addParagraph(){
        const para=document.createElement("p");
        para.innerText="This is new paragraph";
        para.style.color="Blue";
        const parent=document.getElementById("root");
        parent.appendChild(para);
    }
    const removeParagraph=()=>{
        const para=document.querySelector("p");
        const parent=document.getElementById("root");
        parent.removeChild(para);
    }
    const removeAllParagraphs=()=>{
        const para=document.querySelectorAll("p");
        const parent=document.getElementById("root");
        para.forEach((i)=>{
          parent.removeChild(i);
        })
    }