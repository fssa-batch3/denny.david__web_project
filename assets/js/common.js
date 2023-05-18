
let profile_img = document.getElementsByClassName("profile_img")
console.log(profile_img);
profile_img[0].addEventListener("click",()=>{
if (localStorage.getItem("profile_details")){
    console.log("idf");
    window.location.href="profile.html"
}
else {
    console.log("ght");
    window.open("signup.html")
}
})

// let exercises = document.getElementsByClassName("exercises")
// exercises[0].addEventListener("click",e=>{
//     if(localStorage.length == 0){
//       window.location.href="signup.html"
//     }
//     else{
//         window.location.href="exercise.html"
//   }
// }
//    )