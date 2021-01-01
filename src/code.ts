/// <reference path="../node_modules/@figma/plugin-typings/index.d.ts" />

figma.showUI(__html__);
figma.loadFontAsync({ family: "Roboto", style: "Regular" })
figma.ui.resize(300, 350)
figma.ui.onmessage = (msg) => {
  if 
  (msg.type === "create-frame")
      {
      const frame = figma.createFrame()
      frame.x = figma.viewport.center.x
      frame.y = figma.viewport.center.y
      frame.name = msg.texted
      figma.currentPage.appendChild(frame);
      }
if 
(msg.type === "create-text")
     {
     const text = figma.createText()
     text.x = figma.viewport.center.x
     text.y = figma.viewport.center.y
     text.name = msg.textForName
     text.hasMissingFont 
     text.characters = msg.texted
     text.fontSize = 12
     text.autoRename = false
     text.textAutoResize = 'WIDTH_AND_HEIGHT'
     figma.currentPage.appendChild(text);
     }
  figma.closePlugin();
};


