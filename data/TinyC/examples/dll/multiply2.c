#include <stdio.h>
 
float multiply(float, float);
 
__declspec(dllexport) float
multiply(float num1, float num2)
{
return num1 * num2;
}