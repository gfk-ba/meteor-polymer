Package.describe({
  name: 'gfk:polymer',
  summary: 'Adds polymer to your meteor application',
  version: '0.1.0',
  git: 'https://github.com/gfk-ba/meteor-polymer'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');
    api.use(['templating'], 'client');

    api.addFiles([
        'bower_components/polymer/layout.html',
        'bower_components/polymer/polymer.html',
        'bower_components/polymer/polymer.js',
        'bower_components/polymer/polymer.min.js',
        'bower_components/webcomponentsjs/CustomElements.js',
        'bower_components/webcomponentsjs/CustomElements.min.js',
        'bower_components/webcomponentsjs/HTMLImports.js',
        'bower_components/webcomponentsjs/HTMLImports.min.js',
        'bower_components/webcomponentsjs/ShadowDOM.js',
        'bower_components/webcomponentsjs/ShadowDOM.min.js',
        'bower_components/webcomponentsjs/webcomponents-lite.js',
        'bower_components/webcomponentsjs/webcomponents-lite.min.js',
        'bower_components/webcomponentsjs/webcomponents.min.js',
        'bower_components/webcomponentsjs/webcomponents.js'
    ], 'client', {isAsset:true});

    api.addFiles('head.html', 'client');
});
