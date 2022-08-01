import { setStorage } from '@tarojs/taro';

export default async function SetStorage<T>(key: string, value: T) {
	try {
		await setStorage({
			key,
			data: value
		});
		return true;
	} catch (error) {
		return false;
	}
}
