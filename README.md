# How to launch the project

To start and launch tests:

1) Clone the repository.
2) Install Node in your computer (Download Node.exe online).
3) Go to /faisal_goban and run command npm i. (This will install relevant packages for test cases)
4) For test cases: npm run jest.


# Changes

1) I have converted the code into Typescript.
2) The convention of x being the column and y being the row is kept.
3) The function hasFreedom cheecks the corresponding values to see weather a stone of same color is found and has libety. If it find one then it return false. other wise it looks at all other options and finally returns false.