const pub={
wang:(count)=>{
			 let pcount=Number(count);
			 if(pcount){
				 if(pcount/10000>1){
					 return (pcount/10000).toFixed(1)+'Íò';
				 }else{
					return pcount 
				 }
			 }
			   else{
				   return 0
			   }
		   },
		   secondFormact:(second)=>{
		   	var sec = second%60;
		   	var min = Math.floor(second/60);
		   	if(min.toString().length<2){
		   		min = '0'+min;
		   	}
		   	if(sec.toString().length<2){
		   		sec = '0'+sec;
		   	}
		   	return min+':'+sec
		   }
		   
		  
		   
		   
			   
}

export default pub
			   