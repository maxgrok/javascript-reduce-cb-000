const app = "I don't do much."

function getTotalAmountForProducts(products){
	let totalPrice = 0;

	products.forEach(product => {
		if(product.discount >=.5){
			totalPrice += product.price;
		}
	});
	return totalPrice;
}

console.log(getTotalAmountForProducts(products));

function getTotalAmountForProducts(products, callback){
	let totalPrice = 0;

	products.forEach(product => {
		totalPrice = callback(totalPrice, product);
	});
	return totalPrice;
}

function callback(totalPrice, product){
	if(product.discount >= .5){
		return totalPrice + product.price;
	}
	return totalPrice;
}

console.log(getTotalAmountForProducts(products, callback));

function callback(totalPrice, product){
	if(product.price < 7){
		return totalPrice + product.price;
	}
	return totalPrice;
}

console.log(getTotalAmountForProducts(products, callback));

function getTotalAmountForProducts(products, callback, initialValue){
	let totalPrice = initialValue;

	products.forEach(product => {
		totalPrice = callback(totalPrice, product);
	});
	return totalPrice;
}

function callback(totalPrice, product){
	if(product.price < 7){
		return totalPrice + product.price;
	}
	return totalPrice;
}

console.log(getTotalAmountForProducts(products, callback, 0));

function reduce(collection, callback, initialValue){
	let result = initialValue;

	collection.forEach(product =>{
		result = callback(result, product);
	})
	return result;
}

function reduce(collection, callback, initialValue){
	let result = initialValue;

	collection.forEach((product,index)=> {
		result = callback(result, product, index, collection);
	});
	return result;
}

const couponLocations = [
{ room: 'Living room', amount: 5},
{ room: 'Kitchen', amount: 2},
{ room: 'Bathroom', amount: 1},
{ room: 'Master bedroom', amount: 7},
];

function couponCounter(totalAmount, location){
	return totalAmount + location.amount;
}

console.log(reduce(couponLocations, couponCounter, 0));

console.log(reduce(couponLocations, couponCounter, 3));

console.log(couponLocations.reduce(couponCounter, 0));