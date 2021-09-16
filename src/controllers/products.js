exports.createProduct = (req, res, next) => {
	// console.log(`url: `, req.originalUrl);
	// console.log(`method: `, req.method);
	// console.log(`request: `, req.body);
	const id = req.body.id;
	const name = req.body.name;
	const price = req.body.price;
	res.json({
		message: 'Create Product Success!',
		data: {
			id: id,
			name: name,
			price: price,
		},
	});
	next();
};

exports.getAllProducts = (req, res, next) => {
	res.json({
		message: 'Get All Product Success',
		data: [
			{
				id: 1,
				name: 'Sari wangi',
				price: 3000,
			},
			{
				id: 2,
				name: 'Sari gandum',
				price: 5000,
			},
		],
	});
	next();
};
