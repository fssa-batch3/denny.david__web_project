
let profile_img = document.getElementById("profile_img")
console.log(profile_img);
profile_img.addEventListener("click",()=>{
if (localStorage.getItem("profile_details")){
    console.log("idf");
    window.location.href="profile.html"
}
else {
    console.log("ght");
    window.open("signup.html")
}
})