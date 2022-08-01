import { getStorage } from '@tarojs/taro';
import keys from './keys';

export default async function getstorage<T>(key: keys, defaultvalue: T) {
	try {
		const ret = await getStorage<T>({
			key
		});
		return ret.data;
	} catch {
		return defaultvalue;
	}
}

getstorage.keys = keys;
