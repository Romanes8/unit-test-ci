// Функция определения состояния здровья:
export function getStatus(character) {
    if (character.health > 50) {
        return 'healthy';
    } else if (character.health > 15 && character.health <= 50) {
        return 'wounded';
    } else {
        return 'critical';
    }
}


