export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

}

export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    if(item.name === "Sulfuras, Hand of Ragnaros"){
      /** does nothing if the name is Sulfuras... */
    } else if (item.name === "Aged Brie"){ /** If an item has the name aged brie it will add to the quality as time passes */
      item.quality++
    } else if (item.name === "Backstage passes to a TAFKAL80ETC concert"){
      if(item.sellIn > 10){ /** the backstage pass adds one for more than 10 days */
        item.quality++
      } else if (item.sellIn > 5){ /** adds 2 when its between 10 to 6 days */
        item.quality = item.quality + 2
      } else if (item.sellIn >= 0){ /** adds 3 when its between 5 to 0 days */
        item.quality = item.quality + 3
      } else { /** If below 0 days it sets the item quality to 0 */
        item.quality = 0
      }
    } else if (item.name.includes('Conjured')){
      if(item.sellIn >= 0){ /** If the name string contains 'Conjured' it decreases the quality twice as fast */
        item.quality = item.quality - 2
      } else {
        item.quality = item.quality - 4
      }

    } else {
      if(item.sellIn >= 0){ /** normal degradation of items */
        item.quality--
      } else {
        item.quality = item.quality - 2
      }

    }
    item.quality > 50 && item.name !== "Sulfuras, Hand of Ragnaros" ? item.quality = 50 : item.quality = item.quality
    /** If item quality is above 50 and the name is not Sulfuras... set the item quality to 0 */

    item.quality < 0 ? item.quality = 0 : item.quality = item.quality
    /** if the item quality is less than 0 it will be set to 0 */
    
    item.name !== "Sulfuras, Hand of Ragnaros" ? item.sellIn-- : item.sellIn = item.sellIn
    /** If the item name is not Sulfuras... the item.sellIn time decriments by 1 */

  }
};

updateQuality()

console.log(items)