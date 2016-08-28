
export default function request(url='http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html?from=toutiao&fn=1&prog=LMA1&passport=wDCwGITrsPB%2BT81pMWafLJ%2F1fey5Sa%2FQ00N2W1cP2zkkjghnvXgObCGLOzPAdXnhrqJv2nCCD2QqQsfBWgSZWQ%3D%3D&devId=GrXAv38vvmwPN7twgRZnIOP4j7B9KGp4xt6S0K0kfQP2aFXfgQE90Se7ttFblvIT&offset=0&size=20&version=14.0&spever=false&net=wifi&lat=&lon=&ts=1471530079&sign=iabrVm5sAuOcToDtp%2BvzvJ2RYGuiq7cK%2Bf3GyVm2d2R48ErR02zJ6%2FKXOnxX046I&encryption=1&canal=appstore') {
	return new Promise((resolve, reject) => {
		fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((jsonData) => {
			resolve(jsonData);
		})
		.catch((error) => {
			console.warn(error);
			reject(error);
		});
	})
}
