#include <stdio.h>
#include <math.h>

int main()
{   int number;
    float i;
    printf("Enter a number to find sq root : ");
    scanf("%d",&number);
    for(i=0.01;i*i<number;i+=0.01);
        printf("%.2f",i);
    printf("\n%f",sqrt(number));
        
    return 0;
}
//
int main()
{
    int number;
    int i;
    int halfOfNumber;
    printf("Enter a number to find sq root : ");
    scanf("%d",&number);
    halfOfNumber=number/2;
    for(i=1;i<=halfOfNumber;i++){
        if(i*i==number){
            printf("Square root of %d is : %d ",number,i);
            break;
        }
    }
    if(i>halfOfNumber){
        printf("%d is not Perfect Square ",number);
    }
    return 0;
}
//Binary Search
//https://www.ideserve.co.in/learn/square-root-of-a-number
