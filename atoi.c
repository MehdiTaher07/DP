#include <stdio.h>
int ascii(char c){
    return c-48;
}
int main()
{
    char nombre[3]="123";
    int length=sizeof(nombre)/sizeof(nombre[0]);
    int help,d=1;
    int n=0;
    while(length!=0){
        help=ascii(nombre[length-1]);
        help=help*d;
        d*=10;
        length--;
        n+=help;
    }
    printf("%d",n);
    return 0;
}
