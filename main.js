
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

setInterval(updateClock, 1000);
window.onload = updateClock;

$(function(){
	var url = location.href;
	var query = location.search;
	if(query.slice(1) != ""){
		location.href=inflate(query.slice(1));
	}
	$('#url').keyup(function() {
		var input_url = $('#url').val();
		$("#shorturl").val(url + '?' + deflate(input_url));
	});
});

function clipboadCopy(string){
	var urltext = document.getElementById(string);
	urltext.select();
	document.execCommand("copy");
	alert("コピーしました");
}

// 圧縮関数
function deflate(val) {
    val = encodeURIComponent(val);
    val = RawDeflate.deflate(val);
    val = btoa(val); // base64エンコード
    return val;
}

// 復号関数
function inflate(val) {
    val = atob(val); // base64デコード
    val = RawDeflate.inflate(val);
    val = decodeURIComponent(val);
    return val;
}
