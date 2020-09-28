#include <stdio.h>
int main()
{   char str[100],maxRepeatedChar;
    printf("Enter string : ");
    scanf("%s",str);
    int i,j;
    int count,maxCount;
    for(i=0;str[i];i++)
    {
        count=0;
        for(j=0;str[j];j++)
        {
            if(str[i]==str[j])
                 count++; 
        }
        if(maxCount<count)
        {
            maxCount=count;
            maxRepeatedChar=str[i];
        }
    }
    printf("%s has %c %d times",str,maxRepeatedChar,maxCount);
    return 0;
}
