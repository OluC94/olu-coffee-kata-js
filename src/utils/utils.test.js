import { test, describe, expect } from "vitest";
import { addNewCustomer, redeemCoffee, updateStampCount } from "./utils";

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
        expect(customerList).toEqual(expectedResult2);
    });
    test("increments coffee count when 6 stamps achieved", () => {
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

        updateStampCount(customerList, 1);
        updateStampCount(customerList, 1);
        updateStampCount(customerList, 1);
        updateStampCount(customerList, 1);
        updateStampCount(customerList, 1);

        expect(customerList[0].stampCount).toBe(1);
        expect(customerList[0].coffeeCount).toBe(1);
    });
});

describe("redeemCoffee", () => {
    test("successfully decrements coffee count", () => {
        const customerList = [
            {
                id: 1,
                name: "Emily",
                stampCount: 2,
                coffeeCount: 5,
            },
            {
                id: 2,
                name: "Jamie",
                stampCount: 1,
                coffeeCount: 1,
            },
        ];
        const expectedResult = [
            {
                id: 1,
                name: "Emily",
                stampCount: 2,
                coffeeCount: 3,
            },
            {
                id: 2,
                name: "Jamie",
                stampCount: 1,
                coffeeCount: 0,
            },
        ];

        expect(redeemCoffee(customerList, 1)).containSubset(
            "Coffee successfully redeemed"
        );
        expect(redeemCoffee(customerList, 1)).containSubset(
            "Coffee successfully redeemed"
        );
        expect(redeemCoffee(customerList, 2)).containSubset(
            "Coffee successfully redeemed"
        );

        expect(customerList).toEqual(expectedResult);
    });

    test("cannot decrement beyond 0", () => {
        const customerList = [
            {
                id: 1,
                name: "Emily",
                stampCount: 2,
                coffeeCount: 5,
            },
            {
                id: 2,
                name: "Jamie",
                stampCount: 1,
                coffeeCount: 1,
            },
        ];
        redeemCoffee(customerList, 2);
        redeemCoffee(customerList, 2);
        expect(redeemCoffee(customerList, 2)).toBe(
            "Customer has insufficient tokens"
        );

        expect(customerList[1].coffeeCount).toBe(0);
    });
});
