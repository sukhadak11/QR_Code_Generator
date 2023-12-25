function genQr() {
    var gApi="https://chart.googleapis.com/chart?cht=qr&chs=";
    var myImg=document.getElementById("img");
    var mySize=document.getElementById("size").value;
    var myText=document.getElementById("qrtext").value;

    if (myText!="" && mySize=="100") {
        myImg.src=gApi+"100x100"+"&chl="+myText;
    }

    else if (myText!="" && mySize=="150") {
        myImg.src=gApi+"150x150"+"&chl="+myText;
    }

    else if (myText!="" && mySize=="200") {
        myImg.src=gApi+"200x200"+"&chl="+myText;
    }

    else if (myText!="" && mySize=="250") {
        myImg.src=gApi+"250x250"+"&chl="+myText;
    }

    else if (myText!="" && mySize=="300") {
        myImg.src=gApi+"300x300"+"&chl="+myText;
    }

    else {
        alert("Enter Text!");
    }

}