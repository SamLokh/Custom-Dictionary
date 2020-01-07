//document.getElementById("search3").addEventListener("click",search3);
var wtbs3

/*
document.getElementById("wname3").addEventListener("blur",function(){
    wtbs3=this.value;
    wtbs3=wtbs3.toLowerCase();
});
instead of a dynamic function like above, you were forced to write a separate static function for it beacuse you had to call the function somewherere*/
var k=window.localStorage;

document.getElementById("wname3").addEventListener("blur",upd);

window.onload=function(){
	if(k.getItem("temp1")=="flagfrompg4set")
		{
			document.getElementById("wname3").value=k.getItem("temp2");
			k.setItem("temp1","flagfrompg4notset");
			upd();
		}
}

function upd()
{
	wtbs3=document.getElementById("wname3").value;
    wtbs3=wtbs3.toLowerCase();
}


document.getElementById("search3").addEventListener("click",function(){ search3(wtbs3); });


document.getElementById("wname3").addEventListener("keyup",function(event){
	event.preventDefault();
	if(event.keyCode===13)
		{			
			upd();
			document.getElementById("search3").click();
		}
});            //that is when the enter key is pressed it will be clicking the search3 button



var b=window.localStorage;

/*
function search3()
{
    var wtbsl3=document.getElementById("wname3").value;
    wtbsl3=wtbsl3.toLocaleLowerCase();
    
    var w,m;
    
    
    
}
*/

function adjust3(){
			txt=document.querySelector("textarea");
			
			txt.style.width="100%";
			txt.style.height="100%";
		}

function search3(wtbsl3)         // word to be searched local (wtbsl3)
        {   
            alert('In the search3 function');
            alert("wtbs2 : "+wtbsl3);
			
			
			
            if(wtbsl3=="")
                {
                    alert("Please enter the word to be searched!");
                    document.getElementById("wname3").focus();
                }
            else if(b.getItem(wtbsl3)==null || b.getItem(wtbsl3)=="")
                {
                    if(confirm("The word that you want to search does not exist in the database. So, do you want to add it?"))
                        {
                            //b.setItem("TEMP",wtbsl3);
                            
                            document.location="page2.html";
                            //alert("Page reloaded!");
                            //alert("TEMP = "+b.getItem("TEMP"));
                            //var tempp=b.getItem("TEMP");
                            //document.getElementById("wname").value=tempp;
                            //document.getElementById("wname").disabled="true";
                            //window.location.reload();
                            document.getElementById("wname").focus();
                        }
                    else
                        {
                            document.getElementById("wname3").focus();
                        }
                }
            else                  //main dispaly of the meaning happening here : 
                {
                    var m=b.getItem(wtbsl3);
					
					var data=JSON.parse(m);
					
                    document.getElementById("dispmean").value=data[0];
					document.getElementById("dispmean").readOnly="true";
					//document.getElementById("dispmean").disabled="true";
                }
        }



/*
//Adding a link and showing a link

universal flag_case6=0;
universal flag_case7=0;
universal flag_case8=0;
universal flag_case9=0;
universal flag_case10=0;

function addlink()
{
    
    
    
    
    
    switch ch
        {
            case 1 : //default link1
                break;
            case 1 : //default link1
                break;
            case 1 : //default link1
                break;
            case 1 : //default link1
                break;
            case 1 : //default link1
                break;
            case 6 : 
                if(universal flag_case6==1)
                    show newly added link 
                else
                    //message : link not added yet
                break;
            case 7 : 
                if(universal flag_case7==1)
                    show newly added link 
                else
                    //message : link not added yet
                break;
            case 8 : 
                if(universal flag_case8==1)
                    show newly added link 
                else
                    //message : link not added yet
                break;
            case 9 : 
                if(universal flag_case9==1)
                    show newly added link 
                else
                    //message : link not added yet
                break;
            case 10 : 
                if(universal flag_case10==1)
                    show newly added link 
                else
                    //message : link not added yet
                break;
            
            default:
                //message : link no. limit exceeded 
        }
    
    
    
}

*/