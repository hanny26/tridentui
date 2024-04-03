const faker = require("faker");
const { MongoClient } = require("mongodb");
const lodash = require("lodash");

async function main() {
    const uri = "mongodb+srv://hannyvyas:hanny9054@cluster0.f9odr8p.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const productsCollection = client.db("food-ordering").collection("products");
        const categoriesCollection = client.db("food-ordering").collection("categories");

        // Drop existing "products" collection
        await productsCollection.drop();

        // Define categories
        let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map((category) => {
            return { name: category };
        });
        

        // Insert categories into "categories" collection
        await categoriesCollection.insertMany(categories);

        // Placeholder for image URLs
        let imageUrls = [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg"
        ];

        let products = [];
        for (let i = 0; i < 10; i += 1) {
            let newProduct = {
                name: faker.commerce.productName(),
                adjective: faker.commerce.productAdjective(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                category: lodash.sample(categories),
                imageUrl: lodash.sample(imageUrls)
            };
            products.push(newProduct);
        }

        

        // Insert generated products into "products" collection
        await productsCollection.insertMany(products);

        console.log("Products inserted successfully.");

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // Close the connection when done
        await client.close();
    }
}

// Call the main function
main();
