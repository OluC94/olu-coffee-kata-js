export const addNewCustomer = (customerList, name) => {
    const newCustomerData = {
        id: customerList.length + 1,
        name: name,
        stampCount: 0,
        coffeeCount: 0,
    };
    customerList.push(newCustomerData);
};
