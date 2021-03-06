import babel from 'rollup-plugin-babel';

export default {
	input: 'src/index.js',
	plugins: [ babel() ],
	output: [
		{
			format: 'umd',
			name: 'EVENT_BUS',
			file: 'build/light-event-bus.js',
			indent: '\t'
		}
	]
};