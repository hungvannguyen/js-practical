(() => {
    function filterProducts(products, filterOption) {
        return products.filter(
            products => {
                for (const key in filterOption) {
                    if (key === 'minPrice') {
                        if (products['price'] < filterOption['minPrice']) {
                            return false;
                        }

                    }
                    else if (products[key] !== filterOption[key]) {
                        return false;
                    }
                }
                return true;
            }
        )
    }

    const products = [
        { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, isAvailable: true },
        { id: 2, name: 'T-Shirt', category: 'Apparel', price: 25, isAvailable: false },
        { id: 3, name: 'Headphones', category: 'Electronics', price: 150, isAvailable: true },
        { id: 4, name: 'Jeans', category: 'Apparel', price: 75, isAvailable: true },
    ];

    const filterOptions1 = { category: 'Electronics', isAvailable: true };
    const filterOptions2 = { minPrice: 100 };

    console.log(filterProducts(products, filterOptions2)); // Should return products matching the filter
})();

