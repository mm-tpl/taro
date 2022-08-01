import getstorage from "./get";

/**
 * 获取登录用户id
 * @returns 
 */
export default function getuserid() {
	return getstorage(getstorage.keys.userid, '');
}
