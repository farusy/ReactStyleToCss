const StyleToCss = style => Object.entries(style).reduce((styleString, [propName, propValue]) => {
    return `${styleString}\n${propName.replace(/([A-Z])/g, matches => `-${matches[0].toLowerCase()}`)}: ${propValue};`;
  }, '')
