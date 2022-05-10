# CanvasHelper

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/steelWinds/CanvasHelper/build-lint?style=flat-square)

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/steelWinds/CanvasHelper?style=flat-square)
![GitHub top language](https://img.shields.io/github/languages/top/steelWinds/CanvasHelper?style=flat-square)
![npm type definitions](https://img.shields.io/npm/types/canvashelper)

![GitHub](https://img.shields.io/github/license/steelWinds/CanvasHelper?style=flat-square)

Simple library for simplification work with Canvas

## Getting started

### Install

```
pnpm add canvashelper
```

### Usage

```
import CanvasHelper from 'ninja-canvashelper';

const cHelper = new CanvasHelper();

const canvas = await cHelper.createCanvasField(
  'canvas-id',
  {
    iSize: 400,
    bSize: 400,
    parentSelector: 'body',
    styleClass: 'custom-canvas',
  }
);
```

### Docs

#### CanvasHelper
- ```(async) cHelper.createCanvasField(id, options)``` - create canvas instance ang get it
- ```(async) cHelper.removeCanvasField(id)``` - remove canvas instance by id
- ```cHelper.collection``` - get all created canvases

---

#### CanvasItem
- ```canvas.canvasNode``` - get canvas element
- ```canvas.context2D``` - get canvas 2d context
- ```canvas.parent``` - get parent node of canvas
- ```canvas.draw``` - get canvas draw tool
- ```canvas.id``` - get canvas SHA-256 id

---

#### CanvasDrawing
- ```canvas.draw.clear(full, options)``` - clear canvas field full, or by with options
- ```canvas.draw.drawRect(options)``` - draw rect with options
- ```canvas.draw.drawLine(options, lineOptions)``` - draw line with options
- ```canvas.draw.drawArc(options)``` - draw circle with options


## Author

[@steelWinds](https://github.com/steelWinds/)
