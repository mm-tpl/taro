import React from 'react';
import { Text, View, Image } from '@tarojs/components';
import './iconbtn.css';
import Link from '../link';

export default function Iconbtn({
	page,
	src,
	title,
	num
}: {
	src: string;
	title: string;
	page?: string;
	num?: string;
}) {
	return <Link page={page}>
		<View className='btn'>
			{Number(num) > 0 && <View className='view'>
				<Text className={'up'}>{num}</Text>
			</View>}
			<View className='content'>
				{title ?
					<View className='iconbg'>
						<Image className='icon' src={src} />
					</View>
					:
					<Text className='txt'></Text>
				}
				<Text className='title'>{title}</Text>
			</View>
		</View>
	</Link>;
}
