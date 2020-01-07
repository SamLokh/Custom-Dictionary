var wtbs2;
var star=0;


document.getElementById("sbutton").addEventListener("click",function(){
	star=1;
	alert("Starred!");
})

document.getElementById("addanothermean").addEventListener("click",addanotherm);
document.getElementById("simpleadd").addEventListener("click",add);
document.getElementById("wname").addEventListener("blur",getlink);
document.getElementById("wname").addEventListener("blur",showsource);
document.getElementById("back2").addEventListener("click",function(){
	document.location="./index.html";
});
var addflag=0;
/*document.getElementById("simpleadd").addEventListener("click",function(){
    // to set the simple add button flag
    addflag=1;
});
*/
//var wtbs2;

function check404()
{
	if(confirm("Press OK if you got the meaning/definition. Press Cancel if you got hit with the 404."))
		{
			return 1;
		}
	else
		{
			return 0;
		}
}


document.getElementById("wname").addEventListener("keyup",function(event){
	event.preventDefault();
	if(event.keyCode===13)
		{
			getlink();
			showsource();
		}
});            //that is when the enter click will be pressed it will be like focusout/blur



document.getElementById("sbox2").addEventListener("blur",function(){
    wtbs2=this.value;
    wtbs2=wtbs2.toLowerCase();
})
/*document.getElementById("sbox3").addEventListener("blur",function(){
    wtbs2=this.value;
})
*/


