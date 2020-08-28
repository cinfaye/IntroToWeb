//JavaScript
var num;
var lotNum = [];
var results = "";

do
{
    num = prompt("How many numbers?");
    if(num > 8 || num < 1) alert("Only choose 1-8! Jeez...")
}
while(num > 8 || num < 1);

for(i = 0; i < num; i++)
{
    lotNum[i] = Math.ceil(Math.random() * 99);
}

for(i = 0; i < lotNum.length; i++)
{
    if(i == lotNum.length - 1)
    {
        results = results + lotNum[i];
    }
    else
    {
        results = results + lotNum[i] + "-";
    }
}