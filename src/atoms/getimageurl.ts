import a004 from './server';

const server = a004();

/**
 * get image url
 */
export default function getimageurl(id: string) {
	return `${server}/api/getfile/${id}`;
}
