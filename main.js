var n,b,a=0;
n=parseInt(prompt("Enter the n value"));
for(i=1;n>0;i++){
    b=n%10;
    a=b+a;
    n=n-b;
    n=n/10;

}
document.write("sum of a number= "+a );