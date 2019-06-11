# ReactStyleToCss
convert react Style to Css String

just use the method as it here.. usually i just copy and paste it to a node terminal or to chrome console.. 

```
  const StyleToCss = style => Object.entries(style).reduce((styleString, [propName, propValue]) => {
    return `${styleString}\n${propName.replace(/([A-Z])/g, matches => `-${matches[0].toLowerCase()}`)}: ${propValue};`;
  }, '')
```

very mush inspired by - https://stackoverflow.com/a/45205645
