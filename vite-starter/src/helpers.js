export function kebabCaseToTitleCase(colorName) {
  const colorWithSpaces = colorName.replaceAll('-', ' ');
  const colorWithCaps = colorWithSpaces.replace(/\b([a-z])/g, (math) => math.toUpperCase())

  return colorWithCaps;
}
