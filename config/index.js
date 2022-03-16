// config/index.js
const config = {
	projectName: 'dfactory01',
	date: '2022-3-15',
	designWidth: 750,
	deviceRatio: {
		640: 2.34 / 2,
		750: 1,
		828: 1.81 / 2
	},
	sourceRoot: 'src',
	outputRoot: 'dist',
	plugins: [],
	defineConstants: {
	},
	copy: {
		patterns: [
		],
		options: {
		}
	},
	framework: 'react',
	rn: {
		appName: 'taroDemo',
		output: {
			iosSourceMapUrl: '', // sourcemap 文件url
			iosSourcemapOutput: './native-shell/ios/main.map', // sourcemap 文件输出路径
			iosSourcemapSourcesRoot: '', // 将 sourcemap 资源路径转为相对路径时的根目录
			androidSourceMapUrl: '',
			androidSourcemapOutput: './native-shell/android/app/src/main/assets/index.android.map',
			androidSourcemapSourcesRoot: '',
			ios: './native-shell/ios/main.jsbundle',
			iosAssetsDest: './native-shell/ios',
			android: './native-shell/android/app/src/main/assets/index.android.bundle',
			androidAssetsDest: './native-shell/android/app/src/main/res'
		}
	},
	mini: {
		postcss: {
			pxtransform: {
				enable: true,
				config: {

				}
			},
			url: {
				enable: true,
				config: {
					limit: 1024 // 设定转换尺寸上限
				}
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: 'module', // 转换模式，取值为 global/module
					generateScopedName: '[name]__[local]___[hash:base64:5]'
				}
			}
		}
	},
	h5: {
		publicPath: '/',
		staticDirectory: 'public',
		postcss: {
			autoprefixer: {
				enable: true,
				config: {
				}
			},
			cssModules: {
				enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				config: {
					namingPattern: 'module', // 转换模式，取值为 global/module
					generateScopedName: '[name]__[local]___[hash:base64:5]'
				}
			}
		}
	}
}

module.exports = function (merge) {
	if (process.env.NODE_ENV === 'development') {
		return merge({}, config, require('./dev'))
	}
	return merge({}, config, require('./prod'))
}
