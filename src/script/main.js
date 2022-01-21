function myFunction() {
    document.getElementById("me").innerHTML = "";
    var li = document.createElement("li");
    var x = document.getElementById("myText").value;
    var t = document.createTextNode(x);
    li.id = "list";
    li.appendChild(t);
    if (x === '') {
        document.getElementById("me").innerHTML = "please enter a value";
    } else {
        let demo = document.getElementById("demo");

        li.textContent = x;
        demo.appendChild(li);
        demo.insertBefore(li, demo.childNodes[0]);
    }
    //close
    document.getElementById("myText").value = "";

    var span = document.createElement("button");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    //add
    document.getElementById("myText").value = "";

    var span = document.createElement("button");
    var txt = document.createTextNode("✔");
    span.className = "edit";
    span.appendChild(txt);
    li.appendChild(span);

    var edit = document.getElementsByClassName("edit");
    var reenter = document.getElementsByClassName("rename");

    var i;
    for (i = 0; i < edit.length; i++) {
       
        edit[i].addEventListener("click", function () {
         this.parentElement.classList.add('li')
         this.parentElement.childNodes[3].disabled = true;
         this.parentElement.style.backgroundColor = "gray";
        })
    }
    var i;
    for (i = 0; i < edit.length; i++) {
       
        edit[i].addEventListener("dblclick", function () {
         this.parentElement.classList.remove('li')
         this.parentElement.childNodes[3].disabled = false;
         this.parentElement.style.backgroundColor = "ghostwhite";
        })
    }

    //edit
    var span = document.createElement("button");
    var txt = document.createTextNode("+");
    span.className = "rename";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < reenter.length; i++) {
        reenter[i].addEventListener("click", function () {
            document.querySelector('#myText').value = this.parentElement.childNodes[0].textContent;
            this.parentElement.innerText = this.parentElement.remove();
        });
    }


}

//delete

var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
    var span = document.createElement("button");
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    list[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}
//add
var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
    var span = document.createElement("button");
    var txt = document.createTextNode("✔");
    span.className = "edit";
    span.appendChild(txt);
    list[i].appendChild(span);
}
var edit = document.getElementsByClassName("edit");
    var reenter = document.getElementsByClassName("rename");

    var i;
    for (i = 0; i < edit.length; i++) {
       
        edit[i].addEventListener("click", function () {
         this.parentElement.classList.add('li')
         this.parentElement.childNodes[3].disabled = true;
         this.parentElement.style.backgroundColor = "gray";
        })
    }
    var i;
    for (i = 0; i < edit.length; i++) {
       
        edit[i].addEventListener("dblclick", function () {
         this.parentElement.classList.remove('li')
         this.parentElement.childNodes[3].disabled = false;
         this.parentElement.style.backgroundColor = "ghostwhite";
        })
    }

//edit
document.getElementById("myText").value = "";
var list = document.getElementsByTagName("LI");
var i;
for (i = 0; i < list.length; i++) {
    var span = document.createElement("button");
    var txt = document.createTextNode("+");
    span.className = "rename";
    span.appendChild(txt);
    list[i].appendChild(span);
}

var reenter = document.getElementsByClassName("rename");
var i;
for (i = 0; i < reenter.length; i++) {
    reenter[i].addEventListener("click", function () {
        document.querySelector('#myText').value = this.parentElement.childNodes[0].textContent;
        this.parentElement.innerText = this.parentElement.remove();
    });

}

