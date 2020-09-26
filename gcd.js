function gcd(x,y){
	if(x==0 || y==0)
		return 0;
	if(x==y)
		return x;
	if(x>y)
		return gcd(x-y,y);
	else
		return gcd(x,y-x);
}
// Greatest Common Divisor 
