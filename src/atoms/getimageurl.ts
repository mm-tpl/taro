import server from './server';
import api from './api';

const host = server();

/**
 * get image url
 */
export default function getimageurl(id: string) {
	return `${host}${api['/api/file/id']}/${id}`;
}
