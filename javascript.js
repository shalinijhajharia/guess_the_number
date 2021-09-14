function fuzz()
{
    var n=parseInt(document.getElementById("number1").value);
    String="";
    if(n%3===0 && n%5===0)
    {
        String="FIZZ BUZZ";
    }
    else if(n%5===0)
    {
        String="BUZZ";
    }
    else if(n%3===0)
    {
        String="FIZZ";
    }
    else
    {
        String=n;
    }
    document.getElementById("display").innerHTML=String;
}