export const addNewCustomer = (customerList, name) => {
    const newCustomerData = {
        id: customerList.length + 1,
        name: name,
        stampCount: 0,
        coffeeCount: 0,
    };
    customerList.push(newCustomerData);
};

export const updateStampCount = (customerList, id) => {
    for (const customer of customerList) {
        if (customer.id === id) {
            customer.stampCount++;

            if (customer.stampCount === 6) {
                customer.stampCount = 0;
                customer.coffeeCount++;
            }
        }
    }
};

export const redeemCoffee = (customerList, id) => {
    for (const customer of customerList) {
        if (customer.id === id && customer.coffeeCount > 0) {
            customer.coffeeCount--;
            return "Coffee successfully redeemed";
        }
    }
    return "Customer has insufficient tokens";
};
