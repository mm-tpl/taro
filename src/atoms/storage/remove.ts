import { removeStorage } from '@tarojs/taro';
import keys from './keys';

export default async function removestorage(key: keys) {
	try {
		await removeStorage({
			key
		});
	} catch (error) {
		console.error(error);
	}
}

removestorage.keys = keys;
