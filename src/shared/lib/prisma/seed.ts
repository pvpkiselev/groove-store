import { PRODUCTS } from "../../constants/seed-constants";
import prisma from "./prisma-client";

async function main() {
    await prisma.product.createMany({
        data: PRODUCTS,
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
