const {
    FuseBox,
    QuantumPlugin,
    WebIndexPlugin,
} = require("fuse-box");


function bundle(name, instructions, plugins, env) {
    const fuse = FuseBox.init({
        homeDir: "src",
        output: "dist/$name.js",
        sourceMaps: true,
        target: 'browser',
        plugins: plugins,
    });

    if (env || 'prod' === 'dev') {
        fuse.dev({
            port: 8080,
            root: 'dist'
        });

        fuse.bundle(name)
            .watch("src/**")
            .hmr({ reload: true })
            .instructions(instructions);
    } else {
        fuse.bundle(name)
            .instructions(instructions);
    }

    fuse.run();
}

bundle('worker', '>worker.ts', [
    QuantumPlugin({
        containedAPI: true,
        bakeApiIntoBundle: true,
        uglify: false,
    })
]);

bundle('web', '>web.ts', [
    WebIndexPlugin({
        template: "index.html",
        title: "Service Worker",
        target: "index.html",
        bundles: ["web"]
    }),
], true);