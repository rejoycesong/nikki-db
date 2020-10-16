import { Store } from 'redux';
import {
  posed_dress, posed_coat, posed_shoes, simple_hair, simple_hat, complex_hair, deer_spirit, motorcycle_spirit,
} from '../test_data/data';
import { DeserializeNullException } from '../../modules/errors';
import { RootState } from '../../modules';
import { AmputationData, ItemData, loadItem, PositionData } from '../../modules/data';
import { createStoreWithMiddleware } from '../helpers';
import * as api from '../../modules/api';

describe('ItemData', () => {
  test('Errors if given empty data', () => {
    expect(() => new ItemData()).toThrowError(DeserializeNullException);
    expect(() => new PositionData(0, '')).toThrowError(DeserializeNullException);
    expect(() => new AmputationData('')).toThrowError(DeserializeNullException);
  });

  test('Successfully deserializes for the null cases', () => {
    const empty_item_data: ItemData = new ItemData({});
    expect(empty_item_data).toMatchSnapshot();
    const empty_position_data: PositionData = new PositionData(10, {});
    expect(empty_position_data).toMatchSnapshot();
    const empty_amputation_data: AmputationData = new AmputationData({});
    expect(empty_amputation_data).toMatchSnapshot();
  });

  test('Successfully deserializes ItemData: simple_hair', () => {
    const simple_hair_item: ItemData = new ItemData(simple_hair);
    expect(simple_hair_item).toMatchSnapshot();
    expect(simple_hair_item.amputationData).toBe(null);
  });

  test('Successfully deserializes ItemData: posed dress', () => {
    const posed_dress_item: ItemData = new ItemData(posed_dress);
    expect(posed_dress_item).toMatchSnapshot();
  });

  test('Successfully deserializes ItemData: posed coat', () => {
    const posed_coat_item: ItemData = new ItemData(posed_coat);
    expect(posed_coat_item).toMatchSnapshot();
  });

  test('Successfully deserializes ItemData: posed shoes', () => {
    const posed_shoes_item: ItemData = new ItemData(posed_shoes);
    expect(posed_shoes_item).toMatchSnapshot();
  });

  test('Successfully deserializes ItemData: simple hat', () => {
    const simple_hat_item: ItemData = new ItemData(simple_hat);
    expect(simple_hat_item).toMatchSnapshot();
  });

  test('Successfully deserializes ItemData: complex hair', () => {
    const complex_hair_item: ItemData = new ItemData(complex_hair);
    expect(complex_hair_item).toMatchSnapshot();
  });

  test('Successfully deserializes ItemData: motorcycle spririt', () => {
    const motorcycle_spirit_item: ItemData = new ItemData(motorcycle_spirit);
    expect(motorcycle_spirit_item).toMatchSnapshot();
  });

  test('Successfully deserializes ItemData: deer spirit', () => {
    const deer_spirit_item: ItemData = new ItemData(deer_spirit);
    expect(deer_spirit_item).toMatchSnapshot();
  });
});

describe('DataState', () => {
  let store: Store<any>;
  let apiMock: any;

  beforeEach(() => {
    store = createStoreWithMiddleware();
    apiMock = jest.spyOn(api, 'fetchItemData');
    apiMock.mockClear();
  });

  test('Action: ADD_ITEMS / Use-case: loadItem -- document does not exist', async () => {
    apiMock.mockImplementation((itemId: number) => {}); // Document does not exist
    await store.dispatch<any>(loadItem(22008));
    const state: RootState = store.getState();

    expect(apiMock).toBeCalledTimes(1);
    expect(state.data.itemsData).toStrictEqual({});
    expect(state.data.itemsData[22008]).toStrictEqual(undefined);
  });

  test('Action: ADD_ITEMS / Use-case: loadItem -- successfully calls API and adds one item to the store', async () => {
    apiMock.mockImplementation((itemId: number) => posed_dress);
    await store.dispatch<any>(loadItem(22008));
    const state: RootState = store.getState();

    expect(apiMock).toBeCalledTimes(1);
    expect(state.data.itemsData[22008]).toStrictEqual(new ItemData(posed_dress));
  });

  test('Action: ADD_ITEMS / Use-case: loadItem -- successfully calls API and adds multiple items to the store', async () => {
    apiMock.mockImplementation((itemId: number) => posed_coat);
    await store.dispatch<any>(loadItem(30987));

    apiMock.mockImplementation((itemId: number) => posed_shoes);
    await store.dispatch<any>(loadItem(71927));
    const state: RootState = store.getState();

    expect(apiMock).toBeCalledTimes(2);
    expect(Object.keys(state.data.itemsData)).toHaveLength(2);
    expect(state.data.itemsData[30987]).toStrictEqual(new ItemData(posed_coat));
    expect(state.data.itemsData[71927]).toStrictEqual(new ItemData(posed_shoes));
    expect(state.data.itemsData).toMatchSnapshot();
  });

  test('Action: ADD_ITEMS / Use-case: loadItem -- calls API only once if the item is already loaded', async () => {
    apiMock.mockImplementation((itemId: number) => posed_coat);
    await store.dispatch<any>(loadItem(30987));

    apiMock.mockImplementation((itemId: number) => posed_coat);
    await store.dispatch<any>(loadItem(30987));
    const state: RootState = store.getState();

    expect(apiMock).toBeCalledTimes(1);
    expect(Object.keys(state.data.itemsData)).toHaveLength(1);
    expect(state.data.itemsData[30987]).toStrictEqual(new ItemData(posed_coat));
    expect(state.data.itemsData).toMatchSnapshot();
  });
});
