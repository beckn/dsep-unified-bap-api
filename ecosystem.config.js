module.exports = {
    apps: [
        {
            name: "dsep-unified-bap-api",
            script: './dist/index.js',
            watch: true,
            instances: 3,
            exec_mode: "cluster",
        }
    ]
}
