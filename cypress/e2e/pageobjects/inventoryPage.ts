export class InventoryPage {
    get menuButton() {
        return cy.get("#react-burger-menu-btn");
    }

    get logoutButton() {
        return cy.get("#logout_sidebar_link");
    }

    get sortingContainer() {
        return cy.get('[data-test="product_sort_container"]');
    }

    // Selector for product name elements
    get productNames() {
        return cy.get(".inventory_item_name");
    }

    // Selector for product price elements
    get productPrices() {
        return cy.get(".inventory_item_price");
    }

    logout() {
        this.menuButton.click();
        this.logoutButton.click();
    }
    // Method to sort products by Name (A to Z)
    sortProductsByNameAZ() {
        this.sortingContainer.select("az");
    }

    // Method to sort products by Name (Z to A)
    sortProductsByNameZA() {
        this.sortingContainer.select("za");
    }

    // Method to sort products by Price Low to High
    sortProductsByPriceLowToHigh() {
        this.sortingContainer.select("lohi");
    }

    // Method to sort products by Price High to Low
    sortProductsByPriceHighToLow() {
        this.sortingContainer.select("hilo");
    }

    // Helper method to get text values of product names
    getProductNamesText() {
        const names: string[] = [];
        this.productNames.each((element) => {
            // Use Cypress.$(element).text() to get the text of each element
            names.push(Cypress.$(element).text());
        });

        return names;
    }

    // Helper method to get text values of product prices
    getProductNamesPrices() {
        const prices: number[] = [];
        this.productPrices.each((element) => {
            // Use Cypress.$(element).text() to get the text of each element
            const priceText = Cypress.$(element).text();
            const numericPrice = parseFloat(priceText); // or parseInt(priceText, 10) for integers
            prices.push(numericPrice);
        });

        return prices;
    }

    // Method to check if products are sorted by Name
    isProductListSortedByName(order: string) {
        const productNames = this.getProductNamesText();
        let sortedNames;

        if (order === "AZ") {
            sortedNames = [...productNames].sort();
        } else if (order === "ZA") {
            sortedNames = [...productNames].sort((a, b) => b.localeCompare(a));
        }

        return JSON.stringify(productNames) === JSON.stringify(sortedNames);
    }

    // Method to check if products are sorted by Price
    isProductListSortedByPrice(order: string) {
        const productPrices = this.getProductNamesPrices();
        let sortedPrices;

        if (order === "lohi") {
            sortedPrices = [...productPrices].sort((a, b) => a - b);
        } else if (order === "hilo") {
            sortedPrices = [...productPrices].sort((a, b) => b - a);
        }

        return JSON.stringify(productPrices) === JSON.stringify(sortedPrices);
    }
}
export default new InventoryPage();
