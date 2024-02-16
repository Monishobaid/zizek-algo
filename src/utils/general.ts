export function binarySearch(target: number): number {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let low = 0;
    let high = numbers.length;

        const mid = Math.floor((low + high) / 2);

        if (numbers[mid] === target) {
            console.log(numbers[mid]);
            return numbers[mid];
        } else if (numbers[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }

    return -1;
}
