import React, { ComponentType } from 'react';
import './app.scss';

export default function App<T>({ children }: { children: ComponentType<T> }) {
	return (
		<>
			{children}
		</>
	);
}
