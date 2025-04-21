import { getStatus } from '../index.js'

describe('Проверка getStatus', () => {
    test('должен возвращать "healthy" при здоровье больше 50', () => {
        expect(getStatus({name: 'Боец', health: 75})).toBe('healthy');
        expect(getStatus({name: 'Лучник', health: 51})).toBe('healthy');
    });

    test('должен возвращать "wounded" при здоровье от 16 до 50', () => {
        expect(getStatus({name: 'Маг', health: 50})).toBe('wounded');
        expect(getStatus({name: 'Вор', health: 16})).toBe('wounded');
    });

    test('должен возвращать "critical" при здоровье 15 или меньше', () => {
        expect(getStatus({name: 'Рыцарь', health: 15})).toBe('critical');
        expect(getStatus({name: 'Мечник', health: 0})).toBe('critical');
    });
});