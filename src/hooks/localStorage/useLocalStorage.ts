const useLocalStorage = (key: string) =>  {
    // Function to get item from local storage
    const getItem = () => {
        const item = localStorage.getItem(key) as any;
        try {
            return JSON.parse(item);
        } catch (error) {
            console.error("Error parsing item from local storage:", error);
            return null;
        }
    };

    // Function to set item in local storage
    const setItem = (value: any) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error setting item in local storage:", error);
        }
    };

    // Function to remove item from local storage
    const removeItem = () => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error("Error removing item from local storage:", error);
        }
    };

    // Function to clear all items from local storage
    const clearStorage = () => {
        try {
            localStorage.clear();
        } catch (error) {
            console.error("Error clearing local storage:", error);
        }
    };

    return { getItem, setItem, removeItem, clearStorage };
}

export default useLocalStorage;

// // Example usage

// // Set an item
// setItem({ name: "John", age: 30 });

// // Get the item
// console.log(getItem());

// // Remove the item
// removeItem();

// // Clear all items from local storage
// clearStorage();
