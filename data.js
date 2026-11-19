import data from './json/menuItems.json' with { type: 'json' }

export default (value) => {
   for (let i = 0; data.benedict.length > i; i++)
      if (data.benedict[i].name === value)
         return data.benedict[i]
} // end arrow function