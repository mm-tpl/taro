import { PermissionsAndroid } from 'react-native';

export default async function requestStoragePermission() {
	const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
	if (!granted) {
		const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
			title: '请求磁盘读写权限',
			message: '保存数据到手机存储',
			buttonPositive: 'OK'
		});
		if (status === 'denied') {
			throw new Error('无存储权限');
		}
	}
}
