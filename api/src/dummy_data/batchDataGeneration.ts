import {
  Records,
} from 'aws-sdk/clients/timestreamwrite';

const NUM_RECORDS = 100;

const usernames = [
  'stinkypete3',
  'MarshMallowPup',
  'OrionsBelt',
  'saltysailor55',
  'rudolph',
  'xXx_SniperDragon_xXx'
];

const drinks = [
  'beer',
  'shot',
  'cocktail',
  'water'
];

const getRandomUsername = (): string => {
  const index = Math.floor(Math.random() * usernames.length);
  return usernames[index];
};

const getRandomDrink = (): string => {
  const index = Math.floor(Math.random() * drinks.length);
  return drinks[index];
};

const getRandomQuantity = (): string => {
  return `${(Math.random() * 10).toFixed(1)}`;
};

const getRandomTime = (currentTime: number, maxOffset: number): string => {
  const offset = Math.floor(maxOffset * Math.random()) - 1;
  return `${(currentTime - offset).toString()}`;
};

export const generateData = (): Records => {

  const currentTime = Date.now();
  const maxOffset = 7 * 604000000;

  const data: Records = [];

  for (let i = 0; i < NUM_RECORDS; i++) {

    const params = {
      username: getRandomUsername(),
      drink: getRandomDrink(),
      quantity: getRandomQuantity(),
      // time: getRandomTime(currentTime, maxOffset),
      time: Date.now().toString(),
    };

    data.push({
      'Dimensions': [
        {'Name': 'drink', 'Value': params.drink},
        {'Name': 'username', 'Value': params.username},
      ],
      'MeasureName': 'quantity',
      'MeasureValue': params.quantity,
      'MeasureValueType': 'DOUBLE',
      'Time': params.time
    });
  }

  return data;
};
