export default function createSlider(items, indexOfFirst, maxLength) {
    return [
            { ...items.at(indexOfFirst - 1), key: Math.random() },
            ...items.slice(indexOfFirst, indexOfFirst + maxLength).map((element) => {
                return { ...element, key: Math.random() };
            }),
            ...items
                .slice(-(indexOfFirst + maxLength), indexOfFirst + 1)
                .map((element) => {
                return { ...element, key: Math.random() };
                })
        ]
}