function getHashValue(e){return location.hash.split("=")[1]}var clientid="3a4831a9152845bcb5caa94f713a8d00",redirectURL="http://macaroni.local/GradSchool/Thesis/Fall_FinalPresentation/code/",authURL="https://api.instagram.com/oauth/authorize/?client_id="+clientid+"&redirect_uri="+redirectURL+"&response_type=token",instagramLogin=document.querySelector("a");instagramLogin.href=authURL;console.log(instagramLogin.href);var hash=getHashValue("hash");console.log("access token: "+hash);$(document).ready(function(){function t(){}function r(){var t="https://api.instagram.com/v1/users/"+e+"/media/recent?access_token="+hash;$.ajax({url:t,dataType:"jsonp",success:function(e){$.ajax({type:"POST",url:"savePhotos.php",dataType:"jsonp",data:e})}})}var e="",n="https://api.instagram.com/v1/users/self/?access_token="+hash;$.ajax({url:n,dataType:"jsonp",success:function(t){e=t.data.id;console.log(e)},complete:function(){r()}})});