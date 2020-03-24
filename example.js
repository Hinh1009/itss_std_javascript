#!/usr/bin/env node

'use strict';

// このファイルを修正して、プルリクエストしてください。
arr = []

for(var i=2;i < process.argv.length;i++){
   arr.push(parseInt(process.argv[i])) 
}

for(var i=0; i <arr.length;i++){
    for(var j= i+1 ; j<arr.length;j++){
        if(arr[j]<arr[i]){
            var tmp = arr[i]
            arr[i] = arr[j]
            arr[j] = tmp
        }
    }
}

console.log(arr[Math.floor(arr.length/2)])
