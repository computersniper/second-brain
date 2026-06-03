---
tags:
  - course/se
  - se/use-case
  - se/diagram
  - exam/mcq
  - exam/drawing
  - Done-by-me
---
# Lec 11 Class exercise
IsTriangle function Specification: The lengths of three edges are used to decide if the three edges can form a triangle. If any of the length is less than or equals 0, output the warning information and return false. If the sum of two edges is less than or equals the third edge, they cannot form a triangle; otherwise, they can form a triangle. 
1) Please use the equivalence-class testing method to generate a set of test cases. Please also specify the subdomains that are obtained from the classification of the domain. 
2) Please generate the least number of test cases using statement testing, branch testing and path testing. The code is in the next slide.

``` C
BOOL IsTriangle (int a, int b, int c) 
{ 
	If (a <= 0 || b <= 0 || c <= 0) { 
		printf(“the lengths are out of range);
		return FALSE; 
	} 
	If ((a >= b + c) || (b >= a + c) || (c >= a + b)) { 
		printf(“It is not a triangle”); 
		return FALSE; 
	} 
	else { 
		printf(“It is a triangle”); 
		return TRUE; 
	} 
}
```

1. input domain: 

| Invalid Input     | <                | <                 | Valid Input                    |                               |
| ----------------- | ---------------- | ----------------- | ------------------------------ | ----------------------------- |
| All three <=0     | Two <= 0, One >0 | One <= 0, Two > 0 | sum of two edges <= third edge | sum of two edges > third edge |
| (-100,-100,-1000) | (100,-100,-1000) | (-100,100,1000)   | (3,4,1)                        | (3,4,5)                       |
2.  flow chart:
- statement testing 1
- branch testing 
- path testing