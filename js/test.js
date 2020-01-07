
window.addEventListener('error', function(e) {
    console.log(e);
    //alert("e : "+e);
    //alert("e.target : "+e.target);
}, true);


document.getElementById("tb1").addEventListener("click",test1);
document.getElementById("tb2").addEventListener("click",test2);
document.getElementById("tb4").addEventListener("click",test4);
document.getElementById("tb5").addEventListener("click",test5);

//inAppBrowserRef.addEventListener('loaderror', loadErrorCallBack);

var c=window.localStorage;

/*
function loadErrorCallBack(params) {

    $('#status-message').text("");

    var scriptErrorMesssage =
       "alert('Sorry we cannot open that page. Message from the server is : "
       + params.message + "');"

    inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);

    inAppBrowserRef.close();

    inAppBrowserRef = undefined;

}

function executeScriptCallBack(params) {

    if (params[0] == null) {

        $('#status-message').text(
           "Sorry we couldn't open that page. Message from the server is : '"
           + params.message + "'");
    }

}

*/



function test5()
{
	var inAppBrowserRef = cordova.InAppBrowser.open('http://www.investopedia.com/terms/s/stock.asp', '_blank', 'location=yes');
	
	
}

function test1()
{
    var temp,p;
    
    for(p=0;p<c.length;p++)
        {
            console.log(c.key(p));
        }
    
}


function test4()
{
var ch;
var wlink="https://www.investopedia.com/terms/s/stocks.asp";
var llink="https://www.investopedia.com/terms/s/";
    
            ch = parseInt(prompt("Enter the number corresponding to your choice : \n"+"\n 1. Investopedia "+wlink+"\n 2. Investopedia "+llink+"\n 3. Oxford "+"\n 8. You "+"\n 9. Some other source (you'll have to type it in the source field) \n",1));
            
            switch (ch)
                {//merging case 1 and 2 by getting the 404 response message from the webpage, later.
                    case 1 : 
                        //document.getElementById("sctextbox").value="Investopedia ";
                        //test5();
                        
                        window.open(wlink);
                        //window.location.href=wlink;
                        //window.location=wlink;
                        
                        
                        //break; //Yes! You can comment the break statement, so first case 1 will be evaluated, than case 2. Ahh... elegant! Not so elegant on android :(.
                        break;
                    case 2 : 
                        //document.getElementById("sctextbox").value="Investopedia ";
                        window.open(llink,"_my_blank");
                        break;
                    case 3 : 
                        alert("coming soon");
                        //window.location.href=wlink;
                        break;
                    case 4 : 
                        alert("coming soon");
                        //window.location.href=wlink;
                        break;
                    case 8 : 
                        document.getElementById("sctextbox").value="You ";
                        break;
                    case 9 : 
                        document.getElementById("sctextbox").focus();
                        break;
                    default:
                        alert("Invalid choice dude.");
                }

}


function test2()
{
    var temp,p;
    
    for(p=0;p<c.length;p++)
        {
            console.log(c.getItem(c.key(p)));
        }
}