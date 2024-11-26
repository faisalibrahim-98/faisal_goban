# How to launch the project

To start and launch tests:

1) Clone the repository.
2) Install Node in your computer (Download Node.exe online).
3) Go to /faisal_goban and run command npm i. (This will install relevant packages for test cases)
4) For test cases: npm run jest.


# Changes

1) I have converted the code into Typescript.
2) The convention of x being the column and y being the row is kept.
3) From my analysis on the examples provided in the read me. I was able to figure out that isTaken is a simple function that checks weather there is a free space available
from the prespective of a given stone. If space is not available it returns true, otherwise false.