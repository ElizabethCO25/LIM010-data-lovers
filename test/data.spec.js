global.window = global;
require('../src/data');
require('./data.spec.js');
const dataDeprueba = [{
  'id': 1,
  'num': '001',
  'name': 'Bulbasaur',
  'type': [
    'Grass',
    'Poison'],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'egg': '2 km',
  'avg_spawns': 69,
  'multipliers': [1.58],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'],
},
{
  'id': 3,
  'num': '003',
  'name': 'Venusaur',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '2.01 m',
  'weight': '100.0 kg',
  'egg': 'Not in Eggs',
  'avg_spawns': 1.7,
  'multipliers': null,
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
}, {
  'id': 2,
  'num': '002',
  'name': 'Ivysaur',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.99 m',
  'weight': '13.0 kg',
  'egg': 'Not in Eggs',
  'avg_spawns': 4.2,
  'multipliers': [
    1.2,
    1.6
  ],
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
}];
// Mostrar todos los pokemones
describe(dataPoker, () => {
  it('debería ser una función', () => {
    expect(typeof dataPoker).toEqual('function');
  });
  it('mostrar todos los pokemones', () => {
    expect(Array.isArray(dataPoker(dataDeprueba))).toEqual(true);
  });
});

// Ordenar alfabéticamente
describe(ordenadorAZ, () => {
  it('debería ser una función', () => {
    expect(typeof ordenadorAZ).toEqual('function');
  });
  it('debería ordenar alfabéticamente de A-Z', () => {
    expect(ordenadorAZ(dataDeprueba, 'ordenar-az')[0].name).toEqual('Bulbasaur');
  });
  it('debería ordenar alfabéticamente de Z-A', () => {
    expect(ordenadorAZ(dataDeprueba, 'ordenar-za')[0].name).toEqual('Venusaur');
  });
});
// Ordenar frecuencia de apariciòn
describe(ordenadorSpaws, () => {
  it('debería ser una función', () => {
    expect(typeof ordenadorSpaws).toEqual('function');
  });
  it('debería ordenar por frecuencia de aparición ascendente', () => {
    expect(ordenadorSpaws(dataDeprueba, 'asc')[0].avg_spawns).toEqual(1.7);
  });
  it('debería ordenar por frecuencia de aparición descendente', () => {
    expect(ordenadorSpaws(dataDeprueba, 'des')[0].avg_spawns).toEqual(69);
  });
});
// Filtrar Tipo
describe(filtrarTipo, () => {
  it('debería ser una función', () => {
    expect(typeof filtrarTipo).toEqual('function');
  });
  it('debería filtrar por tipo', () => {
    expect(filtrarTipo(dataDeprueba, 'Grass')[0].type[0]).toEqual('Grass');
  });
});
// Filtrar Debilidad
describe(filtrarDebil, () => {
  it('debería ser una función', () => {
    expect(typeof filtrarDebil).toEqual('function');
  });
  it('debería filtrar por debilidad', () => {
    expect(filtrarDebil(dataDeprueba, 'Ice')[0].weaknesses[1]).toEqual('Ice');
  });
});
// Kilòmetros recorridos
describe(eggPoke, () => {
  it('debería ser una función', () => {
    expect(typeof eggPoke).toEqual('function');
  });
  it('debería mostrar eclosiòn de huevos por kilómetros y porcentajes', () => {
    expect(eggPoke(dataDeprueba, '2 km')[0].egg).toEqual('2 km');
  });
});
