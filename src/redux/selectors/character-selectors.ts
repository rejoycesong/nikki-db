import { createSelector } from 'reselect';
import { ItemId, Item } from 'models/Item';
import { RootState } from 'redux/reducers/store';

export const selectCurrentCharacter = (state: RootState) => state.editor.character
export const select = (state: RootState) => state.editor.character

export const selectCurrentItems = createSelector(
    [selectCurrentCharacter], (character) => character.clothes)

export const selectCurrentItemIds = createSelector([selectCurrentCharacter], (character): ItemId[] => Object.values(character.clothes).map((item: Item) => item.id))

export const selectItemById = createSelector([
    (state: RootState) => state.editor.loadedItems,
    (state: RootState, itemId: ItemId) => itemId
],(
    loadedItems,
    itemId) => {
        const findItem = loadedItems.find((item: Item) => item.id === itemId);
        return findItem || new Item(itemId);
    }
)

export const currentUrlParams = createSelector([
    (state: RootState) => state.editor.loadedItems,
    selectCurrentItemIds
], (
    loadedItems: Item[],
    wornItems: ItemId[]) => {

    const wornItemsSet: Set<ItemId> = new Set<ItemId>(wornItems);
    const loadedItemIds = loadedItems.filter((item: Item) => !wornItemsSet.has(item.id))
                                     .map((item: Item) => item.id)
                                     .sort();
    const wornItemIds = wornItems.sort();
    
    if (loadedItemIds.length > 0 && wornItemIds.length > 0) {
        return `?closet=${loadedItemIds}&wear=${wornItemIds}`;
    } else if (loadedItemIds.length > 0) {
        return `?closet=${loadedItemIds}`;
    } else {
        return `?wear=${wornItemIds}`;
    }
})
