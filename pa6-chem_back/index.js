
import http from 'http';

const listener = (req, res) => {
	res.end('hello sasha...')
}

const server = http.createServer(listener);

server.listen(3005);
