module.exports = {
	"presets": ["@babel/preset-env", "@babel/preset-react"],
	plugins: [
	["module-resolver", {
			"root": ["./src"],
			"extensions": [".ios.js",".android.js",".js",".ts",".tsx",".jsx",".json"],
			"alias": {
				"@components": "./src/components",
			}
		}]
	]
};