//var wtbs2=document.getElementById("sbox2").value;     //word to be searched (wtbs2);
//alert("wtbs2 : "+wtbs2);
document.getElementById("sbut2").addEventListener("click",function(){ search2(wtbs2); });

        var a=window.localStorage;
        
        var ii=0;

		function adjust2(){
			txt=document.querySelector("textarea");
			
			txt.style.width="100%";
			txt.style.height="100%";
		}

		

        function search2(wtbsl2)         // word to be searched local (wtbsl2)
        {   
            //wtbs2=document.getElementById("sbox2").value;
            //wtbs2=this.value;
            
            if(confirm("The current meaning that you added is not saved yet. So, do you want to save it and than search for this word?"))
                {
                    //You just copied the add function. You could have called the function, but than the last line would be undesirable.
                    //Now its okay, you added a flag which ofcourse saved the day, and now you can call the function.
                    
                    add();
                    addflag=1;
                    //No, you'll just have to copy it...
                    
                    
                }
            else
                {
                    
                }
            
            alert("wtbs2 : "+wtbsl2);
            if(wtbsl2=="")
                {
                    alert("Please enter the word to be searched!");
                    document.getElementById("sbox2").focus();
                }
            else if(a.getItem(wtbsl2)==null || a.getItem(wtbsl2)=="")
                {
                    if(confirm("The word that you want to search does not exist in the database. So, do you want to add it?"))
                        {
                            //a.setItem("TEMP",wtbsl2);
                            
                            window.location.reload();
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
                            document.getElementById("tarea").focus();
                        }
                }
            else    
                {
                    //var arr=[];
                    //for(var k=0;k<a.length;k++)
                        {
                            
                        }
                    
                    document.location.href="page3.html";
                }
        }
    
		
        function getlink()
        {
			//alert("Inside getlink");
            var name,fletter,llink,wlink;    //first_letter (fletter), letter_link (llink), word_link (wlink).
            name=document.getElementById("wname").value;
			name=name.toLowerCase();
            //alert("Word : "+name);
			//alert("First letter : "+name[0]);
            
            //if(name!="" && (a.getItem("temp0")!=null || a.getItem("temp0")!=undefined || a.getItem("temp0")!=""))
			if(name!="" && (a.getItem("temp0")=="flagnotset"))
                {
            fletter=name[0];
			fletter=fletter.toLowerCase();
            llink="https://www.investopedia.com/terms/"+name[0]+"/";
            //wlink="https://www.investopedia.com/terms/"+name[0]+"/"+"name"+".asp";
            wlink=llink+name+".asp";
            //e.g. : https://www.investopedia.com/terms/g/gain.asp
            //alert(wlink);
            //alert("https://www.investopedia.com/terms/"+name[0]+"/");
            
            var ch;
            ch = parseInt(prompt("Enter the number corresponding to your choice : \n"+"\n 1. Investopedia "+wlink+"\n 2. Investopedia "+llink+"\n 3. Oxford "+"\n 8. You "+"\n 9. Some other source (you'll have to type it in the source field) \n",1));
            
					
					//var ref=cordova.InAppBrowser;
					
            switch (ch)
                {//merging case 1 and 2 by getting the 404 response message from the webpage, later.
                    case 1 : 
                        document.getElementById("sctextbox").value="Investopedia ";
						a.setItem("temp0","flagset");
                        //window.open(wlink,"_my_blank");
						alert("In case 1");
						
						window.open(wlink,"_self");
						//ref.open(wlink,"_blank");
						//a.setItem("temp0","flagnotset");
						alert("Back from that website");
                        //document.getElementById("wname").readonly="true";
						//gotmeaning=check404();
						document.getElementById("wname").disabled="true";
						//break; //Yes! You can comment the break statement, so first case 1 will be evaluated, than case 2. Ahh... elegant! Not so elegant on android :(.
						alert("D1!");
                        break;
                    case 2 : 
                        document.getElementById("sctextbox").value="Investopedia ";
						a.setItem("temp0","flagset");
						alert("In case 2");
                        //window.open(llink,"_my_blank");
                        window.open(llink);
						
						//gotmeaning=check404();
						//document.getElementById("wname").readonly="true";
						document.getElementById("wname").disabled="true";
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
            
            //window.open('https://support.wwf.org.uk/earth_hour/index.php?type=individual','_blank');
            //window.location.href="https://www.investopedia.com/terms/g/";
					alert("D2!");
					
                }
			else
				{
					//alert("In else of if with switch in it");
					if(document.getElementById("wname").value!="" && document.getElementById("tarea").value!="")
					{
						alert("in if of else");
					document.getElementById("wname").disabled="true";
					a.setItem("temp0","flagnotset");
					}
					else
						{
							document.getElementById("wname").focus();
						}
				}
        }


        function addanotherm()
        {
            var temp,temp3;
            temp3="";
            temp=document.getElementById("wname").value;
            if(temp==temp3)
                {
                    alert("Please enter the word");
                    document.getElementById("wname").focus();
                }
            else
                {
					alert("Inside the else of addanotherm.");
					a.setItem("temp0","flagnotset");
					getlink();
					//add();
					
            //var source=prompt("Please enter the source for the meaning that you just entered","You");
            //source=source+" : \n";
            //var someaning=source+document.getElementById("tarea").value;  //i.e. the meaning with source
            
            temp=document.getElementById("sctextbox").value;
            temp=temp+" : \n";
            
            var someaning=temp+document.getElementById("tarea").value;
            
            someaning=someaning+"\n\n"+"*****\n"+"\n";
            
            var updatedmeaning;
            var word=document.getElementById("wname").value;
            word=word.toLowerCase();
            
            var previous=a.getItem(word);
            
            if(previous!=null )//&& a==0)  //i.e. there is already an entry with the name word in local storage
               {    
                    //alert("There already exists a meaning for this word.");
                    updatedmeaning=previous+someaning;
				   	var arr=[updatedmeaning,star];
                    a.setItem(word,JSON.stringify(arr));
				   	star=0;
               }
            else    //i.e. if your are adding this word for the first time.
                {
					var arr=[someaning,star];
                    a.setItem(word,JSON.stringify(arr));
                }
            
            document.getElementById("tarea").value="";
            document.getElementById("sctextbox").value="";
            //getsource();
            
            document.getElementById("tarea").focus();
            //getlink();
            
        }
        }
        
        function add()
        {
            
            var temp,temp3;
            temp3="";
            temp=document.getElementById("wname").value;
            if(temp==temp3)
                {
                    alert("Please enter the word");
                    document.getElementById("wname").focus();
                }
            else
                {
                    
            temp=document.getElementById("sctextbox").value;
            temp=temp+" : \n";
            
            var someaning=temp+document.getElementById("tarea").value;
            
            someaning=someaning+"\n\n"+"*****\n"+"\n";
            
            var updatedmeaning;
            var word=document.getElementById("wname").value;
            word=word.toLowerCase();
            
            var previous=a.getItem(word);
            
            if(previous!=null )//&& a==0)  //i.e. there is already an entry with the name word in local storage
               {    
                    //alert("There already exists a meaning for this word.");
                    updatedmeaning=previous+someaning;
				   	var arr=[updatedmeaning,star];
                    a.setItem(word,JSON.stringify(arr));
				   	star=0;
               }
            else    //i.e. if your are adding this word for the first time.
                {
					var arr=[someaning,star];
                    a.setItem(word,JSON.stringify(arr));
                }
            
            if(addflag==0)
                {
                    document.location="./index.html";  //*** very important
                    //addflag=0;
            //document.getElementById("tarea").value="";
            //getsource();
                }
        }
        }
        
        
        
        
        
        
        
        
                var i=0;
                var j=0;
                //document.getElementById("wname").addEventListener("onfocusout"showsource);
                function getsource()
                {   
                    
                    
                    //Very important testing : 
                    //Difference between null and blank character.
                    
                    
                    
                    var temp,temp2,temp3;
                    temp2=null;
                    temp3="";
            temp=document.getElementById("wname").value;
                    //alert("temp (i.e. wname) : "+temp);
                    //alert("temp2 : "+temp2);
                    //alert("temp3 : "+temp3);
            if(temp==temp3)
                {
                    alert("Please enter the word");
                    document.getElementById("wname").focus();
                }
                    else
                {                    
                    var sc=prompt("Please enter the source of the meaning that you are about to enter, for e.g. investopedia, oxford dictionary, some link, etc.","You");
                    sc=sc+" \n";
                    document.getElementById("sctextbox").value=sc;
                }
                }
                
                function showsource()
                    {   
                        if(i==0)
                        {
                            if(document.getElementById("wname").value!="")
                            {
                            document.getElementById("hiddenp").style.visibility="visible";
                            document.getElementById("sctextbox").style.visibility="visible";
                            if(document.getElementById("sctextbox").value=="")
                               {
                                getsource();
                               }
                                i=1;
                            }
                            
                            if(document.getElementById("wname").value!="")
                            //if(document.getElementById("wname").value!="" && document.getElementById("tarea").value!="")
                                {
                                document.getElementById("wname").disabled="true";
                                //document.getElementById("wname").readOnly="true";
                                }
                            else
								{
                                document.getElementById("wname").focus();
									//document.getElementById("tarea").focus();
								}
                            //i=1;
                        }
                    }
                
                function once()
                    {
                        //alert("Hello 2");
						alert("D3!");
                        if(j==0)
                            {   //alert("Hello 3");
                                
                                document.getElementById("hiddenp").style.visibility="hidden";
                                document.getElementById("sctextbox").style.visibility="hidden";
                                //document.getElementById("wname").focus();
                                j=1;
                            }
						adjust2();
						
						if(a.getItem("temp0")=="flagset")
							{
								var gotmeaning;
								alert("Page reloaded after returning from the website.")
								gotmeaning=check404();
								if(gotmeaning==0)
									{
										a.setItem("temp0","flagnotset");
										window.location.reload();
									}
							}
							
						
                    }
        
        