export const recipe = {
  recipeInfo: {
    title: 'Basic Sourdough',
    description: 'My go-to weekday loaf.',
  },
  ingredients: [
    {
      name: 'White Bread Flour',
      qty: 300,
      type: 'flour',
    },
    {
      name: 'Whole Wheat Flour',
      type: 'flour',
      qty: 100,
    },
    {
      name: 'Water',
      qty: 300,
      type: 'liquid',
    },
    {
      name: 'Salt',
      type: 'salt',
      qty: 8,
      units: 'g',
    },
    {
      name: 'Levain',
      type: 'preferment',
      qty: 80,
      hydration: 1,
    },
  ],
  steps: [
    {
      title: 'Build Levain',
      instructions:
        'Mix 20g starter with 30g flour and 30g water. Rest 4 hours or until doubled.',
      duration: 240,
    },
    {
      title: 'Autolyze',
      instructions:
        'Mix 300g white flour and 100g whole wheat flour with 300g water. Mix until fully incorporated, then allow 30-minutes to 2-hours to rest.',
      duration: 120,
    },
    {
      title: 'Initial Mix',
      instructions: 'Add 80g levain to dough and mix until well incorporated.',
      duration: 30,
    },
    {
      title: 'Final Mix',
      instructions:
        'Add 8g salt to dough and mix until well incorporated and gluten is developed.',
      duration: 30,
    },
    {
      title: 'Bulk Fermentation',
      instructions:
        'Apply 4 coil folds in the first 2 hours, then allow dough to rest for the remaining 2-3 hours.',
      duration: 300,
    },
    {
      title: 'Shape',
      instructions:
        'Turn dough out on counter and pre-shape, then shape as desired. Cold proof in refridgerator.',
      duration: 720,
    },
    {
      title: 'Score and Bake',
      instructions:
        'Pre-heat dutch oven to 450°F for maximal dough rise and crust texture. Bake 20 minutes covered, 25-30 minutes un-covered.',
      duration: 45,
    },
  ],
};
