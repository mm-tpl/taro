import React, { ReactNode, useState } from "react";
import * as Taro from '@tarojs/taro';
import { Pressable } from 'react-native';
import sleep from "../atoms/sleep";

export default function Link({
	page,
	disable,
	openNewWindow = true,
	children
}: {
	/**
	 * 页面地址
	 */
	page?: string;
	/**
	 * 是否禁用
	 */
	disable?: boolean;
	/**
	 * 是否打开新页面，默认为True
	 */
	openNewWindow?: boolean;
	children: ReactNode;
}) {
	const [loading, setloading] = useState(false);
	return <Pressable onPress={async () => {
		if (disable) {
			return;
		}
		if (!page) {
			Taro.showToast({
				title: '暂无开通功能模块，请联系销售经理'
			});
			return;
		}

		if (loading) {
			return;
		}
		setloading(true);
		if (openNewWindow) {
			await Taro.navigateTo({
				url: page
			});
		} else {
			await Taro.redirectTo({
				url: page
			});
		}
		await sleep(2000);
		setloading(false);
	}}>{children}</Pressable>
}
