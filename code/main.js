var clientid = "3a4831a9152845bcb5caa94f713a8d00";
var redirectURL = "http://macaroni.local/GradSchool/Thesis/Fall_FinalPresentation/code/";
var authURL = "https://api.instagram.com/oauth/authorize/?client_id=" + clientid + "&redirect_uri=" + redirectURL + "&response_type=token";

var instagramLogin = document.querySelector('a');

instagramLogin.href = authURL;

console.log(instagramLogin.href);

function getHashValue(key) {
  return location.hash.split('=')[1];
}

// usage
var hash = getHashValue('hash');
console.log("access token: " + hash);

$(document).ready(function(){

	var userid = "";

	function getUserId() {

	}

	var URL = "https://api.instagram.com/v1/users/self/?access_token=" + hash;
	$.ajax({
		url : URL,
		dataType : "jsonp",
		success : function(parsed_json) {
			userid = parsed_json['data']['id'];
			console.log(userid);
		},
		complete : function() {
			getUserPhotos();
		}
	});

	//getUserId();
	
	 function getUserPhotos() {
	 	var URL = "https://api.instagram.com/v1/users/" + userid + "/media/recent?access_token=" + hash;
		$.ajax({
			url : URL,
			dataType : "jsonp",
			success : function(parsed_json) {
				$.ajax({
					type : "POST",
					url : "savePhotos.php",
					dataType : "jsonp",
					data : parsed_json
				});
			}
		});
	}
});
