import { test, describe, expect } from "vitest";
import { addNewCustomer } from "./utils";

describe("addNewCustomer", () => {
    test("successfully adds new customer", () => {
        const customerList = [
            {
                id: 1,
                name: "Emily",
                stampCount: 2,
                coffeeCount: 0,
            },
            {
                id: 2,
                name: "Jamie",
                stampCount: 1,
                coffeeCount: 1,
            },
        ];
        const newCustomer = "Daniel";
        const expectedCustomerList = [
            ...customerList,
            {
                id: 3,
                name: "Daniel",
                stampCount: 0,
                coffeeCount: 0,
            },
        ];
        addNewCustomer(customerList, newCustomer);

        expect(customerList.length).toBe(3);
        expect(customerList[2].name).toBe("Daniel");
        expect(customerList).toEqual(expectedCustomerList);
    });
});
