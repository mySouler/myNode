 function changeNum(number,n){
	let newNum = 0
    let number1=number.toString().split(".");

    if(number1.length==1){ 
		
        newNum=number.toString()+"."+"0".repeat(n); 
        return a; 
    } 
    if(number1.length>=2){ 

        if(number1[1].length<n){  
            newNum=number.toString()+"0".repeat(n-number1[1].length); 
        }
        if(number1[1].length>n){
            newNum=number1[0]+"."+number1[1].substring(n,0);
        }
    	return newNum; 
    }
 }
