
var l=window.localStorage;


var m5;
var mm5=0;
var ky5,res5;

window.onload=function(){
	for(m5=0;m5<l.length;m5++)
	{
		//alert("Hi");
		if(l.key(m5)=="temp0" || l.key(m5)=="temp1" || l.key(m5)=="temp2")
			{
				continue;
			}
		else if(document.getElementById("swordspara").innerHTML=="Hello")
			{	
				var st5=l.key(m5);
				console.log(l.key(m5));
				ky5=st5;
				var temp5=l.getItem(st5);
				var data5=JSON.parse(temp5);
				if(data5[1]==1)
				{
				mm5++;
				//st=mm+".  "+"\xa0"+st;
				res5=st5.link("./page3.html");
				res5=mm5+".  "+"\xa0"+res5;
				//st=" \n "+st+" \n ";
				document.getElementById("swordspara").innerHTML=res5+"<br>";
				}
				else
					{
						continue;
					}
			}
		else
			{
				var st5=l.key(m5);
				console.log(l.key(m5));
				ky5=st5;
				var temp5=l.getItem(st5);
				var data5=JSON.parse(temp5);
				if(data5[1]==1)
				{
				mm5++;
				//st=mm+".  "+"\xa0"+st;
				res5=st5.link("./page3.html");
				res5=mm5+".  "+"\xa0"+res5;
				//st=" \n "+st+" \n ";
				var temp=document.getElementById("swordspara").innerHTML;
				//temp=temp+" \n ";
				document.getElementById("swordspara").innerHTML=temp+res5+"<br>";
				}
				else
					{
						continue;
					}
			}
	}
	document.getElementById("s5").textContent=mm5;
}