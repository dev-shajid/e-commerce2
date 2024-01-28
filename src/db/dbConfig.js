import mongoose from 'mongoose';

export default async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);

    }


}

// const connection = {};

// export default async function connect() {
//     if (connection.isConnected) {
//         return;
//     }
//     if (mongoose.connections.length > 0) {
//         connection.isConnected = mongoose.connections[0].readyState;
//         if (connection.isConnected === 1) {
//             return;
//         }
//         await mongoose.disconnect();
//     }
//     const db = await mongoose.connect('mongodb://localhost:27017/ecommerce_b');
//     connection.isConnected = db.connections[0].readyState;
// }
