const express = require('express');
// import express from 'express';

const server = express();

server.use(() => {
	console.log('Hello Server..');
});

server.listen(4000);
