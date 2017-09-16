freeboard-jqplot-widget
============================

A starter template for building freeboard widgets using the [jqplot plugin](https://github.com/jritsema/freeboard-jqplot).

This gives you a nice development workflow by allowing you to implement your widget using files (data.js, chart-options.js, chart-settings.json), saving your files, and then refreshing your browser to immediately see your changes (assuming you have script to have freeboard load your dashboard.json) or you can manually re-load your dashboard.

Includes predefined npm scripts for updating freeboard dashboard.json (using [freeboard-jqplot-buildtool](https://github.com/jritsema/freeboard-jqplot-buildtool)) when files are saved.

**setup**

```
$ git clone https://github.com/jritsema/freeboard-jqplot-widget mywidget
$ cd mywidget
$ npm install
```

**usage**

Edit the "build" script command in package.json to point to the dashboard.json file you want updated.  

```
"build": "cat ../freeboard/dashboard.json | freeboard-jqplot-buildtool > temp && cp temp ../freeboard/dashboard.json && rm temp",
```

Note that the target widget defined in dashboard.json needs to have a "title" property that matches the "name" property in package.json.  For example, if you update the name in package.json to "mywidget", then your dashboard.json needs to look like the following.

```
...
"widgets": [
  {
    "title": "mywidget",
    "type": "jqplotWidget",
    "settings": {
      "height": 3,
      "model": "",
      "view": "",
      "helpers": ""
    }
  }
]
...
```

Now you're ready to edit your source files (data.js, chart-options.js, chart-settings.json) and then...

`$ npm run build` or `$ npm run watch`

...and this will update your dashboard.json with the resulting data, options, settings properties.

