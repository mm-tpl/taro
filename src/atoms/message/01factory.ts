import * as Taro from '@tarojs/taro';

export interface I01factoryEvent {
}

const eventname = '01factory';

export function fire01factoryEvent(e: I01factoryEvent) {
	Taro.eventCenter.trigger(eventname, e);
}

export function listen01factoryEvent(listener: (e: I01factoryEvent) => void) {
	const event = Taro.eventCenter.on(eventname, (e) => {
		listener(e);
	});
	return {
		destroy() {
			event.off(eventname);
		}
	};
}
