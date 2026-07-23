// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

// Example 1:
// Input: temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]

// Example 2:
// Input: temperatures = [30,40,50,60]
// Output: [1,1,1,0]

// Example 3:
// Input: temperatures = [30,60,90]
// Output: [1,1,0]
 

// Constraints:
// 1 <= temperatures.length <= 105
// 30 <= temperatures[i] <= 100


// ---------------------- My Solution ----------------------------------
// This uses a monotonic stack 
// https://www.youtube.com/watch?v=Dq_ObZwTY_Q
// The idea is to loop through temperatures and at each point, store the [temp, index position] in a stack but only if the current temp value is less than last stored temp val in stack or the stack in empty. 
// This makes stack monotonic, (high to low), every new temperature added is less than or equal to prev one. 
// Incase we reach a temp which is higher than prev highest stored temp val in stack, then we can start a loop to start poping through the stack. We can subtract the index position stored in stack from current i to get and store res in output array at same index position. 
// we already filled the output array with 0 at initialization, so any leftovers which don't have a higher temperature are always zero. 


function dailyTemperatures(temperatures: number[]): number[] {
         
         const monoStack : [number, number][] = []
         const output : number[] = Array(temperatures.length).fill(0)

         for (let i = 0; i < temperatures.length; i++) {
              
              if (monoStack.length == 0 || monoStack[monoStack.length-1][0] >= temperatures[i]) {
                      monoStack.push([temperatures[i], i])
              }
              else {
                  while (monoStack.length != 0 && monoStack[monoStack.length-1][0] < temperatures[i]) 
                    {
                        const value = monoStack.pop()
                        const idx = value[1]
                        const res = i - idx 
                        output[idx] = res 
                    }
                    monoStack.push([temperatures[i], i])
              }
         }

           return output
    }