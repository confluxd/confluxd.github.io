let destination_data = [
	{"destinationlabel":"Tower", "destinationimage":"images/tower.jpg"}, 
	{"destinationlabel":"Edz", "destinationimage":"images/edz.jpg"}, 
	{"destinationlabel":"Cosmodrome", "destinationimage":"images/cosmodrome.jpg"}, 
	{"destinationlabel":"Nessus", "destinationimage":"images/nessus.jpg"}, 
	{"destinationlabel":"Dreaming City", "destinationimage":"images/dreamingcity.jpg"}, 
	{"destinationlabel":"Tangled Shore", "destinationimage":"images/tangledshore.jpg"}, 
	{"destinationlabel":"Moon", "destinationimage":"images/moon.jpg"}, 
	{"destinationlabel":"Europa", "destinationimage":"images/europa.jpg"}
];

function shift_Right(a){
	let temp = a[a.length - 1];
	a.pop();
	a.unshift(temp);
	return a;
}

function shift_Left(a){
	let temp = a[0];
	a.shift();
	a.push(temp);
	return a;
}

function update_dest(id){
	if(id === "left") destinations_ = shift_Left(destination_data);
	else destinations = shift_Right(destination_data);

	let parents = document.getElementsByClassName("destination");

	for(let i = 0; i < parents.length; i++){
		parents[i].getElementsByClassName("destinationlabel")[0].innerText = destination_data[i]["destinationlabel"];
		parents[i].getElementsByClassName("destinationimage")[0].src = destination_data[i]["destinationimage"];
	}
}
