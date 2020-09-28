#include <stdio.h>

int modulo(x1,x2)
{
    if(x1<x2){
        return x1;
    }else{
        int m=x2,r;
        while(m<=x1)
            m+=x2;
        m-=x2;
        r=x1-m;
        return r;
    }
}
int main()
{
    int x1=123,x2=10;
    printf("modulo(%d,%d)=%d",x1,x2,modulo(x1,x2));
    return 0;
}
