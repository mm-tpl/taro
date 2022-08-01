import React from "react";
import { ReactNode } from "react";
import { View } from '@tarojs/components';

export default function TabPanel({ children }: { children?: ReactNode; title: string }) {
	return <View>{children}</View>
}
