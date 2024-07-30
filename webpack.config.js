const path = require('path');

module.exports={
    entry: './src/index.js',//punto de entrada de tu aplicacion (usar el index como archivo principal)
    output: {
        filename: 'bundle.js', //Nombre de archivo de salida (nombre de la cajta de fiesta)
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida (es decir la carpeta dist)
    },
    module: {
        rules: [
            {
                test: /\.css$/,//Regex(archivo regular) para identificar archivos CSS
                use: ['style-loader','css-loader'], //Loaders para procesar archivos
            },
            {
                test: /\.js$/, //Regex para identificar archivos JS
                exclude: /node_modules/, //Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader',//Loader para transpilar JS moderno a JS compatible con mas navegadores
                    options: {
                        presets: ['@babel/preset-env'],//Presets de Babel para convertir JS moderno a versiones mas antiguas
                    }
                }
            }
        ]
    },
    devtool: 'source-map', //Generar source maps para facilitar la depuracion
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), //Carpeta desde donde obtenemos los archivos que mostramos al usuario
        compress: true, //Habilitando compresion gzip
        port: 9000, //Puerto del servidor de desarrollo
    }
}