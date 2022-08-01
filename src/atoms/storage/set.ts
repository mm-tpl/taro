import { setStorage } from '@tarojs/taro';
import keys from './keys';

export default async function setstorage<T>(key: keys, value: T) {
	try {
		await setStorage({
			key,
			data: value
		});
	} catch (error) {
		console.log(error);
	}
}

setstorage.keys = keys;
