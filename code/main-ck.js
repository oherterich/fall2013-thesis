function getHashValue(e){return location.hash.split("=")[1]}var clientid="3a4831a9152845bcb5caa94f713a8d00",redirectURL="http://macaroni.local/GradSchool/Thesis/fall2013-thesis/code/",authURL="https://api.instagram.com/oauth/authorize/?client_id="+clientid+"&redirect_uri="+redirectURL+"&response_type=token",instagramLogin=document.querySelector("#connect-link");instagramLogin.href=authURL;var hash=getHashValue("hash");console.log("access token: "+hash);var beginButton=document.querySelector("#begin-link"),login=document.querySelector("#login-hidden");beginButton.addEventListener("click",function(e){login.id="login-visible"});var exitButton=document.querySelector("#exit-button");exitButton.addEventListener("click",function(e){login.id="login-hidden"});$(document).ready(function(){function t(){}function r(){var t="https://api.instagram.com/v1/users/"+e+"/media/recent?access_token="+hash;$.ajax({url:t,dataType:"jsonp",success:function(e){$.ajax({type:"POST",url:"savePhotos.php",dataType:"jsonp",data:e}).always(function(e){window.location="three.html"})}})}var e="",n="https://api.instagram.com/v1/users/self/?access_token="+hash;$.ajax({url:n,dataType:"jsonp",success:function(t){e=t.data.id},complete:function(){r()}})});