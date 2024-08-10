let os=document.getElementById('os')

function Clear()
{
os.value="0"
}
function del()
{
    os.value=os.value.slice(0,-1)
}
function display(txt)
{
    os.value=os.value+txt;
    console.log(os.value);
}
function calc()
{
    os.value=eval(os.value);
}



function square()
{
    let a=prompt ('Enter breath');
    let b=prompt ('Enter height');
   
    let res= 0.5*a*b;
   alert (`The result is: ${res}`);

}

function emi()
{
    let a1=prompt ('Enter your emi amount');
    let a2=prompt ('Enter your emi total no of month');
   
    let res= a1*a2;
   alert (`your total emi amount is: ${res}`);

}
function gst()
{
    let b1=prompt ('Enter your quantity');
    let b2=prompt ('Enter your rate');
    let b3=prompt ('Enter your GST Amount');

    let res= b1*b2+b3/100*100;
   alert (`your total amount is: ${res}`);

}
function int()
{
    let c1=prompt ('Enter your loan amount');
    let c2=prompt ('Enter your intrest rate');
    let c3=prompt ('Enter your total month');

    let res= c1*c2/100*c3;
   alert (`your total amount is: ${res}`);

}
