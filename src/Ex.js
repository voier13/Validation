import React from "react";

const Ex = () => {
    let myPromise = new Promise(function(myRosolve, myReject){
        myRosolve('hello');
        myReject('error');
    })



myPromise.then(
    function(value){
        console.log(value)
    },
function(error){
    console.log(error)
}
)

}
export default Ex;