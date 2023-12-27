  document.write("52.to get all the indexes where NaN is found in a given array of numbers and NaN."+"<br>");
    function test52(arr){
        var x=[];
        for(let i=0;i<arr.length;i++){
            if(isNaN(arr[i])){
                x.push(i);
            }
        }
        return x;
    }
    document.write("The array : [2, 4, NaN, 16, 32, NaN]"+"<br>")
    document.write(test52([2, 4, NaN, 16, 32, NaN])+"<br>");