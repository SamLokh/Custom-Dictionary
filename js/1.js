var k=window.localStorage;

k.setItem("temp0","flagnotset");
k.setItem("temp1","flagfrompg4notset");

document.getElementById("menu").addEventListener("click",dispMenu)
document.getElementById("exit").addEventListener("click",exi)

function exi()
{
	window.close();
}

function dispMenu()
{
	
}

/*
var wtbs1

document.getElementById("sbox1").addEventListener("blur",function(){
    wtbs1=this.value;
    wtbs1=wtbs1.toLowerCase();
});
document.getElementById("sbut1").addEventListener("click",function(){ search1(wtbs1); });

//search1 is general search

var a=window.localStorage;

function search1(wtbsl1)         // word to be searched local (wtbsl1)
        {   
            
            //alert("wtbs2 : "+wtbsl1);
            if(wtbsl1=="")
                {
                    alert("Please enter the word to be searched!");
                    document.getElementById("sbox1").focus();
                }
            else if(a.getItem(wtbsl1)==null || a.getItem(wtbsl1)=="")
                {
                    if(confirm("The word that you want to search does not exist in the database. So, do you want to add it?"))
                        {
                            //a.setItem("TEMP",wtbsl1);
                            
                            window.location.href="page2.html";
                            //alert("Page reloaded!");
                            //alert("TEMP = "+a.getItem("TEMP"));
                            //var tempp=a.getItem("TEMP");
                            //document.getElementById("wname").value=tempp;
                            //document.getElementById("wname").disabled="true";
                            //window.location.reload();
                            document.getElementById("wname").focus();
                        }
                    else
                        {
                            document.getElementById("sbox1").focus();
                        }
                }
            else    
                {
                    document.location.href="page3.html";
                }
        }
    
*/