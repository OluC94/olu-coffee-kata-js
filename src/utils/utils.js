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
        }
    }
};
