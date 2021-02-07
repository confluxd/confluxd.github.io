const destination_data = [
	{"label":"Tower", "image":"images/destinations/tower.webp"}, 
	{"label":"EDZ", "image":"images/destinations/edz.webp"}, 
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

function updateCarousel(button, parent, name){
	let direction = 1;
	let end = 0;
	if(button === "button left") carousels[name] = shift_Left(carousels[name]);
	else if(button === "button right") {
		carousels[name] = shift_Right(carousels[name]);
		direction = -1;
	}

	const parents = parent.getElementsByClassName("destination");
	const buttons = parent.getElementsByClassName(button.split(" ")[0]);

	for(let b of buttons){
		b.disabled = true;
	}

	if(direction === 1){
		end = parents.length - 1;
	}

	parents[end].style["z-index"] = -1;

	const start = parents.length - 1 - end;

	parents[start].style["background-image"] = `url(${carousels[name][start]["image"]})`;
	
	for(let i = 0; i < parents.length; i++){
		if(i === end) continue;
		const parent_Width = parents[end].clientWidth;
		const img = parents[i].getElementsByTagName("img")[0];
		img.style["transition"] = `transform 0.5s ease-in-out`;
		img.style["transform"] = `translate3d(${direction*(parent_Width + 6)}px, 0, 0)`;
	}

	setTimeout(function(){
		for(let i = 0; i < parents.length; i++){
			const img = parents[i].getElementsByTagName("img")[0];
			img.style["transition"] = `transform 0s ease-in-out`;
			img.style["transform"] = `translate3d(0, 0, 0)`;
			img.src = carousels[name][i]["image"];
		}
		for(let b of buttons){
			b.disabled = false;
		}
		parents[start].style["background-image"] = "none";
	}, 500);
}