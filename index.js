const destination_data = [
	{"label":"Tower", "image":"images/destinations/tower.webp"}, 
	{"label":"Edz", "image":"images/destinations/edz.webp"}, 
	{"label":"Cosmodrome", "image":"images/destinations/cosmodrome.webp"}, 
	{"label":"Nessus", "image":"images/destinations/nessus.webp"}, 
	{"label":"Dreaming City", "image":"images/destinations/dreamingcity.webp"}, 
	{"label":"Tangled Shore", "image":"images/destinations/tangledshore.webp"}, 
	{"label":"Moon", "image":"images/destinations/moon.webp"}, 
	{"label":"Europa", "image":"images/destinations/europa.webp"}
];

const dungeon_data = [
    {"label":"Shattered Throne", "image":"images/destinations/shatteredthrone.webp"}, 
	{"label":"Pit of Heresy", "image":"images/destinations/pitofheresy.webp"},
	{"label":"Prophecy", "image":"images/destinations/prophecy.webp"}
];

const carousels = {
	"destination": destination_data,
	"dungeon": dungeon_data
}

function shift_Left(a){
	let temp = a[a.length - 1];
	a.pop();
	a.unshift(temp);
	return a;
}

function shift_Right(a){
	let temp = a[0];
	a.shift();
	a.push(temp);
	return a;
}

function updateCarousel(button, parent){
	if(button === "buttonleft") carousels[parent] = shift_Left(carousels[parent]);
	else if(button === "buttonright") carousels[parent] = shift_Right(carousels[parent]);

	let parents = document.getElementsByName(parent);

	for(let i = 0; i < parents.length; i++){
		parents[i].getElementsByTagName("p")[0].innerText = carousels[parent][i]["label"];
		parents[i].getElementsByTagName("img")[0].src = carousels[parent][i]["image"];
	}
}