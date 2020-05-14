let href = ['https://petitegalerie.louvre.fr/visite-virtuelle/saison5/','http://www.chnmuseum.cn/Portals/0/web/vr/2018dtfh/',''];
let name = ['Лувр','Национальный <br>музей Китая','Токийский <br>национальный музей'];
let img = ['luvr.jpeg','chinanat.jpg','tokyonat.jpg'];
for(let i = 0; i < href.length; i++ ){
	document.getElementById("gal_row").innerHTML += "<div class='col col_ph'><div class = 'div_photo'><a class ='photo_t' href = " + href[i] + "><img class = 'photo' src=src/img/" +img[i]+ "><h3 class='img_descript'> Обзор</h3></a></div><div class='photo_text'><h2>"+name[i]+"</h2></div></div>";


