type slicesQt = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: slicesQt;  
};

const pizza1: Pizza = {
  flavor: 'Calabresa',
  slices: 8
}

const pizza2: Pizza = {
  flavor: 'Marguerita',
  slices: 6
}

const pizz3: Pizza = {
  flavor: 'Nutela',
  slices: 4
}