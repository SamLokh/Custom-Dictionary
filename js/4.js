
var l=window.localStorage;


/*
document.addEventListener("onload",function(){
for(var m=0;m<l.length;m++)
	{
		alert("Hi");
		if(l.key(m)=="temp0")
			{
				continue;
			}
		else
			{	
				var st=l.key(m);
				console.log(l.key(m));				document.getElementById("wordspara").innerHTML=st+"<br>";
			}
	}
})
*/
var m;
var mm=0;
var ky,res;

window.onload=function(){
	for(m=0;m<l.length;m++)
	{
		//alert("Hi");
		if(l.key(m)=="temp0" || l.key(m)=="temp1" || l.key(m)=="temp2")
			{
				continue;
			}
		else if(document.getElementById("wordspara").innerHTML=="Hello")
			{	
				var st=l.key(m);
				console.log(l.key(m));
				ky=st;
				mm++;
				//st=mm+".  "+"\xa0"+st;
				res=st.link("./page3.html");
				res=mm+".  "+"\xa0"+res;
				//st=" \n "+st+" \n ";
				document.getElementById("wordspara").innerHTML=res+"<br>";
			}
		else
			{
				var st=l.key(m);
				console.log(l.key(m));
				ky=st;
				mm++;
				//st=mm+".  "+"\xa0"+st;
				res=st.link("./page3.html");
				res=mm+".  "+"\xa0"+res;
				//st=" \n "+st+" \n ";
				var temp=document.getElementById("wordspara").innerHTML;
				//temp=temp+" \n ";
				document.getElementById("wordspara").innerHTML=temp+res+"<br>";
			}
	}
	document.getElementById("s4").textContent=mm;
}