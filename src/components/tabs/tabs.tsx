import { View, Text, ScrollView } from '@tarojs/components'
import React from "react";
import { ReactNode, useState } from "react";
import TabPanel from './tabpanel';
import './tabs.css';

export default function Tabs({ children }: { children: ReactNode; }) {
	const [value, setvalue] = useState(0);
	const all = (() => {
		if (!Array.isArray(children)) {
			return [children];
		}
		return children;
	})();
	return <>
		<View className='tabs'>
			<View className='tab'>
				{all.map((it, idx) => {
					const title = (it as { props: { title: string; } }).props.title;
					const lbl = title.split(',');
					const cls = idx === value ? 'v' : 'n';
					return <View key={idx} onClick={() => {
						setvalue(idx);
					}} >
						<Text className={cls}>{lbl[0]}</Text>
						<Text className={cls}>{lbl[1]}</Text>
					</View>;
				})}
			</View>
			<ScrollView className='panel'>
				{all.map((it, idx) => {
					return value === idx && <View key={idx} >{it}</View>;
				})}
			</ScrollView>
		</View>
	</>;
}

Tabs.TabPanel = TabPanel;
