let str = "Clash Of Code";
let s=0;
let code=0;
for(let i=0;i<str.length;i++)
		{
code=str.charCodeAt(i)%32;
			if(str[i]>="a" && str[i]<="z"){
				//code=str.charCodeAt(i)-96;
                s+=code;
			}else if(str[i]>="A" && str[i]<="Z")
			{
				//code=str.charCodeAt(i)-64;
                s+=code*2;
            }

		}
        let res=s.toString();
        let addZero=6-res.length;
        if(res.length<6){
            for(let i=0;i<addZero;i++){
                res+="0";
            }
        }else
        {
            if(res.length>6){
                res=res.substring(0,6);
            }
        }
