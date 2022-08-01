import { PermissionsAndroid } from 'react-native';

export default async function requestCameraPermission() {
	const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
	if (!granted) {
		const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
			title: '请求相机权限',
			message: '拍照',
			buttonPositive: 'OK'
		});
		if (status === 'denied') {
			throw new Error('无拍照权限');
		}
	}
}
