let myNodelist = document.getElementsByTagName("LI");

function closeMyDiv() {
    var div = this.parentElement;
    div.style.display = "none";
  };

for (const x in myNodelist)
{
	
	 if(x==0 || parseInt(x)){
	const span=document.createElement("BUTTON");
	const txt=document.createTextNode("\u00D7");
	span.className="close";
	span.appendChild(txt);
	/*span.onclick= */
  span.onclick=closeMyDiv;
	myNodelist[x].appendChild(span);
	}
}



function todolist(){
	let item= document.getElementById("todoInput").value;


	let text= document.createTextNode(item)

	let li= document.createElement("li")


	 li.appendChild(text);
	 document.getElementById("myUL").appendChild(li);
document.getElementById("todoInput").value="";


let span=document.createElement("BUTTON");
let txt= document.createTextNode("\u00D7");
 span.className= "close";
 span.appendChild(txt);

  span.onclick=closeMyDiv;
 li.appendChild(span);

	}



