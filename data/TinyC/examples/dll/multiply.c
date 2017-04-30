#include <stdio.h>
 
int multiply(int, int);
 
__declspec(dllexport) int
multiply(int num1, int num2)
{
return num1 * num2;
}