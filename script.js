let city = document.querySelector('select[name="city"]');
let shop = document.getElementById('shop');
let employee = document.getElementById('employee');
let team = document.getElementById('team');
let shift = document.getElementById('shift');
let json = document.getElementById('json');

const cities = {
	Almaty: ["Цех #1 Almaty", "Цех #2 Almaty", "Цех #3 Almaty"],
	Astana: ["Цех #1 Astana", "Цех #2 Astana", "Цех #3 Astana"],
	Shymkent: ["Цех #1 Shymkent", "Цех #2 Shymkent"],
	Karagandy: ["Цех #1 Karagandy", "Цех #2 Karagandy"]
}
  
const shops = {
	"Цех #1 Almaty": ["Marat", "Kanat"],
	"Цех #2 Almaty": ["Kaisar", "Bekzat"],
	"Цех #3 Almaty": ["Aibek", "Zhandos"],
	"Цех #1 Astana": ["Kirill", "Shinar"],
	"Цех #2 Astana": ["Lyazzat", "Ilias"],
	"Цех #3 Astana": ["Askar", "Serik"],
	"Цех #1 Shymkent": ["Bauirjan", "Sauran"],
	"Цех #2 Shymkent": ["Erbol", "Almaz"],
	"Цех #1 Karagandy": ["Nurlan", "Sheri"],
	"Цех #2 Karagandy": ["Islam", "Darkhan"],
}

let obj = {};
let arrCity = [];
let arrShop = [];
 
city.onchange = function(event) {
	obj = {};
	shop.value = '';
	employee.value = '';
	team.value = '';
	shift.value = '';
	arrCity = cities[city.value];
	let el = document.getElementById('shop');
	el.innerHTML = "<option selected disabled>Выберите цех</option>"; 
	for (let i = 0; i < arrCity?.length; i++) {
		let opt = document.createElement("option");
		opt.innerHTML = arrCity[i];
		el.appendChild(opt);
	}
	obj["Город"] = event.target.value;
};

shop.onchange = function(event) {
	delete obj["Сотрудник"];
	delete obj["Бригада"];
	delete obj["Смена"];
	employee.value = '';
	team.value = '';
	shift.value = '';
	arrShop = shops[shop.value];
	let el = document.getElementById('employee');
	el.innerHTML = "<option selected disabled>Выберите сотрудника</option>"; 
	for (let i = 0; i < arrShop?.length; i++) {
		let opt = document.createElement("option");
		opt.innerHTML = arrShop[i];
		el.appendChild(opt);
	}
	obj["Цех"] = event.target.value;
};

employee.onchange = function (event) {
	obj["Сотрудник"] = event.target.value;
};

team.onchange = function (event) {
	obj["Бригада"] = event.target.value;
};
shift.onchange = function (event) {
	obj["Смена"] = event.target.value;
};


function setCookie(name, data, days) {
  const expireDate = new Date();
  expireDate.setTime(expireDate.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + expireDate.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(data) + ";" + expires + ";path=/";
}

json.onclick = function () {
	console.log(obj);
	const cookieName = "myCookie";
	const expireDays = 1
	let jsonData = JSON.stringify(obj);
	setCookie(cookieName, jsonData, expireDays);
	console.log(document.cookie);
}
