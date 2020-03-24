function duplicateEncode(){
    var word = "Success"
    arr = Array.from(word.toLowerCase())
    console.log(arr)
    var result = "";
    var cntr=0;
    for(var i=0;i<arr.length;i++) 
    {   
        for(var j=0;j<arr.length;j++)
        {
            if(arr[i]==arr[j] && i != j)
                cntr=cntr+1;
        }
        if(cntr !=0)
            result = result + ')';
        else
            result = result + '(';   
        
        cntr=0;
    } 
    document.getElementById("resultTxt").value =  result;
}