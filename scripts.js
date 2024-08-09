



document.getElementById("no1").addEventListener("click", function(){
    document.getElementById("input").value += "1";
    try{
        document.getElementById("output").value = eval(document.getElementById("input").value)
    }
    catch(error)
    {}
})
document.getElementById("no2").addEventListener("click", function(){
    document.getElementById("input").value += "2";
    try{
        document.getElementById("output").value = eval(document.getElementById("input").value)
    }
    catch(error)
    {}
})
document.getElementById("no3").addEventListener("click", function(){
    document.getElementById("input").value += "3";
    try{
        document.getElementById("output").value = eval(document.getElementById("input").value)
    }
    catch(error)
    {}
})
document.getElementById("no4").addEventListener("click", function(){
    document.getElementById("input").value += "4";
    try{
        document.getElementById("output").value = eval(document.getElementById("input").value)
    }
    catch(error)
    {}
})
document.getElementById("no5").addEventListener("click", function(){
    document.getElementById("input").value += "5";
    try{
        document.getElementById("output").value = eval(document.getElementById("input").value)
    }
    catch(error)
    {}
})
document.getElementById("no6").addEventListener("click", function(){
    document.getElementById("input").value += "6";
    try{
        document.getElementById("output").value = eval(document.getElementById("input").value)
    }
    catch(error)
    {}
})
document.getElementById("no7").addEventListener("click", function(){
    document.getElementById("input").value += "7";
    try{
        document.getElementById("output").value = eval(document.getElementById("input").value)
    }
    catch(error)
    {}
})
document.getElementById("no8").addEventListener("click", function(){
    document.getElementById("input").value += "8";
    try{
        document.getElementById("output").value = eval(document.getElementById("input").value)
    }
    catch(error)
    {}
})
document.getElementById("no9").addEventListener("click", function(){
    document.getElementById("input").value += "9";
    try{
        document.getElementById("output").value = eval(document.getElementById("input").value)
    }
    catch(error)
    {}
})
document.getElementById("no0").addEventListener("click", function(){
    document.getElementById("input").value += "0";
    try{
        document.getElementById("output").value = eval(document.getElementById("input").value)
    }
    catch(error)
    {}
})
document.getElementById("no+").addEventListener("click", function(){
    document.getElementById("input").value += "+";
})
document.getElementById("no-").addEventListener("click", function(){
    document.getElementById("input").value += "-";
})
document.getElementById("no/").addEventListener("click", function(){
    document.getElementById("input").value += "/";
})
document.getElementById("no*").addEventListener("click", function(){
    document.getElementById("input").value += "*";
})
document.getElementById("no(").addEventListener("click", function(){
    document.getElementById("input").value += "(";
})
document.getElementById("no)").addEventListener("click", function(){
    document.getElementById("input").value += ")";
})
document.getElementById("back").addEventListener("click", function(){
    var express = document.getElementById("input").value
    express = express.slice(0,-1)
    document.getElementById("input").value = express
    try{
        var s1 = eval(document.getElementById("input").value)
        if(s1===undefined)
        {
            document.getElementById("input").value = ""
            document.getElementById("output").value = ""
        }
        else{
            document.getElementById("output").value = s1
        }
    }
    catch(error)
    {}
})

document.getElementById("no.").addEventListener("click", function(){
    document.getElementById("input").value += ".";
})
document.getElementById("clr").addEventListener("click", function(){
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
})
document.getElementById("no=").addEventListener("click", function(){
    try{
        var ex = eval(document.getElementById("input").value)
        if(ex === undefined)
        {
            document.getElementById("input").value = "";
            document.getElementById("output").value = "";
        }
        else
        {
            document.getElementById("input").value = ex
        }
    }
    catch(error)
    {
        document.getElementById("input").value = "Syntax Error"
    }
    document.getElementById("output").value = ""
})



