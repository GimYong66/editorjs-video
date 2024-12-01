![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Video Tool

Video Block for the [Editor.js](https://editorjs.io).

## Features

- Uploading file from the device
- Pasting copied content from the web
- Pasting videos by drag-n-drop
- Pasting files from Clipboard
- Allows adding a border, a background and a caption
- Allows stretching an video to the container's full-width

**Notes**

This Tool requires server-side implementation for the file uploading. See [backend response format](#server-format) for more details.


## Installation

Get the package

```shell
npm install GimYong66/editorjs-video
```

Include module at your application

```javascript
import VideoTool from 'editorjs-video';
```

Optionally, you can load this tool from [JsDelivr CDN](https://cdn.jsdelivr.net/gh/GimYong66/editorjs-video/dist/video.umd.js)

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
import VideoTool from 'editorjs-video';

// or if you inject VideoTool via standalone script
const VideoTool = window.VideoTool;

var editor = EditorJS({
  ...

  tools: {
    ...
    video: {
      class: VideoTool,
      config: {
        endpoints: {
          byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
          byUrl: 'http://localhost:8008/fetchUrl', // Your endpoint that provides uploading by Url
        }
      }
    }
  }

  ...
});
```

## Config Params

Video Tool supports these configuration parameters:

| Field | Type     | Description        |
| ----- | -------- | ------------------ |
| endpoints | `{byFile: string, byUrl: string}` | Endpoints for file uploading. <br> Contains 2 fields: <br> __byFile__ - for file uploading <br> __byUrl__ - for uploading by URL |
| field | `string` | (default: `video`) Name of uploaded video field in POST request |
| types | `string` | (default: `video/*`) Mime-types of files that can be [accepted with file selection](https://github.com/codex-team/ajax#accept-string).|
| additionalRequestData | `object` | Object with any data you want to send with uploading requests |
| additionalRequestHeaders | `object` | Object with any custom headers which will be added to request. [See example](https://github.com/codex-team/ajax/blob/e5bc2a2391a18574c88b7ecd6508c29974c3e27f/README.md#headers-object) |
| captionPlaceholder | `string` | (default: `Caption`) Placeholder for Caption input |
| buttonContent | `string` | Allows to override HTML content of «Select file» button |
| uploader | `{{uploadByFile: function, uploadByUrl: function}}` | Optional custom uploading methods. See details below. |
| actions | `array` | Array with custom actions to show in the tool's settings menu. See details below. |
| features | `object` | Allows you to enable/disable additional features such as border, background tunes and caption. See details below. |

Note that if you don't implement your custom uploader methods, the `endpoints` param is required.

## Tool's settings

1. Add border

2. Stretch to full-width

3. Add background

4. Add caption

Add extra setting-buttons by adding them to the `actions`-array in the configuration:
```js
actions: [
    {
        name: 'new_button',
        icon: '<svg>...</svg>',
        title: 'New Button',
        toggle: true,
        action: (name) => {
            alert(`${name} button clicked`);
        }
    }
]
```

**_NOTE:_**  return value of `action` callback for settings whether action button should be toggled or not is *deprecated*. Consider using `toggle` option instead.

You can disable features such as border, background tunes and caption by defining `features` in the configuration:
```js
features: {
  border: false,
  caption: 'optional',
  stretch: false,
  autoplay: false,
  loop: false,
  muted: false,
  playsinline: false,
  controls: false
}
```

**_NOTE:_** set caption to `optional` in order to configure caption as a tune.

## Output data

This Tool returns `data` with following format

| Field          | Type      | Description                     |
| -------------- | --------- | ------------------------------- |
| file           | `object`  | Uploaded file data. Any data got from backend uploader. Always contain the `url` property |
| caption        | `string`  | video's caption                 |
| withBorder     | `boolean` | add border to video             |
| withBackground | `boolean` | need to add background          |
| stretched      | `boolean` | stretch video to screen's width |
| autoplay      | `boolean` | `autoplay` attribute in `video` tag |
| loop      | `boolean` | `loop` attribute in `video` tag |
| muted      | `boolean` | `muted` attribute in `video` tag |
| playsinline      | `boolean` | `playsinline` attribute in `video` tag |
| controls      | `boolean` | `controls` attribute in `video` tag |


```json
{
    "type" : "video",
    "data" : {
        "file": {
            "url" : "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg"
        },
        "caption" : "Roadster // tesla.com",
        "withBorder" : false,
        "withBackground" : false,
        "stretched" : true,
        "autoplay": true,
        "loop": true,
        "muted": true,
        "playsinline": true,
        "controls": true,
    }
}
```

## Backend response format <a name="server-format"></a>

This Tool works by one of the following schemes:

1. Uploading files from the device
2. Uploading by URL (handle video-like URL's pasting)
3. Uploading by drag-n-drop file
4. Uploading by pasting from Clipboard

### Uploading files from device <a name="from-device"></a>

Scenario:

1. User select file from the device
2. Tool sends it to **your** backend (on `config.endpoints.byFile` route)
3. Your backend should save file and return file data with JSON at specified format.
4. Video tool shows saved video and stores server answer

So, you can implement backend for file saving by your own way. It is a specific and trivial task depending on your
environment and stack.

The tool executes the request as [`multipart/form-data`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST), with the key as the value of `field`  in configuration.

The response of your uploader **should**  cover the following format:

```json5
{
    "success" : 1,
    "file": {
        "url" : "https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg",
        // ... and any additional fields you want to store, such as width, height, color, extension, etc
    }
}
```

**success** - uploading status. 1 for successful, 0 for failed

**file** - uploaded file data. **Must** contain an `url` field with full public path to the uploaded video.
Also, can contain any additional fields you want to store. For example, width, height, id etc.
All additional fields will be saved at the `file` object of output data.

### Uploading by pasted URL

Scenario:

1. User pastes an URL of the video file to the Editor
2. Editor pass pasted string to the Video Tool
3. Tool sends it to **your** backend (on `config.endpoints.byUrl` route) via 'url' in request body
4. Your backend should accept URL, **download and save the original file by passed URL** and return file data with JSON at specified format.
5. Video tool shows saved video and stores server answer

The tool executes the request as `application/json` with the following request body:

```json5
{
  "url": "<pasted URL from the user>"
  "additionalRequestData": "<additional request data from configuration>"
}
```

Response of your uploader should be at the same format as described at «[Uploading files from device](#from-device)» section


### Uploading by drag-n-drop or from Clipboard

Your backend will accept file as FormData object in field name, specified by `config.field` (by default, «`video`»).
You should save it and return the same response format as described above.

## Providing custom uploading methods

As mentioned at the Config Params section, you have an ability to provide own custom uploading methods.
It is a quite simple: implement `uploadByFile` and `uploadByUrl` methods and pass them via `uploader` config param.
Both methods must return a Promise that resolves with response in a format that described at the [backend response format](#server-format) section.


| Method         | Arguments | Return value | Description |
| -------------- | --------- | -------------| ------------|
| uploadByFile   | `File`    | `{Promise.<{success, file: {url}}>}` | Upload file to the server and return an uploaded video data |
| uploadByUrl    | `string`  | `{Promise.<{success, file: {url}}>}` | Send URL-string to the server, that should load video by this URL and return an uploaded video data |

Example:

```js
import VideoTool from 'GimYong66/editorjs-video';

var editor = EditorJS({
  ...

  tools: {
    ...
    video: {
      class: VideoTool,
      config: {
        /**
         * Custom uploader
         */
        uploader: {
          /**
           * Upload file to the server and return an uploaded video data
           * @param {File} file - file selected from the device or pasted by drag-n-drop
           * @return {Promise.<{success, file: {url}}>}
           */
          uploadByFile(file){
            // your own uploading logic here
            return MyAjax.upload(file).then(() => {
              return {
                success: 1,
                file: {
                  url: 'https://codex.so/upload/redactor_videos/o_80beea670e49f04931ce9e3b2122ac70.jpg',
                  // any other video data you want to store, such as width, height, color, extension, etc
                }
              };
            });
          },

          /**
           * Send URL-string to the server. Backend should load video by this URL and return an uploaded video data
           * @param {string} url - pasted video URL
           * @return {Promise.<{success, file: {url}}>}
           */
          uploadByUrl(url){
            // your ajax request for uploading
            return MyAjax.upload(file).then(() => {
              return {
                success: 1,
                file: {
                  url: 'https://codex.so/upload/redactor_videos/o_e48549d1855c7fc1807308dd14990126.jpg',,
                  // any other video data you want to store, such as width, height, color, extension, etc
                }
              }
            })
          }
        }
      }
    }
  }

  ...
});
```
