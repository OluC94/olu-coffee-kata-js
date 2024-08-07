import { test, describe, expect } from "vitest";
import { addNewCustomer, updateStampCount } from "./utils";

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

describe("update stamp count", () => {
    test("successfully increments stamp count by 1", () => {
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
        const expectedResult1 = [
            {
                id: 1,
                name: "Emily",
                stampCount: 2,
                coffeeCount: 0,
            },
            {
                id: 2,
                name: "Jamie",
                stampCount: 2,
                coffeeCount: 1,
            },
        ];
        const expectedResult2 = [
            {
                id: 1,
                name: "Emily",
                stampCount: 5,
                coffeeCount: 0,
            },
            {
                id: 2,
                name: "Jamie",
                stampCount: 2,
                coffeeCount: 1,
            },
        ];

        updateStampCount(customerList, 2);
        expect(customerList).toEqual(expectedResult1);

        updateStampCount(customerList, 1);
        updateStampCount(customerList, 1);
        updateStampCount(customerList, 1);
        console.log("c-list: ", customerList);
        console.log("er2: ", expectedResult2);
        expect(customerList).toEqual(expectedResult2);
    });
});
