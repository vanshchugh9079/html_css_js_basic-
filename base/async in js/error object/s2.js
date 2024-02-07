try {
    let one = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("invalid code"));
        }, 3000);
    });

    async function two() {
        try {
            await one;
        } catch (error) {
            console.log(error.message);
        }
    }

    two();
} catch (error) {
    console.log(error);
}
