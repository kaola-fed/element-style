module.exports = {
    plugins: [
        require('postcss-import')({
            path: './src/style'
        }),
        require('postcss-salad')({
            browsers: ['ie > 9', 'last 2 versions'],
            features: {
                bem: {
                    shortcuts: {
                        component: 'b',
                        modifier: 'm',
                        descendent: 'e'
                    },
                    separators: {
                        descendent: '__',
                        modifier: '--'
                    }
                }
            }
        })
    ]
};
