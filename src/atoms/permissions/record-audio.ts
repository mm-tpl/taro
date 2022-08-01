import { PermissionsAndroid } from 'react-native';

export default async function requestRecordAudioPermission() {
	const granted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO);
	if (!granted) {
		const status = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, {
			title: '请求录音权限',
			message: '请求录音权限',
			buttonPositive: 'OK'
		});
		if (status === 'denied') {
			throw new Error('无录音权限');
		}
	}
}
